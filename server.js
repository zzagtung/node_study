var http = require("http");
var url = require("url");   

function start(route, handle) {
    function onReqeust(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Reqeust for " + pathname + " received.");
        
        route(handle, pathname, response);
    }
    
    http.createServer(onReqeust).listen("8888");
    console.log("Server has started.");
}

exports.start = start;
