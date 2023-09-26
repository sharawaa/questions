



export default function CrudQuestion({ask}){

    return(<>
     <div className="flex w-5/6  bg-purple-300 p-5 rounded-xl flex-col items-center drop-shadow-md">
        <textarea type="text" defaultValue={ask.question} className="p-2 mt-2 rounded-lg w-full" />
        <div className="flex justify-between m-5 w-full ">
            <button className="w-24 h-10 rounded-lg bg-red-500">delte</button>
            <button className="w-24 h-10 rounded-lg bg-blue-500">update</button>
        </div>
        </div>
    </>)
}