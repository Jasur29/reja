//expressJS. Nodejs platformasida oson va qulay kod yozish imkonini beradigan web framework.

console.log("Web serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();

// const fs = require("fs");

// MONGO DB chaqirish
const db = require("./server").db();

// let user;
// fs.readFile("database/user.json", "utf8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });

//web serverni qurishda 4 bosqichi

//1 bosqich-expressga kirib kelayotgan malumotlarga bogliq kodlar yoziladi

app.use(express.static("public")); //browserdan kirib kelayotgan har qandar zaproslar uchun "public" folderi ochiq. MIDDLEWARE DESIGN PATTERN
app.use(express.json()); // kirib kelayotgan json holatidagi datani object holatiga ogirib beradi.
//client va server ortasida malumotlar json formatda boladi
app.use(express.urlencoded({ extended: true })); // htmldan traditional form request qilinganda express serverimiz qabul qilishi uchun. agar
//bu kod yozilmasa serverimiz htmldan kiritildan malumotlarni ignore qiladi. misol uchun kod kiritamiz browserda formda
//uni qabul qilish uchun shu kod zarur

//2 sessionga bogliq kodlar yoziladi/////////////////

//3 bosqichda ( express uchun BSSR  "backend server site randoring"  tanlandi ) yani backendda front endi quramiz yani view quramiz
//yani html
// bu traditional yol xisoblanadi
// back endda html yasab uni clientga yuboramiz. aynan shuning uchun view yasash uchun folder kerak bunda ejsdan foydalanamiz.
// va uni instal qivolamiz (npm i ejs)
// va undan song kod kiritamiz

// views ga bogliq kodlar
app.set("views", "views"); //yani bunda folder korsatilyapdi
app.set("view engine", "ejs"); // bunda view engine ejs ekanligini korsatilib berilyapdi.

// yani ejs orqali backend ichida front end yasaymiz.

//4 bosqich bu  routingga moljallangan bogliq kodlar.

// app.get("/hello", function (req, res) {
//   res.end(`<h1 style="background:red">HELLO WORLD by LEO</h1>`);
// });
// app.get("/gift", function (req, res) {
//   res.end(`<h1 style="background:red">siz sovgalar bolimidasiz</h1>`);
// });
app.post("/create-item", (req, res) => {
  console.log("user entered /creat-item");
  //console.log(req.body);
  const new_reja = req.body.reja;
  db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
    if (err) {
      console.log(err);
      res.end("smth went wrong");
    } else {
      res.end("successfully added");
    }
  });
});
// app.get("/author", function (req, res) {
//   res.render("author", { user: user });
// });
app.get("/", function (req, res) {
  console.log("user entered /");
  db.collection("plans")
    .find()
    .toArray((err, data) => {
      if (err) {
        console.log(err);
        res.end("smth went wrong");
      } else {
        console.log(data);
        res.render("reja", { items: data });
      }
    });
});

module.exports = app;
