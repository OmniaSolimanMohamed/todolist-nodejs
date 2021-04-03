const http = require('http');
const fs = require("fs");
// const listtodos = require('../D1nodejs/todolist.json');
// const naturepage = require('./nature.html');
// const todopage = fs.readFileSync('../D1nodejs/todolist.json')
const naturepage = fs.readFileSync("./nature.html");
const quotesepage = fs.readFileSync("./quotes.html");
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            // const listtodos = fs.readFileSync('../D1nodejs/todolist.json')
            // const listtodos = fs.readFileSync("../D1nodejs/todolist.json",   encoding = "UTF-8" );
            const listtodos = require('../D1nodejs/todolist.json');

            list = [];
            list = listtodos;
            newlist = [];
            list.forEach((item) => {
                newlist.push(item.title);
                newlist.push(item.item);
                // ! I Can Echo them in HTML file and print that HTML file
            });
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(newlist));
            // res.end(newlist);
            break;

        case "/nature":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(naturepage);

            break;
        case "/nature/1.jpg":
            res.statusCode = 200;
            const one = fs.readFileSync("./nature/1.jpg");
            res.end(one);

            break;
        case "/nature/2.jpg":
            res.statusCode = 200;
            const two = fs.readFileSync("./nature/2.jpg");
            res.end(two);

            break;


        case "/quotes":
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(quotesepage);

            break;
        case "/quotes/Think_twice.jpg":
            res.statusCode = 200;
            const qone = fs.readFileSync("./quotes/Think_twice.jpg");
            res.end(qone);

            break;
        case "/quotes/Linus.jpg":
            res.statusCode = 200;
            const qtwo = fs.readFileSync("./quotes/Linus.jpg");
            res.end(qtwo);

            break;
        default:
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.end('<h1>Page not found</h1>');
            break;

    }
    //   res.statusCode = 200;
    //   res.setHeader('Content-Type', 'text/plain');
    //   res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
