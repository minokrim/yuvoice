import React from "react";
import place from "../../assets/placeholder.jpg"
export default function SubmitUbn(){
    return <main className="flex flex-col mt-20 justify-center items-center">
        <div className="flex flex-col justify-center">
        <section className="pl-32">
            <h2 className="text-2xl text-left font-bold">UBN (Unbreak the News)</h2>
            <p className="w-[90%] text-left font-semibold text-xl">At Yuvoice, we’re rethinking the way stories are told—centered on humanity, truth, and compassion. Mainstream news often feels negative and impersonal, but we’re flipping the script to focus on the people behind the events.</p>
        </section>

        <section className="flex w-[80%] justify-center h-full gap-20 mt-10 border-4">
            <img src={place} alt="" className="w-1/3 h-[15em]"/>
            <div className=" flex flex-col w-max text-left">
                <h4 className="font-medium text-xl">Our Approach</h4>
                <ul className="flex flex-col mt-5 list-disc marker:text-orange-500 w-[65%] h-max justify-between">
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

        {/* <section className="w-full flex flex-row-reverse justify-center h-full gap-20 mt-10 pl-40">
            <img src={place} alt="" className="w-1/3 h-[15em] relative right-60"/>
            <div className=" flex flex-col w-max text-left">
                <h4 className="font-medium text-xl">Our Approach</h4>
                <ul className="flex flex-col mt-5 list-disc marker:text-orange-500 w-[65%] h-max justify-between">
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
        </section> */}
        </div>
    </main>
}