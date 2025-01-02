import React from "react";
export default function ChooseUsCard({image,reason,explanation}){
    return <main className="flex flex-col w-full items-center gap-5">
        <img src={image} alt="" className="w-[2em]"/>
        <h3 className="text-purple-700 text-xl font-normal">{reason}</h3>
        <hr className="border-1/2 border-purple-700 w-[10%]"/>
        <p className="w-[50%] font-extralight">{explanation}</p>
    </main>
}