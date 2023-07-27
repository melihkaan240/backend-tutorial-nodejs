var http = require("http")

var server =http.createServer((request,response)=>{

if(request.url=="/"){
    response.writeHead(200,{"Content-Type":"text/html"});
// meta charset utf-8 ifadesi türkçe karakter kullanmamıza olanak sağlar
    response.write(`
    <html>
          <head>
          <title>anasayfa</title>
          
          <meta charset="utf-8">
         </head>
         <body>
         <h1>Anasayfa</h1>
         </body>
    </html>
    `)
    response.end()
}else if(request.url=="/blogs"){
    response.writeHead(200,{"Content-Type":"text/html"});

    response.write(`
    <html>
          <head>
          <title>blog sayfa</title>
          <meta charset="utf-8">

         </head>
         <body>
         <h1>Blog</h1>
         </body>
    </html>
    `)
    response.end()
}else{
    response.writeHead(404,{"Content-Type":"text/html"});

    

    response.write(`
    <html>
          <head>
          <title>404</title>
          <meta charset="utf-8">

         </head>
         <body>
         <h1>Aradığnız sayfa bulunamadı</h1>
         </body>
    </html>
    `)
    response.end()

}

})


server.listen(3000)

console.log("node.js server at port 3000");