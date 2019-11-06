'use strict';

const util = require('util');
const fs = require('fs');
const EventEmitter = require('./events');
require('./file-events');

// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };

const read = async (file) => {
  const fsRead = util.promisify(fs.readFile);
  const data = await fsRead(file);
  EventEmitter.emit('file-read');
  return data;
};

const capitalize = (data) => {
  let text = data.toString().toUpperCase();
  EventEmitter.emit('capitalize');
  return text;
};

const write = async (file, text) => {
  const fsWrite = util.promisify(fs.writeFile);
  await fsWrite(file, Buffer.from(text));
  fs.writeFile(file, Buffer.from(text));
};


// const readFile = (file) => {
//   fs.readFile( file, )
// }

let file = process.argv.slice(2).shift();

const groupFunction = async file => {
  // reads the file, place the results in a variable
  const data = await read(file);

  // passing data into the capitalize function
  const cappedData = capitalize(data);
  console.log(cappedData);
};
groupFunction(file);

// read(file);

module.exports = read;

