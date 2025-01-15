import React from "react";
import { CiCalendar } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";
import person from "../../assets/person.png"
export default function StoryHeader({currentMedia,currentStory}){

    return <main className="flex bg-white">
        <section>
            <p className="bg-[#9DE828] w-32">{currentStory.acf.category[0]}</p>
            <h2>{currentStory.title.rendered}</h2>
            <div>
                <CiCalendar/>
                <hr />
                <img src={person} alt="" />
                <p>{currentStory.acf.writers_name}/</p>
                <hr />
                <CiLocationArrow1/>

            </div>
            <h3>{currentStory.acf.meta_description}</h3>
        </section>

        <section>
            <img src={currentMedia} alt="" />
        </section>
    </main>
}