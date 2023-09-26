'use client'

import Question from "./Question";
// import questions from "../util/questionsData.json";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Questions() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3033/questions").then((response) => {
        setQuestions(response.data);
    });
  }, []);

//   console.log("questions", questions);

  return (
    <>
             <div className="container mx-auto py-24 w-5/6 flex flex-col items-center gap-5">
                 <div className="flex flex-col items- gap-10 w-6/12">
                     <div className="flex w-7/12 h-200 bg-white p-5 rounded-xl items-center justify-between drop-shadow-md">
                         <div className="w-2/6">нэр</div>
                         <input type="text" style={{borderBottom:"2px dashed gray"}} className="p-2 mt-2 rounded-lg drop-shadow-l w-4/6" />
                     </div>
                     <div className="flex w-7/12 h-200 bg-white p-5 rounded-xl items-center justify-between drop-shadow-md">
                         <div className="w-2/6">e-mail хаяг</div>
                         <input type="text" className="p-2 mt-2 rounded-lg drop-shadow-l w-4/6" style={{borderBottom:"2px dashed gray"}} />
                     </div>
                     <div className="flex w-7/12 h-200 bg-white p-5 rounded-xl items-center justify-between drop-shadow-md">
                         <div className="w-2/6">мэргэжил</div>
                         <input type="text" className="p-2 mt-2 rounded-lg drop-shadow-l w-4/6" style={{borderBottom:"2px dashed gray"}} />
                     </div>
                
                 {questions?.map((ask,key) => (
                         <Question ask={ask} key={key}/>
                     ))}
                 <button className="w-40 h-10 rounded-xl bg-purple-500">submit</button>
                 </div>
     
             </div>
         </>
  );
}
