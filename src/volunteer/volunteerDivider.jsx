export default function VolunteerDivider(){
    return <main className="w-full bg-gradient-to-b from-purple-400/50 to-orange-300/50 flex justify-around flex-col md:flex-row py-8">
        <section className="w-full md:w-[40%] text-center md:text-left">
            <h2>How to get Involved?</h2>
            <p>Excited? We are too! Joining Yuvoice is simple</p>
        </section>

        <section className="text-full md:w-[40%]">
            <ul className="text-purple-900 w-[80%] text-left flex flex-col gap-5">
                <li>Check our Open Roles: <span className="text-black font-light">From content creation to tech innovation, there’s something for everyone.</span></li>
                <li>Apply from Anywhere: <span className="text-black font-light">We’re fully remote, you can volunteer from the comfort of your own space.</span></li>
                <li>Start Making a Difference: <span className="text-black font-light">Join a community of changemakers and start creating impact today.</span> </li>
            </ul>
        </section>
    </main>
}