const {createServer} = require("http");
//TODO: Change the encoding
let server = createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(`
    <h1>Hello!</h1>
    <p>You were looking for <code>${request.url}</code></p>
    <p>Вы искали <code>${request.url}</code></p>
    `);
    response.end();
});
server.listen(8000);
console.log("Начинаю слушать порт 8000");