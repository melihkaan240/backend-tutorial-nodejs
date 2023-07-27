const express = require("express");
const router = express.Router();
const path =require("path")
router.use("/blog/create", function (req, res) {
  // path.join path yollarını birleştirir
  res.sendFile(path.join(__dirname, "../views/admin", "blog-create.html"));
});

router.use("/blogs/:blogid", function (req, res) {    
    // path.join path yollarını birleştirir
    res.sendFile(path.join(__dirname, "../views/admin", "blog-edit.html"));
  });

router.use("/blogs", function (req, res) {
  // path.join path yollarını birleştirir
  res.sendFile(path.join(__dirname, "../views/admin", "blog-list.html"));
});



module.exports = router;
