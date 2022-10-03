const express = require("express");
const cors = require("cors");
require("./database/dbConnection");
// const xhr = new XMLHttpRequest();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const routes = require("./router/routes");
// const corsOptions = {
//   credentials: true,
//   allowedHeaders: [
//     "*",
//     "Content-Type",
//     "X-Requested-With",
//     "Accept",
//     "Authorization",
//     "x-api-key",
//     "Access-Control-Allow-Origin",
//     "Access-Control-Allow-Headers",
//   ],
//   exposedHeaders: ["sessionId"],
//   origin: "*",
//   hosts: "*",
//   methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
//   preflightContinue: false,
// };
app.use(cors());
//Routes
app.use("/api/v1", routes);

//Port listen in 3000
app.listen(process.env.PORT || 8000);
