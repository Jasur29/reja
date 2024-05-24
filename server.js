const http = require("http");

const mongodb = require("mongodb");
let db;
const connectionSrting =
  "mongodb+srv://Jack91:2072138@cluster0.lwm1j57.mongodb.net/Reja";
mongodb.connect(
  connectionSrting,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log(" ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      //console.log(client);
      const app = require("./app");
      const server = http.createServer(app); // server hosil qilindi
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The sever is running successfully on port: ${PORT} , http://localhost:${PORT}`
        );
      });
    }
  }
);
