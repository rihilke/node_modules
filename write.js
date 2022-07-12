const {writeFile} = require("fs");
writeFile("graffiti.txt", "Здесь был Node", err => {
    if(err) console.log(`Не удалось записать файл: ${err}`);
    else console.log("Файл записан.");
});