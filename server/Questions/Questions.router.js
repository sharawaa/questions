import express from "express";
import { getQuestions } from "./Questions.service.js";

const Questions = express.Router();
Questions.use(express.json());

Questions.get("/questions", async (req, res) => {
  let data = await getQuestions();
  console.log(data);
  if (data) res.status(200).send(data);
});

export default Questions;
