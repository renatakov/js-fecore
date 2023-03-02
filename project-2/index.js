// const getFakeUser = require("get-fake-user");
// const config = require('./config')
// let writeUsers = require('./writeUsers')
// const users =   getFakeUser({
//     count: 3,
//     language: "uk",
//   })

// // writeUsers.nickname(users)
// // writeUsers.password(users)
// // config()
// console.log(writeUsers.info)

const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/mainPage.html");
});
app.get("/products", (req, res) => {
  res.sendFile(__dirname + "/products.html");
});
app.get("/404", (req, res) => {
  res.send("Error 404");
});
server.listen(5000, () => {
  console.log("Server started");
});
