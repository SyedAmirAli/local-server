const os = require("os");
const fs = require("fs");
const path = require("path");

function getIPv4Address() {
    const networkInterfaces = os.networkInterfaces();
    let ipv4Address = "";

    for (const interfaceName in networkInterfaces) {
        const networkInterface = networkInterfaces[interfaceName];

        for (const alias of networkInterface) {
            if (alias.family === "IPv4" && !alias.internal) {
                ipv4Address = alias.address;
                break;
            }
        }

        if (ipv4Address) {
            break;
        }
    }

    return ipv4Address;
}

const port = 9000;
const ipv4Address = getIPv4Address();

function makeFile(filePath = null, content = "") {
    if (!filePath) return null;

    if (!fs.existsSync(path.dirname(filePath))) {
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
    }

    if (!content && content.length < 1)
        content = `export const ipv4Address = '${ipv4Address}'; \nexport const logUrl = 'http://${ipv4Address}:${port}/data';\nexport const apiUrl = '${url()}';`;

    fs.writeFileSync(filePath, content, function (error) {
        console.log("WRITE FILE ERROR:", error);
    });
}

const url = (endpoint = "") => `http://${ipv4Address}:${port}${endpoint}`;
module.exports = { port, ipv4Address, url, makeFile };
