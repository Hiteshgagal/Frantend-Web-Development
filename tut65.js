// Synchronous or bloking
// - line by line execution

//Asyn chrounous or non-bloking
  // - line by line execution not guaranteed
  // - callbacks will fire

  const fs = require("fs");
  fs.readFile("hitesh.txt", "utf-8", (erra, data)=>{
    console.log(data);
  });
  console.log("This is a message");