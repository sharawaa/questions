import Header from "@/components/Header";
import answers from "../../util/answerData.json"

export default function Test(){
    const answer = answers[0]
    console.log("hi",answer);

    return(
        <div>
            <div className="flex flex-col bg-purple-100 min-h-screen">
            <Header />
            <div className="container mx-auto py-24 w-5/6 flex flex-col items-center gap-5">
            <div className="w-4/12 h-40 md:w-full md:items-center md:h-20  bg-white rounded-2xl p-2 flex  justify-around drop-shadow-xl">
            <div className="flex">
                <div className="w-36 text-center">нэр:</div>
                <div> {answer.name}</div>
            </div>

            <div className="flex">
                <div className="w-36 text-center">e-mail:</div>
                <div>{answer.eMail}</div>
            </div>
            <div className="flex">
                <div className="w-36 text-center">Мэргэжил:</div>
                <div>{answer.profession}</div>
            </div>
            <div className="flex">
                <div className="w-36 text-center">Боловсрол:</div>
                <div>{answer.educationalStatus}</div>
            </div>
            </div>
            <div className="container mx-auto py-24 w-5/6 flex flex-col  items-center gap-5"> 
        <div className="flex h-200 bg-white p-5 rounded-xl flex-col drop-shadow-md w-full">
          <div>asuul</div>
          <textarea  type="text" className="p-2 mt-2 rounded-lg drop-shadow-l" style={{borderBottom:"2px dashed gray"}}/>

        </div>
        <div className="flex h-200 bg-white p-5 rounded-xl flex-col drop-shadow-md w-full">
          <div>asuul</div>
          <textarea  type="text" className="p-2 mt-2 rounded-lg drop-shadow-l" style={{borderBottom:"2px dashed gray"}}/>

        </div>

            </div>
            </div>
            </div>
        </div>
    )
}