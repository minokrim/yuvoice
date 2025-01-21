import React from "react";
import { Link } from "react-router-dom";
export default function GetinvolvedDropDown(){
    return <main className="bg-[#FFFF] text-black text-sm cursor-pointer font-medium rounded-b-xl rounded-tr-xl p-2 shadow-lg">
        <p className="w-full">TSB</p>
        <p className="pb-0 mb-0"><Link to="/volunteer">Volunteer</Link></p>
        <p className="pb-0 mb-0">Donate</p>

    </main>
}