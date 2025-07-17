import img1 from "../assets/vimg1.png";
import img2 from "../assets/vimg2.png";
import img3 from "../assets/vimg3.png";
import img4 from "../assets/vimg4.png";
import img5 from "../assets/vimg5.png";
import img6 from "../assets/vimg6.png";
import VolunteerComponent from "../component/volunteerComponent";
export default function WhyVolunteer(){
    return <main className="flex flex-col lg:flex-row w-[90%]">
        <section className="w-[90%] lg:w-[70%] flex flex-col text-left items-center justify-center">
            <h2 className="self-start text-lg md:text-2xl">Why Volunteer with Us?</h2>
            <section className="w-full md:w-[90%]">
                <VolunteerComponent img={img1} title={"Global Impact:"} description={"TurtleZence is a global, remote-first organisation, which means no matter where you are, you can be part of this incredible journey."}/>
                <VolunteerComponent img={img2} title={"Future of Democracy:"} description={"We're building a platform that connects millions to the causes that matter, rewarding real-world impact with online recognition."} />
                <VolunteerComponent img={img3} title={"Flexible & Fun:"} description={"Whether you’ve got a few hours a week or more time to give, there’s a role for you! We're all about making volunteering fit your schedule, not the other way around."}/>
                <VolunteerComponent img={img4} title={"Learn, Grow & Connect:"} description={"Gain real-world skills, expand your network, and collaborate with passionate people from every corner of the globe."}/>
                <VolunteerComponent img={img5} title={"Be part of change:"} description={"You’ll be joining a mission to uplift marginalised communities, foster real friendships, and create change where it’s needed most."}/>
            </section>
        </section>

        <section className="w-full lg:w-[50%] flex justify-center items-center">
            <img src={img6} alt="" className="w-auto h-[20em] md:h-[30em] flex self-center"/>
        </section>
    </main>
}