var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req, res){
    var way = url.parse(req.url).pathname;
    way = 'index.html';

    fs.readFile(way, function(error, data){
        if(error){
            console.log(error);
            res.writeHead(404)
        }
        else{
            res.writeHead(200, { 'Content-Type' : 'text/html'});
            res.write(data.toString());
            console.log('data was sent');
            res.end();
        }
    });
    
    }).listen(8080, function(){
        console.log('Server is starting!');
    });