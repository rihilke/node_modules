/* потоки */

const {createServer} = require("http");
createServer((request, response) => {
    response.writeHead(200, {"Content-type": "text/plain"});
    /* chunk - кусок
        имеет двоичный тип Buffer
    */ 
    request.on("data", chunk =>
        response.write(chunk.toString().toUpperCase()));
    request.on("end", () => response.end());
}).listen(8000);