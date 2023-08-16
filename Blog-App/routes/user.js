const express = require("express");
const router = express.Router();

const db = require("../data/db");


router.use("/blogs/:blogid",async function (req, res) {
  const id = req.params.blogid;
  try {
    const [blog, ]=await db.execute("select * from blog where blogid=?",[id])

    if(blog[0]){
     return   res.render("users/blog-details",{
        blog:blog[0]
      }); 
    }

res.redirect("/")
  } catch (error) {
    console.log(error);
  }

});

router.use("/blogs", async function (req, res) {

try{
  const [blogs, ] = await db.execute("select * from blog where approved=1")
  const [categories, ] = await db.execute("select * from category")
  res.render("users/blogs", {
    title: "Tüm Kurslar",
    blogs: blogs,
    categories: categories,
  });
}
catch(err){
console.log("this is your error:",err);
}

});

router.use("/", async function (req, res) {

  try{
    const [blogs, ] = await db.execute("select * from blog where approved=1 and mainPage=1")
    const [categories,] = await db.execute("select * from category")
    res.render("users/index", {
      title: "Popüler Kurslar",
      blogs: blogs,
      categories: categories,
    });
     console.log(blogs);
  }
  catch(err){
  console.log("this is your error:",err);
  }

});

module.exports = router;
