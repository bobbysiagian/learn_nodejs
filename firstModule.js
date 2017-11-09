var http = require('http'); 
var dt = require('./date'); //call module
var url = require('url');

//access using url sample : http://localhost:8080/?year=2017&month=July
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write("The date and time are currently: " + dt.myDateTime());
    //res.write(req.url);
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
}).listen(8080);