<<<<<<< HEAD
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
=======
import React,{useContext} from "react";
import "./thisweek.css"
import Card from "../component/card";
import { ResponseContext } from "../context/responseContext";
import { MediaContext } from "../context/responseContext";
import spinner from "../assets/spinner.svg"
export default function Thisweek(){
    const post=useContext(ResponseContext)
    const {media,loading} = useContext(MediaContext);

    console.log("Post from ResponseContext:", post);
    console.log("Media from MediaContext:", media);
    console.log("Loading status:", loading);
    
    const getTopArticlesWithMedia = (count) => {
        const slicedArticles = Array.isArray(post) ? post.slice(0, count) : [];
        const associatedMedia = slicedArticles.map((article) =>
          media.find((mediaItem) => mediaItem.id === article.featured_media)
        );
        return { articles: slicedArticles, media: associatedMedia };
      };


    if (loading) {
        return <img src={spinner} alt="" />;
      }

      const { articles: topArticles, media: associatedMedia } = getTopArticlesWithMedia(4);

>>>>>>> 57c2e2ea95cd2a50e42023fbbb93d43d8ba89c2a
    return <main className="tw-body">
        <section className="tw-heading">
            <h2>This Week Stories</h2>
            <div className="tw-vr"></div>
        </section>
        <section className="tw-content-holder">
            <div className="tw-content-holder">
<<<<<<< HEAD
            {post.map((posts)=>{
            const associatedMedia = media.find((medias) => medias.id === posts.featured_media);
            return(
                <div key={posts.id} className="tw-content">
                    <Card category={posts.acf.category[0]} image={associatedMedia && associatedMedia.source_url} title={posts.title.rendered} meta={posts.acf.meta_description} writer={posts.acf.writers_name}/>
                </div>
            )
            })}
=======
            {topArticles.map((article, index) => (
          <div key={article.id} className="tw-content">
            <Card
              category={article.acf.category[0]}
              image={associatedMedia[index] && associatedMedia[index].source_url}
              title={article.title.rendered}
              meta={article.acf.meta_description}
              writer={article.acf.writers_name}
            />
          </div>
        ))}
>>>>>>> 57c2e2ea95cd2a50e42023fbbb93d43d8ba89c2a
            </div>
        </section>
    </main>
}