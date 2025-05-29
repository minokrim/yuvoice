import React from "react";
import { CiCalendar } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import person from "../../assets/person.png"
export default function StoryHeader({currentMedia,currentStory}){

    return <main className="flex flex-col bg-white w-[90%] p-0 rounded-2xl lg:flex-row md:p-10 md:w-[80%] shadow-xl">
        <section className="p-5 md:p-0">
            <p className="bg-[#9DE828] w-32 rounded-md py-2">{currentStory.acf.category[0]}</p>
            <h2 className="font-medium text-2xl w-[100%] text-left md:text-4xl md:w-[80%]">{currentStory.title.rendered}</h2>
            <div className="flex flex-col text-center  align-center items-start w-[90%] gap-5 md:flex-row md:items-center">
                <section className="flex gap-5 items-center text-gray-500">
                <CiCalendar/>
                <p>{currentStory.date}</p>
                </section>
                
                <section className="flex gap-5 items-center text-gray-500">
                <img src={person} className="w-auto h-[1em]" alt=""/>
                <p>{currentStory.acf.writers_name}</p>
                </section>

                <section className="flex gap-5 items-center text-gray-500">
                <CiLocationArrow1/>
                <p>{currentStory.acf.Country}</p>
                </section>

            </div>
            <h3 className="font-normal text-left w-[100%] md:w-[70%]">{currentStory.acf.meta_description}</h3>
        </section>

        <section className="p-5 md:p-0">
            <img src={currentMedia} alt="" className="rounded-2xl h-auto w-full object-cover md:w-[35em] md:h-20em"/>
        </section>
    </main>
}