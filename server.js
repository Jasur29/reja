//expressJS. Nodejs platformasida oson va qulay kod yozish imkonini beradigan web framework.

console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

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
  //console.log(req.body);
  //res.json({ test: "success" });
});
// app.get("/author", function (req, res) {
//   res.render("author", { user: user });
// });
app.get("/", function (req, res) {
  res.render("reja", { user: user });
});

const server = http.createServer(app); // server hosil qilindi
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The sever is running successfully on port: ${PORT} , http://localhost:${PORT}`
  ); // muvafaqqiyatli ishlasa bu chiqadi.
});
