'use client'

import CrudQuestion from "@/components/CrudQuestion";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
// import questions from "../../util/questionsData.json"

export default function Add(){
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3033/questions").then((response) => {
          setQuestions(response.data);
      });
    }, []);

    return(
        <div className="flex flex-col bg-purple-100 min-h-screen">
              <Header />
        <div className="container mx-auto py-24 w-5/6 flex flex-col items-center gap-5">
            <form className="bg-gray-300 p-10  w-5/12 h-200 p-5 rounded-xl flex items-center justify-between">
                <textarea className="p-2 w-4/6 p-2 rounded-lg" placeholder="асуулт нэмэх" type="text" />
                <input type="button" className="w-24 h-10 bg-green-500 rounded-lg" name="save" id="" value="Save"/>
            </form>
            <div className="flex flex-col items-center justify-center gap-10 w-6/12">
            {questions?.map((ask,key) => (
                    <CrudQuestion ask={ask} key={key}/>
                ))}
            </div>
        </div>
        </div>
    )
}