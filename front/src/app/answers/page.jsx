'use client'
import axios from "axios"
import Header from "@/components/Header";
import Users from "@/components/Users";
import { useEffect, useState } from "react";
// import answers from "../../util/answerData.json"

export default function Answers(){
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
      axios.get("http://localhost:3033/answers").then((response) => {
          setAnswers(response.data);
      });
    }, []);
    return(
        <div className="flex flex-col bg-purple-100 min-h-screen">
        <Header />
        <div className="container mx-auto py-24 w-5/6 flex  items-center gap-5">
            {answers?.map((answer, key={key})=>(
                <Users answer={answer} key={key}/>
            ))}
        </div>
        
        </div>
    )
}