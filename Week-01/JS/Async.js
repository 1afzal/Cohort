const fs = require("fs") //importing fs library

function read(err , data)
{
  console.log(data);
}

const content = fs.readFile("Week01" , "utf-8" , read); //read file synchronously
const content1 = fs.readFile("output" , "utf-8" , read);

console.log(content) // print content 
console.log(content1)




