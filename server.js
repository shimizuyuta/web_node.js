const http = require("http")
const port = process.env.PORT || 3000;

var server = http.createServer((req,res) =>{
    res.end('<html><body><h1>hello</h1></body></html>')
});
server.listen(8080, 'localhost');
