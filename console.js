// 2.a.) The console object provides a simple debugging console that is similar to the JavaScript console mechanism provided by web browsers. It can be accessed from anywhere in a Node.js application.

// 2.b.)

// logs to the console the string "Hello World"
console.log("Hello World");

// Starts a timer that can be used to compute the duration of an operation
console.time("myTimer");

// creates an object called obj with two properties, name and age
const obj = { name: "John", age: 30 };

// I'm not sure I fully understand the dir method, but it appears to log to the console the properties of the object passed to it, similarly to console.log
console.dir(obj);

// ends the timer that was started with console.time and logs to the console the duration of the operation.
console.timeEnd("myTimer");
