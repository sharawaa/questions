import mongoose from "mongoose";

const answerSchema = new mongoose.Schema(
  {
    _id: String,
    eMail: String,
    educationalStatus: String,
    profession: String,
    answers: [
      {
        question:String,
        answer: String
      }
    ],
  },
  {
    collection: "answers",
  }
);

const Form = mongoose.model("answer", answerSchema, "answers");

export default Form;
