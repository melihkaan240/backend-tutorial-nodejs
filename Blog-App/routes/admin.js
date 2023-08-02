const express = require("express");
const router = express.Router();
const path =require("path")
router.use("/blog/create", function (req, res) {
  res.render("admin/blog-create");
  // path.join path yollarını birleştirir
  // res.sendFile(path.join(__dirname, "../views/admin", "blog-create.html"));11
});

router.use("/blogs/:blogid", function (req, res) {    
  res.render("admin/blog-edit");

  // path.join path yollarını birleştirir
    // res.sendFile(path.join(__dirname, "../views/admin", "blog-edit.html"));
  });

router.use("/blogs", function (req, res) {
  res.render("admin/blog-list");

  // path.join path yollarını birleştirir
  // res.sendFile(path.join(__dirname, "../views/admin", "blog-list.html"));
});



module.exports = router;
