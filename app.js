//Syntax Parser: a program that reads your code and determines what it does and if its grammer is valid. It translates your code into computer instructions (ie. function hello() translated to function). Your code isnt given directly to the computer, its translated to something it can understand.

//Lexical Environment: where something sits physically in the code you write. 'lexical' means having to do with words or grammer. A lexical environment exisits in a programming language in which where something sits phycially is important because it determines where the computer stores it in its memory.

//Execution Context: a wrapper to help manage the code that is running. There are lots of lexical environments, an execution context manages which one is currently running.

//Name:Value pair is a name which maps to a unique value. A name can only have one value in any given context.

//Object is a collection of name/value pairs.

//When code is run in JS its run inside the execution context (global) wrapper. More than one can run at any given time, the base execution context in the global. Global is available to everything in your code. The java script engine creates a global object (window) and 'this' (variable refering to window object) (hint: type this or window in console log of blank JS file). There is also the outer environment and your code within the execution context.

//Global = not inside a function

//The execution context is created in two phases creation (desribed above)  & hoisting (setup memory space for variables and functions before code is actually ran, so when code begins to run line by line, it can access them. However variable value assignments arent read until code is run line by line, so they are initially set to undefined whilw functions are saved in their entirity therefore execute a function with an assigned value lowest in cascade)

//Hoisting 'put in memory': variables set up with the value undefined and functions are stored in their entirety in the memory. 

//Undefined = a special value that means that the veriable has not been set yet
//Error: Not Defined = variable was not defined and never put in memory at all

//Single Threaded: one command is executed at a time. Each program has many commands, single threaded is one is executed at a time. JS behaves in a single threaded manner.

//synchronus: one line of code is executed, in the order it appears, one at a time.

//Function invocation: running a function. In JS we do that by using () to envoke the function.

//Any time you envoke, or envoke a function in JS, a new execution context is created and put in the execution stack. The execution context that is at the top of the stack, is the one that is currently running. Every function creates a new execution context. When the function finishes, the execution context is popped off the stack and the next line of code in the global context is ran.

//Variable Environment: where the variables you created live, and how they relate to eachother in memory. Every execution context has its own variable environment, so they cant access variable values from the global environment. If not given a value, they will be undefined. 

//The Scope Chain: Every execution context has a reference to its outer environment (its outer environment can be the global execution context) which depends where the function sits lexically. It doesnt matter where functions are currently written, it matters where you envoke them. The syntax parser creates an appropriate outer environment relative to where its written. 

//If you change the lexical environment, ie put the function b inside function a, its lexical environment changes to within function a so when going down the scope chain it first searches within a, if not found it then looks to the global environment. 

//Scope: where a variable is available in your code

//Asynchronous Callbacks: more than one callback at a time. But if JS is sychronous, how does it handle this? In the browser there is the Javascript engine(main thats sychronous) as well as the rendering engine(paints the screen) and Http request engine that the JS engine can hook out to and other parts of the browser run those engines asychronously. 

//Within the JS engine, there is the execution chain...but also an event Queue, such as a click event or http request that JS listens for. When the stack is empty, it looks to see if a function needs to be ran for that event and creates and processes and execution context for it. But not fully asychronous b/c it wont be looked at UNTIL the execution stack is empty.

//Dynamic Typing: you dont tell the engine what type of data a variable holds, it figures it out while your code is running as opposed to static that tells the engine (ie boolean, string, number).

//Primitive Types- a type of data that represents a single value, in other words not an object: null, string, number, boolean, undefined,symbol (engine figures out the type of variable on the fly during execution: dynamic typing)

//Operators: a special function that is syntactically (written) different. Generally, operators take two parameters and return one result. ie + or > (which is a function)