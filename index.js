const express = require("express");
const cors = require("cors");
const path = require("path");
require("./database/dbConnection");
// const xhr = new XMLHttpRequest();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "./uploads")));
const routes = require("./router/routes");
app.use(cors());
//Routes
app.use("/api/v1", routes);

//Port listen in 3000
app.listen(process.env.PORT || 8000);
