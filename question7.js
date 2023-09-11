const http = require("http");

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.write("<h1>I am happy to learn full stack web development from PW Skills .</h1>");
    }
});


server.listen(5000);
console.log(`Server is running on the port:${5000}`);