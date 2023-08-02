const express = require("express");
const router = express.Router();

const path = require("path");

const data = {
    title:"Popüler Kurslar",
    categories:["Web Geliştirme","Programlama","Mobil Uygulamalar","Veri Analizi"],
    blogs:[
      {
        blogid:1,
        title:"Komple Uygulamali Web Geliştirme",
        description:"Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
        image:"1.jpeg",
        mainPage:true,
        approved:true
      },
      {
        blogid:2,
        title:"Python ile Sıfırdan İleri Seviye Python Programlama",
        description:"Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
        image:"2.jpeg",
        mainPage:true,
        approved:true
      },
      {
        blogid:3,
        title:"Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
        description:"Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular, React ve VueJs için sağlam bir temel oluşturun.",
        image:"3.jpeg",
        mainPage:false,
        approved:true
      },
        {
          blogid:4,
        title:"Node.js ile Sıfırdan İleri Seviye Web Geliştirme",
        description:"Node.js ile sıfırdan ileri seviye dinamik web uygulaması geliştirmeyi öğren.",
        image:"4.jpeg",
        mainPage:false,
        approved:true
        }

    ]
}

router.use("/blogs/:blogid", function (req, res) {
  res.render("users/blog-details");

  // path.join path yollarını birleştirir
  //   res.sendFile(path.join(__dirname,"../views/users","blog-details.html"));
});

router.use("/blogs", function (req, res) {
  res.render("users/blogs",data);

  // res.sendFile(path.join(__dirname,"../views/users","blogs.html"));
});

router.use("/", function (req, res) {
  res.render("users/index",data);

  // res.sendFile(path.join(__dirname,"../views/users","index.html"));
});

module.exports = router;
