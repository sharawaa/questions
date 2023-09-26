import Form from "./Answers.schema.js";

export async function getAnswers() {
  try {
    let answers = await Form.find()
    console.log(answers);
    return answers;
  } catch (error) {
    console.error(error);
    return [];
  }
}
