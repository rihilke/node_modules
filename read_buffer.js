const {readFile} = require("fs");
readFile("read_buffer.js", (error, buffer) => {
    if (error) throw error;
    console.log("Файл содержит", buffer.length, "байт.", 
                "Первый байт: ", buffer[0]);
});