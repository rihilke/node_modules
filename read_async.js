const {readFile} = require("fs").promises;
readFile("read_async.js", "utf-8")
    .then(text => console.log("Содержимое файла: ", text));