let {readFile} = require("fs");
readFile("read.js", "utf-8", (error, text) => {
    if (error) throw error;
    console.log("Содержимое файла: ", text);
});