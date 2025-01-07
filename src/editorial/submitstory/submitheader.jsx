import React from "react";
import tellus from "../../assets/tellus.png"
import news from "../../assets/news.png"

export default function SubmitHeader(){
    return <main className="flex items-center justify-center p-5">
        <div className="flex flex-col w-[85%] rounded-xl shadow-2xl p-5 px-10 bg-white">
            <section className="flex flex-col items-left text-left">
                <h1 className="text-2xl font-semibold md:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-blue-600">Submit your story</h1>
                <p className="text-lg mt-2 md:text-2xl font-normal text-left items-center md:mt-0">Yuvoice believes in the power of personal, authentic stories. </p>
            </section>
            
            <section className="flex flex-col md:flex-col lg:flex-row items-center justify-between">
                <p className="w-full h-full mt-5 md:flex md:w-[90%] lg:w-[44%] text-2xl text-left">Your voice can inspire, educate, and create meaningful change. Whether it's highlighting a groundbreaking initiative, sharing your personal journey, or exploring the intersection of work and life—we want to hear from you!
                </p>
                <img src={news} alt="" className="w-full sm:w-3/4 md:w-[30em] rounded-xl"/>
            </section>

            <section className="flex justify-center md:justify-start mt-5 lg:mt-0">
                <button className="w-1/8 bg-[#662D91] text-white rounded-lg p-2 text-xl px-5 border-none" >Submit</button>
            </section>
        </div>
    </main>
}