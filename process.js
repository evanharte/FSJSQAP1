// 2.a.) The process object plays an important role in managing the Node.js runtime environment and provides information for various aspects of the running process. It can be accessed from anywhere in a Node.js application. Through logging different methods of the process object to the console, one can get information about the current process, the current working directory, and even memory usage.

// 2.b.)
// logs info to the console regarding the arguments provided in the command line following "node".
console.log(process.argv);

// I am not sure I fully understand the function of nextTick. However, it seems to be executed after all of the other code in the file has been executed. I can see how this can be useful.
process.nextTick(() => {
  console.log("Next tick callback");
});

// logs to the console the current working directory
console.log(process.cwd());

// logs to the console the current memory usage of the process
console.log(process.memoryUsage());
