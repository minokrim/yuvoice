import linkedin from "../assets/link.png"
export default function TeamSMallCard({img,name,position}){
    return <main className=" text-white rounded-2xl border-solid border-0.5 border-purple-800 w-max h-48">
        <img src={img} alt="" className="relative z-[-10] object-contain w-full h-full flex "/>
        <div className="relative top-[-5em] text-left ml-6">
            <h4 className="text-sm font-normal mb-0 pb-0">{name}</h4>
            <h5 className="text-xs font-light mt-0 pt-0 mb-0 pb-0">{position}</h5>
            <img src={linkedin} alt="" className="w-auto contain h-[1em]"/>
        </div>
    </main>
}