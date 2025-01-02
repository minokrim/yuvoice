import React from "react";
import tellus from "../../assets/tellus.png"
import news from "../../assets/news.png"

export default function SubmitHeader(){
    return <main className="flex items-center justify-center">
        <div className="flex flex-col w-[85%] rounded-xl shadow-2xl p-5 bg-white">
            <section className="flex flex-col items-center text-center md:flex-row">
                <h1 className="text-2xl md:text-4xl font-semibold">Submit your story - </h1>
                <p className="text-xl md:text-2xl font-normal text-center items-center mt-1">Yuvoice believes in the power of personal, authentic stories. </p>
            </section>
            
            <section className="flex flex-col md:flex-row items-center justify-between">
                <p className="w-full mt-5 md:flex w-[45%] text-xl text-left">Your voice can inspire, educate, and create meaningful change. Whether it's highlighting a groundbreaking initiative, sharing your personal journey, or exploring the intersection of work and life—we want to hear from you!
                </p>
                <img src={news} alt="" className="w-full sm:w-3/4 md:w-2/4"/>
            </section>

            <section className="flex justify-center md:justify-start">
                <button className="w-1/8 bg-[#662D91] text-white rounded-lg p-2 text-xl px-5" >Submit</button>
            </section>
        </div>
    </main>
}