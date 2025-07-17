import TeamSMallCard from "../component/teamsmallcard";
import { Teams } from "../component/team";
import TeamsBigCard from "../component/teamsbigcard";
import { useState } from "react";
export default function Team(){
    const [hoverState,setHoverState]=useState(false)
    const [hoveredMember,setHoveredMember]=useState(null)
    const [hoveredPosition,setHoveredPosition]=useState({x:0,y:0})

    function handleMouseHover(e,member){
        const rect=e.currentTarget.getBoundingClientRect()
        setHoveredMember(member)
        setHoveredPosition({
            x:rect.x+ window.scrollX,
            y:rect.y+ window.scrollY,
            bottom:rect.bottom,
            top:rect.top+ window.scrollY,
            right:rect.right,
            left:rect.left+ window.scrollX
        })
        setHoverState(true)
    }

    function handleMouseOut(){
        setHoverState(false)
    }

        function handleMouseOver2(){
        setHoverState(true)
    }

    return <main className="w-[80%] mt-40">
        <h2 className="font-bold text-3xl">Our <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#662D91] via-[#E87528] to-[#D30FD3]">Team</span></h2>

        <section className="flex flex-wrap w-full gap-16 justify-center">
        {Teams.map((member)=>(
            <div key={member.id} className="relative w-max" onMouseEnter={(e)=>{handleMouseHover(e,member)}} onMouseLeave={handleMouseOut}>
        <TeamSMallCard name={(member.fisrtname)+(member.lastname)} position={member.title} img={member.Imageurl}/>
            </div>
        ))}
        {hoverState && <div className="absolute z-50" onMouseOut={handleMouseOut} onMouseOver={handleMouseOver2}>
            <TeamsBigCard name={hoveredMember.fisrtname} role={hoveredMember.position} desc={hoveredMember.about} img={hoveredMember.Imageurl}/>
            </div>}
        </section>

    </main>
}