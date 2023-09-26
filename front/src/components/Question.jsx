


export default function Question({ask}){

    return(
        <div className="flex h-200 bg-white p-5 rounded-xl flex-col drop-shadow-md">
          <div>{ask.question}</div>
          <textarea  type="text" className="p-2 mt-2 rounded-lg drop-shadow-l" style={{borderBottom:"2px dashed gray"}}/>
        </div>
    )
}