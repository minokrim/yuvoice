export default function MovementCard({about,leftTop}){
    return <main className="w-full md:w-[40%] h-[12em] bg-white flex flex-col shadow-purple-200 shadow-2xl bg-transparent rounded-xl">
        <img src={leftTop} alt="country flag" className="relative mt-[-2%] left-6 z-5 w-[10%] h-auto"/>
        <div className="w-[full] h-full bg-none rounded-xl flex items-center justify-center">
            <p className="text-sm lg:text-base font-normal text-left relative z-1 w-[80%]">{about}</p>
        </div>
    </main>
}