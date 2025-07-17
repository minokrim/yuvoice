import Nav from "../nav/nav"
import AboutVid from "./aboutVid"
import AboutMission from "./aboutMission"
import Team from "./team"
import Footer from "../footer/footer"
import Movement from "./aboutMovement"
export default function AboutBody(){
    return <main className="flex flex-col justify-center items-center">
        <Nav/>
        <AboutVid/>
        <AboutMission/>
        <Movement/>
        <Team/>
        <Footer/>
    </main>
}