import React from "react";
import { Link } from "react-router-dom";
export default function EditorialDropDown(){
    return <main className="bg-[#FFFF] flex flex-col cursor-pointer gap-5 text-black text-sm font-medium rounded-b-xl rounded-tr-xl p-2 shadow-lg">
        <Link to="/editorialbody" className="text-black no-underline w-full">Global Stories</Link>
        <Link to="/submitstory" className="text-black no-underline pb-0 mb-0 w-full ">Submit story</Link>
    </main>
}