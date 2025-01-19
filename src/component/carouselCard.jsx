import React from "react";
import arrow from "../assets/arrow.png"
import "./carouselCard.css"
export default function CarouselCard({image,category,title}){
    return <main className=" lex flex-col w-[100%] h-[20em] justify-center">
        <img src={image} alt="" className="carousel-card"/>
        <section className="flex flex-col relative bottom-28 justify-start items-start ml-2 w-[50%] text-ellipsis">
            <h4 className="bg-[#9DE828] w-max px-2 md:px-10 py-2 mb-0 rounded-lg text-black font-medium text-xs">{category}</h4>
            <p className="inline-block text-black text-sm m-0 p-0 w-[100px] md:w-[150px] lg:w-[200px] overflow-hidden whitespace-nowrap text-ellipsis">{title}</p>
        </section>
        <section className="flex justify-end absolute left-[10.5em] bottom-[5.5em] md:bottom-[6em] md:left-[14em] lg:bottom-[5.8em] lg:left-[17em]">
            <img src={arrow} alt="" className="w-[2em] h-[2em] bg-gradient-to-b from-[#9DE828] to-[#23C6D8] rounded-full p-2"/>
        </section>
    </main>
}