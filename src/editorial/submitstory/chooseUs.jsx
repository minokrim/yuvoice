import React from "react";
import ChooseUsCard from "../../component/chooseUsCard";
import pg from "../../assets/pg.png"
import ce from "../../assets/ce.png"
import ge from "../../assets/ge.png"

export default function ChooseUs(){
    return <main className="flex flex-col mt-20 bg-gradient-to-b from-purple-600/20 to-orange-600/40">
        <h2 className="text-3xl font-bold text-purple-700 mt-10">Why Choose Us?</h2>

        <div className="flex flex-col w-full my-10 md:flex-row gap-10">
            <ChooseUsCard image={ge} reason={"Global Exposure"} explanation={"Reach audiences worldwide on a platform committed to inspiring and empowering individuals from diverse backgrounds."}/>

            <ChooseUsCard image={pg} reason={"Professional Guidance"} explanation={"Receive support and feedback from our world-class editors, ensuring your voice is polished and impactful."}/>

            <ChooseUsCard image={ce} reason={"Community Engangement"} explanation={"Connect with a vibrant community of writers who share your passion for making a positive impact, fostering collaboration and collective growth."}/>
        </div>
    </main>
}