const fs = require("fs");
const path = require("path");

fs.readdir("D:\\office-work\\ext", function (error, files) {
    let newFiles = [];
    files.forEach((file) => {
        if (file.includes(".jpg")) {
            newFiles.push(path.join("D:\\office-work\\ext", file));
        }
    });

    console.log(newFiles);
});
