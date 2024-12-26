import React,{useState,useEffect} from "react";
import "./thisweek.css"
import axios from "axios";
import Card from "../component/card";
export default function Thisweek(){
    const [post,setPost]=useState([]);
    const [media, setMedia] = useState([]);
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get("https://yuvoice.com/wp-json/wp/v2/article?per_page=4")
        .then((res)=>{
            console.log(res)    
            setPost(res.data)
            const mediaIds = res.data.map(post => post.featured_media).filter(Boolean);
            console.log("Media IDs:", mediaIds);

            const mediaRequests = mediaIds.map(id => 
                axios.get(`https://yuvoice.com/wp-json/wp/v2/media/${id}`)
            );
            return Promise.all(mediaRequests);
        })
        .then((mediaResponses)=>{
            const images = mediaResponses.map(response => response.data);
            setMedia(images)
            console.log(images)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])
    return <main className="tw-body">
        <section className="tw-heading">
            <h2>This Week Stories</h2>
            <div className="tw-vr"></div>
        </section>
        <section className="tw-content-holder">
            <div className="tw-content-holder">
            {post.map((posts)=>{
            const associatedMedia = media.find((medias) => medias.id === posts.featured_media);
            return(
                <div key={posts.id} className="tw-content">
                    <Card category={posts.acf.category[0]} image={associatedMedia && associatedMedia.source_url} title={posts.title.rendered} meta={posts.acf.meta_description} writer={posts.acf.writers_name}/>
                </div>
            )
            })}
            </div>
        </section>
    </main>
}