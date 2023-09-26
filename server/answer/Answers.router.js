import express from "express";
import { getAnswers } from "./Answers.service.js";

const answers = express.Router();
answers.use(express.json());

answers.get("/answers", async (req, res) => {
  let data = await getAnswers();
  console.log(data);
  if (data) res.status(200).send(data);
});

export default answers;
