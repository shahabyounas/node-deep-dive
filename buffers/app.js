const { Buffer } = require("buffer");
const { log } = require("console");

const memoryContainer = Buffer.alloc(4); // 4 bytes (32 bits)

memoryContainer[0] = 0xf4;
memoryContainer[1] = 0x34;
memoryContainer[2] = 0xb6;
memoryContainer[3] = 0xff;

log(memoryContainer);

log(memoryContainer[0]);
log(memoryContainer[1]);
log(memoryContainer[2]);
log(memoryContainer[3]);

const buff = Buffer.from("486921", "hex");
log(buff.toString("utf-8"));
