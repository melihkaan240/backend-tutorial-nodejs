const { log } = require("console");
var http = require("http")


// request response 



var server = http.createServer((req,res)=>{
    res.setHeader("Content-Type","text/plain")
    res.statusCode=200
    res.statusMessage="OK"

    res.write("hello world")
    res.end()
})

server.listen(3000)

console.log("node.js server at port 3000");