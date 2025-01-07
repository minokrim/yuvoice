import React from "react";
import StoriesCategoriesCard from "../../component/storiescategorycard";
import "./submitheader.css"
export default function StoriesCategories(){
    return <main className=" h-[100%] mt-10 w-[100%] flex flex-col justify-items-center items-center">
        <div className="w-[85%]">
        <section>
            <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-blue-600 h-14">Our story Categories</h2>
            <p className="text-base mt-1">We’re looking for real, raw, and impactful stories that fit into one of our key themes:</p>
        </section>

        <section className="h-[100%] flex flex-col items-center md:flex-row w-full gap-5 h-[90%] items-center justify-center py-10">

        <div className="grid grid-cols-1 w-[90%] p-0 h-full md:grid-cols-2 gap-5 md:w-[52%] md:p-0">
        <StoriesCategoriesCard category={"Brighter Tomorrow"} description={"Celebrate good news—stories of hope, innovation, and progress making a positive impact"}/>
            <StoriesCategoriesCard category={"Fiction"} description={"Share imaginative tales that explore journeys, futuristic worlds, or creative twists on life"}/>
            <StoriesCategoriesCard category={"Lifestyle & Relationship"} description={"Tell us about love, growth, and the lessons that shaped your life"}/>
            <StoriesCategoriesCard category={"Mental Health"} description={"Open up about challenges, healing, and tips for well-being in a safe space"}/>
        </div>

        <div className="flex w-[90%] h-full justify-self-center md:w-[20%] lg:w-[16%]">
        <StoriesCategoriesCard category={"Work & Life"} description={"Balancing your career and personal life?  Talk about balancing career and personal life or overcoming challenges at work"} className={"h-[6em] md:h-[11em]"} className2={"w-[80%] md:w-[62%]"} className3={'py-1.5 md:py-8 lg:py-4'}/>
        </div>

        <div className="w-[90%] flex flex-col gap-5 justify-center md:p-0 mt-0 md:w-[25%] md:gap-5" >
        <StoriesCategoriesCard category={"Brighter Tomorrow"} description={"Celebrate good news—stories of hope, innovation, and progress making a positive impact"}/>
        <StoriesCategoriesCard category={"Brighter Tomorrow"} description={"Celebrate good news—stories of hope, innovation, and progress making a positive impact"}/>
        </div>
        </section>
        </div>
    </main>
}