export default function AboutVid(){
    return <main className="box-border mt-[-7.3em] md:mt-[-10em]">
                <video className="relative w-[100%] h-[100%] " autoPlay loop muted playsInline disablePictureInPicture controls={false} >
                    <source src="https://firebasestorage.googleapis.com/v0/b/zendest-52099.firebasestorage.app/o/Videos%2Ffreecompress-8088943-uhd_4096_2160_25fps.mp4?alt=media&token=057a77ba-c32f-401d-8e66-2761aa69cc5d" type="video/mp4"/>        
                    </video>
    </main>
}