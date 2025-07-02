const fs = require("fs");
let text = fs.readFileSync("hitesh.txt", "utf-8");
text = text.replace("hitesh", "rohit");


console.log("the content of the file is");
console.log(text);

console.log("creating a new file...")
fs.writeFileSync("rohit.txt", text);