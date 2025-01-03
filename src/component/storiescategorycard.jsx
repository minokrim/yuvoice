import React from "react";
import "./card.css"
export default function StoriesCategoriesCard({category,description,className,className2,className3}){
    return <main className={`h-full flex flex-col bg-gradient-to-b from-purple-600/30 to-blue-600/30 items-center justify-center rounded-lg ${className3}`}>
        <section className="flex flex-col h-max items-center justify-center pt-3">
        <h3 className="text-purple-900 text-sm font-semibold ">{category}</h3>
        <p className={`flex w-[80%] text-base font-extralight h-[5em] md:text-xs lg:text-base ${className} ${className2} ${className3}`}>{description}</p>
        </section>
    </main>
}