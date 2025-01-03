import React from "react";
import "../landingpage/LandingPage.css"
import arrow from "../assets/arrow.png"
import place from "../assets/placeholder.jpg";

export default function CarouselCard({image,category,title}){
    return <main className="w-[100%] h-[20em]">
        <img src={image} alt="" className="carousel-card"/>
        <section className="flex flex-col relative bottom-28 justify-start items-start ml-10 ">
            <h4 className="bg-[#9DE828] w-max px-10 py-2 mb-0 rounded-lg text-black font-medium text-xs">{category}</h4>
            <p className="text-white w-max text-sm m-0 p-0 flex flex-wrap">{title}</p>
        </section>
        <section className="flex justify-end relative bottom-32 right-10">
            <img src={arrow} alt="" className="w-[2em] h-[2em] bg-gradient-to-b from-[#9DE828] to-[#23C6D8] rounded-full p-2"/>
        </section>
    </main>
}