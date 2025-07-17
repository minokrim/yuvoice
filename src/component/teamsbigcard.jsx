export default function TeamsBigCard({name,role,desc,img}){
    return <main className="bg-[#662D91] flex w-[45em] h-full rounded-3xl">
        <img src={img} alt="" className="h-full w-1/2 rounded-3xl"/>
        <section className="text-left ml-5 w-[50%] rounded-xl">
            <h4 className="text-black flex font-medium mb-0 pb-0">{name}</h4>
            <h5 className="text-black flex font-medium mt-0 pt-0">{role}</h5>
            <p className="text-white w-[90%] font-normal text-sm">{desc}</p>
        </section>
    </main>
}