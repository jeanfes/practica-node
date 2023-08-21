const fs = require("node:fs");
// const text = fs.readFileSync("./archivo.txt","utf-8");
console.log("Leyendo el primer archivo ...");
fs.readFile("./archivo.txt", "utf-8")
    .then(text => {
        console.log(text);
    })

console.log("Haciendo cosas mientras lee el primer archivo ...");

console.log("Leyendo el segundo archivo ...");
fs.readFile("./archivo2.txt", "utf-8", (err, data) => {
    console.log("segundo texto: ",data);
});
// const text2 = fs.readFileSync("./archivo2.txt","utf-8");