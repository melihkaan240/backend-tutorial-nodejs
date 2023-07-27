const express =require("express")
const router =express.Router()

const path =require("path")

    router.use("/blogs/:blogid", function (req, res) {
    // path.join path yollarını birleştirir
      res.sendFile(path.join(__dirname,"../views/users","blog-details.html"));
    });
    
    router.use("/blogs", function (req, res) {
        res.sendFile(path.join(__dirname,"../views/users","blogs.html"));
    });
    
    router.use("/", function (req, res) {
        res.sendFile(path.join(__dirname,"../views/users","index.html"));
    });
    

    module.exports=router