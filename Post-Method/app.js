const http = require("http");
const routes = require("./routes") 
// html dosyalarını okumak ve yazdırmak için fs modülü kullanmamız gerekiyor
var fs = require("fs");

var server = http.createServer(routes);

server.listen(3000);

console.log("node.js server at port 3000");
