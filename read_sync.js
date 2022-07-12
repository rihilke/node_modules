const {readFile, readFileSync} = require("fs");
console.log("Содержимое файла: ",
                readFileSync("read_sync.js", "utf-8"));