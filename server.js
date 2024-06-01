const http = require("http");

const mongodb = require("mongodb");
let db;
const connectionString =
  "mongodb+srv://Jack91:2072138@cluster0.lwm1j57.mongodb.net/Reja";
mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log(" ERROR on connection MongoDB");
    else {
      console.log("MongoDB connection succeed");
      module.exports = client;
      //console.log(client); ichida database connection object
      const app = require("./app");
      const server = http.createServer(app); // server hosil qilindi
      let PORT = 7012;
      server.listen(PORT, function () {
        console.log(
          `The sever is running successfully on port: ${PORT} , http://localhost:${PORT}`
        );
      });
    }
  }
);
