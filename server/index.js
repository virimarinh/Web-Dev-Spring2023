/* Basic Web Server */
/* Node code runs once and sets up functions such as listeners
    Node is the save language as JavaScript*/
/* const is one of the three main key words
    var - two issues: JavaScript is also a programming language as well as OOP 
    it's considered bad habit to create variables unless completely necessary.
    ALWAYS FIRST CREATE COSTANTS - if needed switch to let - if that doesnt meet your need THEN you may switch to var
    let and var are almost exactly the same. let is the last key word
the variable http contains  */
const http = require('http');

const hostname = '127.0.0.1'; /* Rout path address */
const port = process.env.PORT || 3000 /* Your computer has an IP address, the port is a number between 1 and 25000. It takes the number 
                    and says there is a program associated to this number. You can only have one port number for each program. 
                    You request the information associated with that number and feed it back into your program */

/* When ever a new text message comes in - Use this function */
/*(req, res) list of parameters 
A reg is a request 
res helps us get a res to the server*/
const server = http.createServer((req, res) => { /* Registering a function */
  res.statusCode = 200; /* In this function- assume we'll be doing alot of processing. Everything needs to be handled asynchronous 
                        Therefore if you wnat to return something. You need to send a new message 
                        How do you send something to a message?*/
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});
/* listen - stops node from killing process*/
server.listen(port, hostname, () =>   /* If your function is only one line (no {}) then the return value is that line */
  console.log(`Server running at http://${hostname}:${port}/`) /* RETURN LINE This function means the funstion is done */
);