import{EventEmitter} from "node:events";

const sayHi = (name) => {
    console.log(`${name} logged in`);
};

const task = new EventEmitter();

task.on("greet", sayHi);
task.on("greet",(name) => {
    console.log(`${name} starts working`);
});
task.emit("greet", "Rahul Singh");
console.log();

