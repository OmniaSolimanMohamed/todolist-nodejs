const http = require('http');
const fs = require("fs");
// const listtodos = require('../D1nodejs/todolist.json');
// const todopage = fs.readFileSync('../D1nodejs/todolist.json')
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.url) {
        case "/":
            // const listtodos = fs.readFileSync('../D1nodejs/todolist.json')
            const listtodos = fs.readFileSync("../D1nodejs/todolist.json",   encoding = "UTF-8" );

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            // res.end(JSON.stringify(listtodos));
            res.end(listtodos);
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
