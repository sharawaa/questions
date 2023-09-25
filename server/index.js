import express from "express";
import cors from "cors";
import "./config/mongodb.config.js";
import dotenv from "dotenv";
import Questions from "./Questions/Questions.router.js";
dotenv.config();
const app = express();
const port = 3033;

app.use(cors());
app.use(Questions);
app.use(express.json());

app.listen(port, () => {
  console.log("localhost:", port);
});
