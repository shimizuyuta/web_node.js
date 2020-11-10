const http = require("http")
const port = process.env.PORT || 3000;
const fs = require("fs");
const ejs = require("ejs")

const index_page = fs.readFileSync('./index.ejs','utf-8');

var server = http.createServer(getFromClient)


// const getFromClient = 
function getFromClient(req,res) {
    var content = ejs.render(index_page);
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(content)
    res.end();
}
    



server.listen(port)

