import mongoose from "mongoose";

const formSchema = new mongoose.Schema(
  {
    _id: String,
    question: String,
  },
  {
    collection: "form",
  }
);

const Form = mongoose.model("Form", formSchema, "form");

export default Form;
