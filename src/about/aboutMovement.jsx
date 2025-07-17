import MovementCard from "../component/movementCard"
import f1 from "../assets/f1.png"
import f2 from "../assets/f2.png"
import f3 from "../assets/f3.png"
import f4 from "../assets/f4.png"
import f5 from "../assets/f5.png"

export default function Movement(){
    return <main className="w-[90%] md:w-full flex flex-col items-center justify-center md:mt-32">
        <h2 className="font-bold text-3xl">Our <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#662D91] via-[#E87528] to-[#D30FD3]">Movement</span></h2>
        <section className="flex flex-col md:flex-row w-full md:w-[90%] justify-center gap-20 items-center">
            <MovementCard about={"Hamza from Pakistan and Gustavo from Brazil developed software using camera glasses to help visually impaired people identify objects. After a year of work, they launched a website."} leftTop={f2}/>
            <MovementCard about={"Oladayo tackled student challenges in Lagos by offering training and partnering with American universities for cross-border education and immigration resources."} leftTop={f4}/>
        </section>

        <section className="flex flex-col md:flex-row w-full md:w-[80%] justify-center gap-10 py-5 mt-5">
            <MovementCard about={"In the U.S., lack of adoption prerequisites led to pet abuse and neglect. Activists created a training program for adopters and partnered with shelters to address this."} leftTop={f3}/>
            <MovementCard about={"Sara, in Colombia, led a team to create a Spanish-language game to improve mental health in poverty-stricken areas during the pandemic."} leftTop={f1}/>
        </section>

        <section className="flex w-full md:w-[80%] justify-center mt-5">
            <MovementCard about={"Hamza from Pakistan and Gustavo from Brazil developed software using camera glasses to help visually impaired people identify objects. After a year of work, they launched a website."} leftTop={f5}/>
        </section>

        
    </main>
}