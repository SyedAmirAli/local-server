const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");
const cors = require("cors");
const { url, port, ipV4Address, makeFile } = require("./utils/address");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");
const fs = require("fs");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use("/images", express.static("D:\\office-work\\ext"));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/client", express.static(path.join(__dirname, "client")));

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*", // Allow this origin
        methods: ["GET", "POST"], // Allow these methods
        allowedHeaders: ["*"], // Allow these headers
        credentials: true, // Allow credentials
    },
});

io.on("connection", function (socket) {
    socket.emit("open", "WebSocket Connection Opened Successfully!");
    console.log("WebSocket Connection Opened!");

    socket.on("insert-message", async function (data) {
        console.log(data);

        // Insert the message into the database using Prisma
        try {
            const createdMessage = await prisma.message.create({
                data: {
                    description: data.message,
                },
            });

            // Emit the newly created message to the client
            socket.emit("get-message", {
                status: "success",
                data: createdMessage,
                message: "Message added successfully!",
            });
        } catch (error) {
            console.error("Error inserting message:", error);

            socket.emit("get-message", {
                message: "Failed to insert all messages!",
                status: "error",
                error,
            });
        }
    });
});
// Resolve the absolute path to the uploads directory
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const extension = path.extname(file.originalname).slice(1); // Remove the leading dot

        const uploadPath = path.resolve(__dirname, "public/uploads", extension);

        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath);
    },

    filename: function (req, file, cb) {
        const filename =
            Date.now() + "___" + file.originalname.replace(/[ \/*#]/g, "-");

        cb(null, filename);
    },
});

// Create Multer upload instance with the defined storage
const upload = multer({ storage });

// Express route to handle file uploads
app.post("/message/store", upload.array("files"), async (request, res) => {
    const { title, description } = request.body;

    try {
        const createMessage = await prisma.message.create({
            data: { title, description },
        });

        let createFiles = [];
        for (file of request.files) {
            const extension = path.extname(file.originalname).slice(1); // Remove the leading dot

            const newFile = {
                filename: file.filename,
                path: `public/uploads/${extension}/`,
                mimetype: file.mimetype,
                size: file.size,
                messageId: createMessage.id,
            };

            createFiles.push(await prisma.file.create({ data: newFile }));
        }

        const originalResponse = {
            status: "success",
            data: { ...createMessage, files: createFiles },
            message: "Files uploaded successfully!",
        };

        io.emit("stored-message", originalResponse);
        res.status(200).json(originalResponse);
    } catch (error) {
        console.error("Error uploading files:", error);
        res.status(500).json({
            status: "error",
            message: "Failed to upload files!",
            error,
        });
    }
});

app.get("/message/get", async function (request, response) {
    try {
        const messages = await prisma.message.findMany({
            orderBy: { id: "desc" },
            include: { files: true },
        });

        response.status(200).json({
            status: "success",
            data: messages,
            message: "Messages GET successfully!",
        });
    } catch (error) {
        response.status(500).json({
            message: "Failed to get all messages!",
            status: "error",
            error,
        });
    } finally {
        await prisma.$disconnect();
    }
});

app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "client/dist/index.html"))
);

app.get("/download/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const file = await prisma.file.findFirst({
            where: { id: parseInt(id) },
        });

        if (!file) {
            return res.status(404).send("File not found");
        }

        const filepath = path.join(__dirname, file.path, file.filename);

        if (!fs.existsSync(filepath)) {
            return res.status(404).send("File not found on server");
        }

        res.download(filepath, file.filename, (err) => {
            if (err) {
                console.error("Error downloading file:", err);
                res.status(500).send("Error downloading file");
            }
        });
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).send("Server error");
    }
});

app.delete("/message/delete/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const message = await prisma.message.findFirst({
            where: { id },
            include: { files: true },
        });

        if (!message) {
            return res.status(404).send("Message not found");
        }

        for (const file of message.files) {
            const filepath = path.join(__dirname, file.path, file.filename);
            if (fs.existsSync(filepath)) {
                fs.unlinkSync(filepath);
            }

            await prisma.file.delete({ where: { id: file.id } });
        }

        await prisma.message.delete({ where: { id: message.id } });

        const responseJson = {
            status: "success",
            data: { id },
            message: "Message deleted successfully!",
        };

        io.emit("deleted-message", responseJson);
        res.status(200).json(responseJson);
    } catch (error) {
        console.error("Server error:", error);
        const responseJson = {
            status: "error",
            data: undefined,
            message: "Failed to delete message!",
        };

        io.emit("deleted-message", responseJson);
        res.status(500).json(responseJson);
    }
});

httpServer.listen(port, ipV4Address, function () {
    console.log("Server Running On: " + url());
});

function makeIndexHtmlFile(production = false) {
    fs.readdir(
        path.join(__dirname, "client", "dist", "assets"),
        function (error, files) {
            if (error) return "Error!";

            const jsFiles = files.filter((file) => file.includes(".js"));
            const cssFiles = files.filter((file) => file.includes(".css"));
            const newUrl = url("/");

            const html = `
                <!DOCTYPE html>
                <html lang="en">
                    <head>
                        <meta charset="UTF-8" />
                        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                        <title>Local Server</title>

                        <script src="${newUrl}client/dist/socket.io-client.js"></script>
                        <script
                            type="module"
                            crossorigin
                            src="${newUrl}client/dist/assets/${jsFiles[0]}"
                        ></script>
                        <link
                            rel="stylesheet"
                            crossorigin
                            href="${newUrl}client/dist/assets/${cssFiles[0]}"
                        />
                    </head>
                    <body>
                        <div id="root"></div>

                        <script>
                            var socket = io("${newUrl}");
                            var apiUrl = "${newUrl}";
                        </script>
                    </body>
                </html>
            `;

            if (production) {
                makeFile(path.join(__dirname, "client/dist/index.html"), html);
            } else {
                makeFile(path.join(__dirname, "client/index.html"), html);
            }
        }
    );
    return ``;
}

makeIndexHtmlFile(true);
