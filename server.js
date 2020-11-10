const http = require("http")
const port = process.env.PORT || 3000;
const fs = require("fs");
const ejs = require("ejs")
const url = require("url");

const index_page = fs.readFileSync('./index.ejs','utf-8');
const style_css = fs.readFileSync('./style.css','utf-8')
var server = http.createServer(getFromClient)




// const getFromClient = 
function getFromClient(req,res) {
    var url_parts =url.parse(req.url);
    switch (url_parts.pathname) {
        case '/':
            var content = ejs.render(index_page,{
                title:'hey yo',
                content: 'bor'
            });
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(content);
            res.end();
            // code
            break;
            
        case'/style.css':
            res.writeHead(200,{'Content-Type': 'text/css'});
            res.write(style_css);
            res.end();
            break;
        
        default:
        res.writeHead(200,{'Contet-Type':'text/plan'});
        res.end('no no no');
        break;
            // code
    }
}
    



server.listen(port)

