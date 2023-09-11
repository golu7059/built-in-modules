const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const subscribeMessage = (toSubscribe) => {
   console.log(`Thanks for subscribing ${toSubscribe}`);
};

eventEmitter.addListener("subscribe",subscribeMessage);
console.log("Calling event listener before removing it ");
eventEmitter.emit("subscribe","physicsWallah");


console.log("Calling event listener after removing it");
eventEmitter.removeListener("subscribe",subscribeMessage);
eventEmitter.emit("subscribe","physicsWallah");