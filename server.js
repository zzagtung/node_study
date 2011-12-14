var http = require("http");
var url = require("url");   

function start(route, handle) {
    function onReqeust(request, response) {
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log("Reqeust for " + pathname + " received.");

        request.setEncoding("utf8");

        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '" + postDataChunk + "'.");
        });

        request.addListener("end", function() {
            route(handle, pathname, response, postData);
        });
    }
    
    http.createServer(onReqeust).listen("8888");
    console.log("Server has started.");
}

exports.start = start;
