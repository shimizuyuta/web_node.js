const http = require("http")
const port = process.env.PORT || 3000;
const fs = require("fs");
const req_res = (req,res) =>{
    fs.readFile('./index2.html','UTF-8',
    (error,data) =>{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
        console.log('hello world')
    }
    );
};



var server = http.createServer(req_res)
server.listen(port)

