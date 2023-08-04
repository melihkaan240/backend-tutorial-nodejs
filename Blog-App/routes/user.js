const express = require("express");
const router = express.Router();

const db = require("../data/db");


router.use("/blogs/:blogid", function (req, res) {
  res.render("users/blog-details");

  // path.join path yollarını birleştirir
  //   res.sendFile(path.join(__dirname,"../views/users","blog-details.html"));
});

router.use("/blogs", function (req, res) {
  db.execute("select * from blog where approved=1")
  .then((result) => {
    db.execute("select * from category")

      .then((sonuc) => {

        res.render("users/blogs", {
          title: "Tüm Kurslar",
          blogs: result[0],
          categories: sonuc[0],
        });
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

  // res.sendFile(path.join(__dirname,"../views/users","blogs.html"));
});

router.use("/", function (req, res) {
  db.execute("select * from blog where approved=1 and mainPage=1")
    .then((result) => {
      db.execute("select * from category")

        .then((sonuc) => {

          res.render("users/index", {
            title: "Popüler Kurslar",
            blogs: result[0],
            categories: sonuc[0],
          });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));

  // res.sendFile(path.join(__dirname,"../views/users","index.html"));
});

module.exports = router;
