import React from "react";
export default function Subscribe(){
    return <main>
        <h2 className="text-purple-700 text-4xl font-medium">Subscribe Now!</h2>
        <section className="flex flex-col md:flex-row gap-5 w-full items-center justify-center mt-5">
            <input type="email" name="emailemail" id="" placeholder="Email Address" className="w-[80%] md:w-[30%] h-7"/>
            <button className="w-[50%] md:w-[20%] lg:w-[5%] h-8 bg-purple-800 text-white border-none px-1">Subscribe</button>
        </section>
    </main>
}