const http = require("http")
const port = process.env.PORT || 3000;
const fs = require("fs");
const ejs = require("ejs")
const url = require("url");
const qs = require("querystring")

const other_page = fs.readFileSync('other.ejs','utf-8')
const index_page = fs.readFileSync('index.ejs','utf-8');
const style_css = fs.readFileSync('style.css','utf-8')
var server = http.createServer(getFromClient)




// const getFromClient = 
function getFromClient(req,res) {
    var url_parts =url.parse(req.url,true);
    switch (url_parts.pathname) {
        case '/':
            response_index(req,res);
            break;
            
            
            // var content = ejs.render(index_page,{
            //     title:'hey yo',
            //     content: content
            // });
            // res.writeHead(200,{'Content-Type': 'text/html'});
            // res.write(content);
            // res.end();
            // // code
            // break;
        case '/other':
            // var content2 = ejs.render(other_page,{
            //     title:'hy',
            //     content:'bor'
            // });
            // res.writeHead(200,{'Content-Type': 'text/html'});
            // res.write(content2);
            // res.end();
            // break;
            response_other(req,res);
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

var data ={
    'taro':'33',
    'ziro':'333',
    'zima':'zima'
}

function response_index(req,res){
    var msg ='what the fuck' 
    var content2 = ejs.render(index_page,{
                title:'hy',
                content: msg,
                data: data,
            });
            res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(content2);
            res.end();
}
var response_other = (req,res) =>{
    var msg = 'これは厳格';
    if (req.method === 'POST'){
        var body ='';
        
        req.on('data',(data) =>{
            body += data;
        })
        
        req.on('end',() =>{
            var post_data = qs.parse(body);
            msg += 'you ' + post_data.msg;
            var content = ejs.render(other_page,{
                title:'ohter',
                content:msg,
            });
             res.writeHead(200,{'Content-Type': 'text/html'});
            res.write(content);
            res.end();
        })
    }
}



server.listen(port)

