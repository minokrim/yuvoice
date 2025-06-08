export default function VolunteerComponent({img,title,description}){
    return <main>
        <div className="w-full md:w-[82%] flex items-center justify-center gap-5 ">
            <img src={img} alt="" className="w-auto h-[3em]"/>
            <p className="text-left text-lg"><span className="font-semibold">{title}</span>{description}</p>
        </div>
    </main>
}