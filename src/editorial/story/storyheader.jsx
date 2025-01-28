import React from "react";
import { CiCalendar } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import person from "../../assets/person.png"
export default function StoryHeader({currentMedia,currentStory}){

    return <main className="flex bg-white w-[80%] p-10 rounded-2xl">
        <section>
            <p className="bg-[#9DE828] w-32 rounded-md py-2">{currentStory.acf.category[0]}</p>
            <h2 className="font-medium text-4xl w-[80%] text-left">{currentStory.title.rendered}</h2>
            <div className="flex text-center justify-center align-center items-center w-[80%]">
                <CiCalendar/>
                <p>{currentStory.date}</p>
                <hr />
                <img src={person} className="w-auto h-[1em]"/>
                <p>{currentStory.acf.writers_name}/</p>
                <hr />
                <CiLocationArrow1/>
                <p>{currentStory.acf.Country}</p>
            </div>
            <h3 className="font-normal text-left w-[70%]">{currentStory.acf.meta_description}</h3>
        </section>

        <section>
            <img src={currentMedia} alt="" className="rounded-2xl h-[20em] w-[35em] emobject-contain"/>
        </section>
    </main>
}