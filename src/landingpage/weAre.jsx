import React from "react";
import w1 from "../assets/img1.png"
import w2 from "../assets/img2.png"
import w3 from "../assets/img3.png"
import w4 from "../assets/img4.png"

export default function WeAre(){
    return <main className="flex flex-col gap-10 pb-20 md:pb-0">
        <section className="sm:flex flex-col items-center md:flex-row md:text-left">
            <div className="sm:w-[100%] rounded-0 flex lg:w-[60%] pt-5 items-center bg-gradient-to-b from-purple-600/20 to-orange-600/20 md:rounded-ee-[5em] pb-5">
            <div className="sm:w-[80%] ml-2 flex flex-col md:ml-10 lg:ml-28">
                <h3 className="sm:text-xl md:text-3xl font-bold">TurtleZence <span className="text-transparent bg-clip-text  bg-gradient-to-b from-[#662D91] via-[#E87528] to-[#D30FD3]">Platform</span></h3>
                <p className="sm:w-[100%] text-left md:w-[70%] lg:w-[38%]">TurtleZence is creating an AI-Backed that will disrupt the modern internet.</p>

                <section className="p-5 md:p-0">
                    <h4 className="sm:text-base md:text-xl font-semibold">We are actually <span className="text-transparent bg-clip-text  bg-gradient-to-b from-[#662D91] via-[#E87528] to-[#23C6D8]">"Social"</span></h4>
                    <ul className="sm:text-sm text-left md:text-base list-inside p-0">
                        <li>We connect real people to real causes.</li>
                        <li>We focus on genuine friendships in action-oriented communities.</li>
                        <li>Our game-changing algorithm rewards users for impact.</li>
                    </ul>
                </section>
            </div>
            </div>
            <img src={w1} alt="group hugging" className="hidden md:flex md:w-[30%] lg:w-[25%] h-60 rounded-tl-3xl rounded-br-3xl relative md:right-20 lg:right-40 lg:top-8"/>
        </section>


        <section className="sm:flex-col py-0 md:flex md:flex-row w-full items-center md:py-20">
            <section className="hidden md:flex items-center gap-5 relative md:left-60 lg:left-80">
                <img src={w3} alt=""  className="md:w-[25%] lg:w-[34%] h-40 object-cover rounded-tl-3xl rounded-br-3xl"/>
                <div className="flex flex-col gap-5">
                <img src={w4} alt=""  className="md:w-[40%] lg:w-[50%] h-40 object-cover rounded-tl-3xl rounded-br-3xl"/>
                <img src={w2} alt=""  className="md:w-[40%] lg:w-[50%] h-40 object-cover rounded-tl-3xl rounded-br-3xl"/>
                </div>
            </section>
        <section className="flex rounded-0 justify-center pb-5 bg-gradient-to-b from-purple-600/20 to-orange-600/20 md:rounded-bl-[5em] w-full h-60 md:pb-0">
            <div className="sm:w-[100%] p-5 flex flex-col md:w-[60%] md:ml-20 lg:w-[50%] md:p-0">
            <h4 className="sm:text-base font-medium md:text-xl md:font-semibold md:text-left">We are actually <span className="text-transparent bg-clip-text  bg-gradient-to-b from-[#662D91] via-[#E87528] to-[#23C6D8]">"Media"</span></h4>
                    <ul className="list-inside p-0 w-[100%] text-left">
                        <li>Our feed prioritizes high quality global stories and posts from real friends, not “brain rot” drivel or echo chambers.</li>
                        <li>We are an activism incubator, not an outrage incubator.</li>
                    </ul>
            </div>
        </section>
        </section>
    </main>
}