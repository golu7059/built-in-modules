const EventEmitter = require("events");
const eventEmitter = new EventEmitter;

const subscribeMessage = (Tosubscribe) =>{
    console.log(`Thanks for subscribing ${Tosubscribe}`);
}

eventEmitter.addListener("Subscribe",subscribeMessage);
eventEmitter.emit("Subscribe","College Wallah");
