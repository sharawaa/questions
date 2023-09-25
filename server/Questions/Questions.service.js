import Form from "./Questions.schema.js";

export async function getQuestions() {
  try {
    let questions = await Form.find().exec();
    console.log(questions);
    return questions;
  } catch (error) {
    console.error(error);
    return [];
  }
}
