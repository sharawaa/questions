import Link from "next/link";

export default function Header(){
    return(
        <div className="flex justify-center items-center w-full bg-white h-20 drop-shadow-md">
            <div className="container flex justify-between">
            <Link className=" rounded-lg" href={"/"}>LOGO</Link>
           <Link className="bg-red-500 p-2 rounded-lg" href={"/crud"}>aaa</Link>

            </div>


        </div>
    )
}