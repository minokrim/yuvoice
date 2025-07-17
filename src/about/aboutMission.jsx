import group from "../assets/group.jpg"
export default function AboutMission(){
    return <main className="text-black flex flex-col items-center mt-5 md:mt-20">

        <section className="w-full flex flex-col items-center justify-center">
        <h2 className="w-[70%] font-bold text-xl md:text-3xl">Yuvoice: The Creators of Civic Engangement Media</h2>
        <p className="w-[53%] mt-0 pt-0">We inspire, educate and reward superheroes like you for creating tangible impact</p>
        </section>

        <section className="w-[80%] flex flex-col lg:flex-row content-center justify-between">
            <img src={group} alt="" className=" rounded-lg contain w-auto h-[10em] md:h-[20em] lg:h-auto lg:w-[30em]"/>

            <div className="text-center lg:text-left w-full lg:w-[50%]">
                <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-[#662D91] to to-[#3863FF] w-full lg:w-max text-2xl">Our Mission</h3>
                <p className="w-full lg:w-[80%]">Our mission is to <span className="font-semibold">revolutionize social media by launching a next-gen, nonprofit platform</span> that educates, connects, and rewards individuals—our superheroes—for launching <span className="font-semibold">micro and macro movements</span> that tangibly impact the world. By boosting <span className="font-semibold">civic engagement and fostering real-world activism</span>, Yuvoice supports democracy and social justice while rewarding users for their tangible contributions to creating a better society.</p>
            </div>

        </section>
    </main>
}