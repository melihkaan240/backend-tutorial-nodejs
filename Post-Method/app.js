var http = require("http");
// html dosyalarını okumak ve yazdırmak için fs modülü kullanmamız gerekiyor
var fs = require("fs");

var server = http.createServer((request, response) => {
  if (request.url == "/") {
    fs.readFile("index.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);

      response.end();
    });
  } else if (request.url == "/blogs") {
    fs.readFile("blogs.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);

      response.end();
    });
  }  else if (request.url == "/create" && request.method == "POST") {

    // veriyi inputtan alıp dataya atar
    const data =[]

     request.on("data",(chunk)=>{
      data.push(chunk)
     })

request.on("end",()=>{
// datayı alıp string hale getirir

  const result = Buffer.concat(data).toString();
  parseData = result.split("=")[1]

// string datayı alıp blogs.txt adında bir file oluşturup oraya yazar
  fs.appendFile("blogs.txt", parseData, (error) => {
    if (error) {
      console.log(error);
    } else {
      response.statusCode = 302;
      response.setHeader("Location", "/");
      response.end();
    }
  });

})

   
  }else if (request.url == "/create") {
    fs.readFile("create.html", (error, html) => {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.write(html);
  
        response.end();
      });
    
  }
   else {
    fs.readFile("404.html", (error, html) => {
      response.writeHead(404, { "Content-Type": "text/html" });
      response.write(html);

      response.end();
    });
  }
});

server.listen(3000);

console.log("node.js server at port 3000");
