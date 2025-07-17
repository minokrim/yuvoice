import React from "react";
import l1 from "../assets/bg5.webp"
export default function LandingPage1(){
    return <main className="h-[100vh] w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center md:items-start" style={{ backgroundImage: `url(${l1})` }}>
        <div className="mt-28 py-0 pl-5 w-[90%] md:w-[60%] lg:w-[30%] z-50 relative text-left md:pl-32 lg:py-10 lg:mt-40 justify-self-start">
        <section>
            <h3 className="sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-purple-800 to-blue-800">Our Vision</h3>
            <p className="text-white">To create a <b>global online town square for superheroes</b> — a space where <b>success is measured by the good you do</b> , not by fame, wealth, or power.</p>
        </section>

        <section>
            <h3 className="sm:text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-b from-purple-800 to-blue-800">Our Beliefs</h3>
            <p className="text-white">In our world, <b>people are valued for their purposeand positive contributions </b>,and <b>communities are built around shared causes </b>, not superficial connections.</p>
        </section>

        <button className="text-white bg-blue-700 font-light border-none rounded-md py-1 px-5 text-base">About Us</button>

        </div>

    </main>
}