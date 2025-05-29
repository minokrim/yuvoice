import React from "react";
import Nav from "../nav/nav";
import Footer from "../footer/footer";
export default function GetInTouch(){
    return <main className="bg-gradient-to-b from-purple-300/60 to-white items-center">
        <Nav/>
        <div className="flex justify-center align-middle items-center">
            <section className="flex-col bg-white w-[60%] text-start rounded-3xl px-10 sm:flex md:flex-row md:w-[80%]">
            <div className="w-[100%] md:w-[60%]">
                <h1 className="font-medium text-3xl md:text-4xl">Get in Touch</h1>
                <p className="w-[100%] font-normal md:w-[70%]">We'd love to hear from you! Whether you have questions, feedback, or are interested in our organization, please fill out the form, and we'll get back to you as soon as possible.</p>
                <p className="w-[100%] font-normal md:w-[70%]">For news inquiries or speaking/appearance requests for our C-Suite, please state this in your contact form request, FAO our Director of Publicity.</p>
            </div>
            <form action="" className="flex flex-col gap-10 w-[100%] md:w-[50%] align-middle pt-10 pb-10  md:pt-24 md:pb-24">
                <input type="text" name="name" id="name" placeholder="Name" className="w-[100%] md:w-[80%] h-10 border-[#7A848C] border-[4%] rounded-lg placeholder-grey placeholder:text-lg placeholder:pl-5 text-xl" />
                <input type="email" name="email" id="email" placeholder="email" className="w-[100%] md:w-[80%] h-10 border-[#7A848C] rounded-lg placeholder-grey placeholder:text-lg placeholder:pl-5 text-xl"/>
                <input type="text" name="message" id="message" placeholder="message"className="w-[100%] md:w-[80%] h-28 border-[#7A848C] rounded-lg placeholder-grey placeholder:text-lg placeholder:pl-5 text-xl"/>

                <button className="flex bg-[#662D91] text-white rounded-md px-10 py-4 self-center md:self-start">Send message</button>
            </form>
        </section>
        </div>
        <Footer/>
    </main>
}