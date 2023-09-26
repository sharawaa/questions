import Link from "next/link";

export default function Users({answer}){

    return(
        <Link href={`/answers/${answer._id}`} className="w-4/12 h-40 bg-white rounded-2xl p-2 flex flex-col justify-around drop-shadow-xl">
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
        </Link>
    )
}