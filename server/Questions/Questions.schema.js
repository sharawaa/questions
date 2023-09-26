import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    _id: String,
    question: String,
  },
  {
    collection: "questions",
  }
);

const Form = mongoose.model("Form", formSchema, "questions");

export default Form;
