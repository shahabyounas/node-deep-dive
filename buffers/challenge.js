// 0100 1000 0110 1001 0010 0001

const { Buffer } = require("buffer");

const bMemory = Buffer.alloc(3); // 24 bits / 8 => 3 bytes

bMemory[0] = 0x48;
bMemory[1] = 0x69;
bMemory[2] = 0x21;

console.log(bMemory.toString("utf-8"));

const buff = Buffer.from("Hi!", "utf-8");

console.log(buff);
