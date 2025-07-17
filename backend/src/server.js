import express from "express";
import cors from "cors"
import { ENV } from "../config/env.js";
import { connectDB } from "../config/db.js";
import {clerkMiddleware} from "@clerk/express"


const app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())


connectDB().then(r => app.listen(ENV.PORT, () => {
  console.log("server is up and running on PORT:", ENV.PORT);
}));

app.get("/",(req,res) => res.send("Hello from server"))


