// import * as readline from 'readline';
// import fs from "fs"
// import mongoose from "mongoose"
// import { hostname } from "node:os"
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });-----------------------------------------

// rl.question('Enter Option ', (option) => {
//   console.log(option)
//   if (option == "1") read();
//   rl.close();
// });





// function read() {

//   fs.readFile("text.txt", "utf8", (err, data) => {
//     if (err)
//       console.log(err)
//     console.log(data)
//   })

// }

// async function write() {

//   let content;
//   rl.question('Enter Content', (name) => {
//     content = name
//     rl.close();
//   });

//   fs.writeFile("text.txt", content, (err) =>(console.log(err)))



// }



// main()
//   .then((res) => (console.log("Connected with the database")))
//   .catch((err) => (console.log("Error")))


// async function main() {
//   await mongoose.connect(`mongodb://mongo-container:27017/Authentication`)
// } 