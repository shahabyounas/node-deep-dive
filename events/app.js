const EventEmitter = require("events");

class Emitter extends EventEmitter {}

const myEmitter = new Emitter();

myEmitter.on("test", () => {
  console.log("Event Test Fired");
});

myEmitter.on("test", () => {
  console.log("Event Test Fired new");
});

myEmitter.once("foo", () => {
  console.log("run event emitter once");
});

myEmitter.emit("test");
myEmitter.emit("foo");
myEmitter.emit("foo");
myEmitter.emit("foo");
