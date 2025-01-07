import React from "react";
import approach from "../../assets/approach.png"
import approach1 from "../../assets/approach1.png"

export default function SubmitUbn(){
    return <main className="mt-10">
        <div className="flex flex-col justify-center items-center">
        <section className="flex flex-col w-[80%] justify-center">
            <h2 className="text-2xl text-left font-bold">UBN (Unbreak the News)</h2>
            <p className="w-[100%] text-left font-semibold">At Yuvoice, we’re rethinking the way stories are told—centered on humanity, truth, and compassion. Mainstream news often feels negative and impersonal, but we’re flipping the script to focus on the people behind the events.</p>
        </section>

        <section className="flex flex-col w-[80%] justify-center h-full gap-10 mt-10 md:flex-row md:gap-20 md:items-center">
            <img src={approach1} alt="" className="w-full md:w-full h-[15em] lg:w-1/3 "/>
            <div className="flex flex-col w-full text-left items-center md:w-2/5 md:items-start">
                <h4 className="font-medium text-xl">Our Approach</h4>
                <ul className="flex flex-col list-disc marker:text-orange-500 w-[100%] h-max justify-between gap-5 pl-0">
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

        <section className="flex flex-col w-[80%] justify-center h-full gap-10 mt-10 md:flex-row md:flex-row-reverse md:gap-20 md:items-center">
        <img src={approach} alt="" className="w-full md:w-2/3 h-[15em] lg:w-1/3"/>
        <div className="flex flex-col w-full text-left items-center md:w-2/5 md:items-start">
        <h4 className="font-medium text-xl">What we’re looking for</h4>
                <ul className="flex flex-col list-disc marker:text-orange-500 w-[100%] h-max justify-between gap-5 pl-0">
                    <li className="font-light text-lg">
                        <span className="text-orange-500 font-semibold">Untold Stories:</span>
                        Share experiences or perspectives that challenge typical narratives.
                    </li>
                    <li className="font-light text-lg">
                        <span  className="text-orange-500 font-semibold">Investigative Features:</span>
                        Dive into the truth behind social, political, or cultural issues.
                    </li>
                    <li className="font-light text-lg">
                        <span  className="text-orange-500 font-semibold"> In-depth Human Interest:</span>
                        Bring us authentic, heartfelt stories that spark meaningful conversations.
                    </li>
                </ul>
            </div>
        </section>
        </div>
    </main>
}