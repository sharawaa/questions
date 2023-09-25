


export default function ({ask}){

    return(
        <div className="flex w-8/12 h-200 bg-purple-300 p-10 rounded-xl flex-col drop-shadow-md">
          <div>{ask.question}</div>
          <textarea  type="text" className="p-2 mt-2 rounded-lg" />

        </div>
    )
}