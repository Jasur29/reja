console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

//web serverni qurishda 4 bosqichi

//1 bosqich-expressga kirib kelayotgan malumotlarga bogliq kodlar yoziladi

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // htmldan form request qilinganda express serverimiz qabul qilishi uchun

//2 sessionga bogliq kodlar yoziladi

//3 bosqichda ( express uchun BSSR  back end server site randoring  tanlandi ) yani back endda front endi quramiz yani view quramiz bu traditional yol xisoblanadi
// back endda html yasab uni clientga yuboramiz. aynan shuning uchun view yasash uchun folder kerak bunda ejsdan foydalanamiz. va uni instal qivolamiz (npm i ejs)
// va undan song kod kiritamiz

// views ga bogliq kodlar
app.set("views", "views"); //yani bunda folder korsatilyapdi
app.set("view engine", "ejs"); // bunda view engine ejs ekanligini korsatilib berilyapdi.

// yani ejs orqali backend ichida front end yasaymiz.

//4 bosqich bu  rooterlarga moljallangan bogliq kodlar.

// app.get("/hello", function (req, res) {
//   res.end(`<h1 style="background:red">HELLO WORLD by LEO</h1>`);
// });
// app.get("/gift", function (req, res) {
//   res.end(`<h1 style="background:red">siz sovgalar bolimidasiz</h1>`);
// });
app.post("/create-item", (req, res) => {
  console.log(req.body);
  res.json({ test: "success" });
});
app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app); // server hosil qilindi
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The sever is running successfully on port: ${PORT}`); // muvafaqqiyatli ishlasa bu chiqadi.
});
