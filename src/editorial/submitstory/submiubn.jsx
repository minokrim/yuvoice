import React from "react";
import place from "../../assets/placeholder.jpg"
export default function SubmitUbn(){
    return <main className="mt-10">
        <div className="flex flex-col justify-center items-center">
        <section className="flex flex-col w-[80%] justify-center">
            <h2 className="text-2xl text-left font-bold">UBN (Unbreak the News)</h2>
            <p className="w-[100%] text-left font-semibold">At Yuvoice, we’re rethinking the way stories are told—centered on humanity, truth, and compassion. Mainstream news often feels negative and impersonal, but we’re flipping the script to focus on the people behind the events.</p>
        </section>

        <section className="flex w-[80%] justify-center h-full gap-20 mt-10">
            <img src={place} alt="" className="w-1/3 h-[15em]"/>
            <div className=" flex flex-col w-2/5 text-left">
                <h4 className="font-medium text-xl">Our Approach</h4>
                <ul className="flex flex-col mt-2 list-disc marker:text-orange-500 w-[100%] h-max justify-between gap-5">
                    <li className="font-light text-lg w-full">
                        <span className="text-orange-500 font-semibold">Human-first Journalism:</span>
                        Highlighting the individuals and emotions behind the headlines.
                    </li>
                    <li className="font-light text-lg">
                        <span  className="text-orange-500 font-semibold">Solutions-driven:</span>
                        Shining a light on progress and efforts to tackle challenges.
                    </li>
                    <li className="font-light text-lg">
                        <span  className="text-orange-500 font-semibold">Balanced Perspective: </span>
                        Encouraging empathy and dialogue through fair, thoughtful narratives.
                    </li>
                </ul>
            </div>
        </section>

        <section className="flex flex-row-reverse w-[80%] justify-center h-full gap-20 mt-10">
            <img src={place} alt="" className="w-1/3 h-[15em]"/>
            <div className=" flex flex-col w-2/5 text-left">
                <h4 className="font-medium text-xl">Our Approach</h4>
                <ul className="flex flex-col mt-2 list-disc marker:text-orange-500 w-[100%] h-max justify-between gap-5">
                    <li className="font-light text-lg">
                        <span className="text-orange-500 font-semibold">Human-first Journalism:</span>
                        Highlighting the individuals and emotions behind the headlines.
                    </li>
                    <li className="font-light text-lg">
                        <span  className="text-orange-500 font-semibold">Solutions-driven:</span>
                        Shining a light on progress and efforts to tackle challenges.
                    </li>
                    <li className="font-light text-lg">
                        <span  className="text-orange-500 font-semibold">Balanced Perspective: </span>
                        Encouraging empathy and dialogue through fair, thoughtful narratives.
                    </li>
                </ul>
            </div>
        </section>
        </div>
    </main>
}