const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("welcome to the home page.");
    }
    if (req.url === '/contact') {
        res.end("welcome to the CONTACT page.");
    }  
    res.end(`
    <h1>Ooops...</h1>
    <p>The page your are looking for is not available.</p>
    <a href='/'>Home Page</a>
    `);
});

server.listen(5000);