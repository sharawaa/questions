import Link from "next/link";

export default function Header(){
    return(
        <div className="flex justify-center items-center w-full bg-white h-20 drop-shadow-md">
            <div className="container flex justify-between">
           <div>LOGO</div>
           <Link className="bg-red-500 rounded-lg" href={"/add"}>aaa</Link>

            </div>


        </div>
    )
}