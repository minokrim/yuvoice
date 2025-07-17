import React from "react";
import { Link } from "react-router-dom";
export default function GetinvolvedDropDown(){
    return <main className="bg-[#FFFF] text-black text-sm cursor-pointer font-medium rounded-b-xl rounded-tr-xl p-2 shadow-lg">
        <Link to="/getintouch" className="text-black no-underline">
                <p className="w-full">TSB</p>
        </Link>

        <Link to="/volunteer" className="text-black no-underline">
            <p className="pb-0 mb-0">Volunteer</p>
        </Link>
    </main>
}