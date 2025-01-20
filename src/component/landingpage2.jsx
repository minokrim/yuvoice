import React from "react";
import l2 from "../assets/l6.jpg"
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
export default function LandingPage2(){
    return <main className="h-[100vh] w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center md:items-start" style={{ backgroundImage: `url(${l2})` }}>
        <section className="mt-28 py-0 pl-5 w-[90%] flex flex-col md:w-[60%] lg:w-[30%] z-50 relative text-left md:pl-32 lg:py-10 lg:mt-40 justify-self-start ">
            <p className="bg-[#9DE828] w-max px-4 py-1 rounded-xl">fiction</p>
            <h3 className="text-3xl text-transparent bg-clip-text bg-gradient-to-b from-purple-800 to-blue-800">Reclamation</h3>
            <p className="text-sm lg:text-base mt-0 pt-0">Emile scowled theatrically at the mirror. His imagination ran wild with unearned pride. That’s how I’ll look, he thought. That’s how I’ll look when I march up to receive that shiny, new badge. He could see it in his mind so clearly. </p>


            <div className="flex gap-5">
                <figure className="flex justify-start">
                    <IoPersonOutline/>
                    <figcaption>Wopicho Tony</figcaption>
                </figure>

                <figure className="flex justify-start">
                    <IoLocationOutline/>
                    <img src="" alt="" />
                    <figcaption>USA</figcaption>
                </figure>
            </div>

            <button className="text-white bg-blue-700 font-light border-none rounded-md py-2 px-5 text-base mt-5 mb-0 lg:mb-10 md:mt-10 lg:mt-20">Read More</button>
        </section>
    </main>
}