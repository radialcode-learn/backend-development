const express = require("express");
const cors = require("cors");
const path = require("path");
require("./database/dbConnection");
// const xhr = new XMLHttpRequest();
const app = express();
app.use(express.json());
const http = require("http").Server(app);
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
const routes = require("./router/routes");
app.use(cors());
//Routes
app.use("/api/v1", routes);

const io = require("socket.io")(http);

const usp = io.of("message");

usp.on("connection", function (socket) {
  console.log("user connected");
  socket.on("disconnect", function () {
    console.log("user disconnected");
  });
});

//Port listen in 8000
http.listen(process.env.PORT || 8000);
