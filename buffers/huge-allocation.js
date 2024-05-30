const { Buffer, constants } = require("buffer");

const buffer = Buffer.alloc(1e9);

console.log(buffer.length, constants.MAX_LENGTH);

setInterval(() => {
  //   for (let i = 0; i < buffer.length; i++) {
  //     buffer[i] = 0x22;
  //   }

  buffer.fill(0x22);
}, 8000);
