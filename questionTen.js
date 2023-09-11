const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

const subscribeMessage = (channelName) => {
    console.log(`Thanks for subscribing ${channelName}`);
}

eventEmitter.addListener("Subscribe",subscribeMessage);
eventEmitter.emit("Subscribe","Abhiraj XYZ");

console.log(`The maximum number of event listeners are ${eventEmitter.getMaxListeners()}`);

eventEmitter.setMaxListeners(5);
console.log(`After update now maximum number of event listeners are ${eventEmitter.getMaxListeners()}`);