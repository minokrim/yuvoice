export default function AboutVid(){
    return <main className="box-border mt-[-7.3em] md:mt-[-10em]">
                <video className="relative w-[100%] h-[100%] " autoPlay loop muted >
            <source src={`${process.env.PUBLIC_URL}/videos/avoutvid.mp4`} type="video/mp4" className=""/>
        </video>
    </main>
}