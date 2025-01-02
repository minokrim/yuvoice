import React from "react";
import StoriesCategoriesCard from "../../component/storiescategorycard";
export default function StoriesCategories(){
    return <main className=" h-[100%] mt-10 w-[100%]">
        <section>
            <h2 className="text-4xl font-semibold">Our story Categories</h2>
            <p className="text-base mt-5">We’re looking for real, raw, and impactful stories that fit into one of our key themes:</p>
        </section>

        <section className="h-[100%] md:flex w-full gap-5 h-[90%] items-center justify-center">

        <div className="grid grid-cols-1 w-full p-3 md:grid-cols-2 gap-5 md:w-1/2 md:p-0">
        <StoriesCategoriesCard category={"Brighter Tomorrow"} description={"Celebrate good news—stories of hope, innovation, and progress making a positive impact"}/>
            <StoriesCategoriesCard category={"Fiction"} description={"Share imaginative tales that explore journeys, futuristic worlds, or creative twists on life"}/>
            <StoriesCategoriesCard category={"Lifestyle & Relationship"} description={"Tell us about love, growth, and the lessons that shaped your life"}/>
            <StoriesCategoriesCard category={"Mental Health"} description={"Open up about challenges, healing, and tips for well-being in a safe space"}/>
        </div>

        <div className="w-[11em] h-[15em] justify-self-center">
        <StoriesCategoriesCard category={"Work & Life"} description={"Balancing your career and personal life?  Talk about balancing career and personal life or overcoming challenges at work"}/>
        </div>

        <div className="w-full grid grid-col-1 gap-5 p-3 md:p-0 mt-0 md:w-[20em]">
        <StoriesCategoriesCard category={"Brighter Tomorrow"} description={"Celebrate good news—stories of hope, innovation, and progress making a positive impact"}/>
        <StoriesCategoriesCard category={"Brighter Tomorrow"} description={"Celebrate good news—stories of hope, innovation, and progress making a positive impact"}/>
        </div>
        </section>
    </main>
}