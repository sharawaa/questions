import Question from "./Question";
import questions from "../util/questionData.json"

export default function Questions(){
    console.log(questions);
    return(
    <>
        <div className="container mx-auto py-24 w-5/6 flex flex-col gap-5">
            <div className="flex flex-col items-center justify-center gap-10">
                {questions.map((ask) => (
                    <Question ask={ask}/>
                ))}
            </div>
 
        </div>
    </>
    )
}