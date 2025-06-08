import react from "react";
import vlimg from "../assets/volunteerimg.jpg"
export default function VolunteerHeader(){
    return <main className="w-[80%] md:w-[90%] flex flex-col md:flex-row bg-white rounded-3xl m-3 p-5 items-center justify-center self-center">
        <section className="w-[90%] md:w-[38%] flex flex-col text-left">
            <h2 className="font-semibold text-2xl md:text-4xl">Volunteer with Us</h2>
            <p className="text-xl md:text-2xl font-normal">At Yuvoice, we're not just a platform—we're a movement. Whether you're passionate about social justice, tech innovation, or uplifting marginalized voices, we need YOU to help build the world's largest pro-democracy platform.</p>
        <button className="bg-purple-800 text-white py-5 px-3 rounded-2xl w-[40%]">Volunteer</button>

        </section>
        <section className="w-[50%] flex justify-center md:justify-end pt-5">
            <img src={vlimg} alt="" className="w-auto h-[10em] md:h-[20em]"/>
        </section>


    </main>
}