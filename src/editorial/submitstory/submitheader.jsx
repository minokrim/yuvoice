import React from "react";
import tellus from "../../assets/tellus.png"
export default function SubmitHeader(){
    return <main className="flex items-center justify-center">
        <div className="flex flex-col w-[85%] rounded-xl shadow-2xl p-5 bg-white">
            <section className="flex items-center text-center">
                <h1 className="text-4xl font-semibold">Submit your story - </h1>
                <p className="text-2xl font-normal text-center items-center mt-1">Yuvoice believes in the power of personal, authentic stories. </p>
            </section>
            
            <section className="flex items-center justify-between">
                <p className="flex w-[45%] text-xl text-left">Your voice can inspire, educate, and create meaningful change. Whether it's highlighting a groundbreaking initiative, sharing your personal journey, or exploring the intersection of work and life—we want to hear from you!
                </p>
                <img src={tellus} alt="" className="flex w-2/4 item-left"/>
            </section>

            <section className="flex">
                <button className="w-1/8 bg-[#662D91] text-white rounded-lg p-2 text-xl px-5" >Submit</button>
            </section>
        </div>
    </main>
}