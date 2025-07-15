import express from "express";
import { ENV } from "../config/env.js";
import { connectDB } from "../config/db.js";

//middlewares
const app = express();

connectDB().then(r => app.listen(ENV.PORT, () => {
  console.log("server is up and running on PORT:", ENV.PORT);
}));

app.get("/",(req,res) => res.send("Hello from server"))


