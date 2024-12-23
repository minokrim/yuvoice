import React, { useContext } from "react";
import { ResponseContext } from "../context/responseContext";
import { MediaContext } from "../context/responseContext";
import spinner from "../assets/spinner.svg"
import UbnCard from "../component/ubncard";
import "./ubn.css"
export default function Ubn(){
    const post=useContext(ResponseContext);
    const {media,loading}=useContext(MediaContext)

    const getTopArticlesWithMedia = (count) => {
        const slicedArticles = Array.isArray(post) ? post.slice(0, count) : [];
        const associatedMedia = slicedArticles.map((article) =>
          media.find((mediaItem) => mediaItem.id === article.featured_media)
        );
        return { articles: slicedArticles, media: associatedMedia };
      };

    if(loading){
        return (<img src={spinner} alt="" />)
    }
    
    const { articles: topArticles, media: associatedMedia } = getTopArticlesWithMedia(4);

    return <main className="ubn-holder">
        <section className="ubn-header">
            <h2>UBN - Un-Breaking News</h2>
        </section>
        <section className="ubn-detail">
            {topArticles.map((article,index)=>(
                <div key={article.id}>
                    <UbnCard 
                    image={associatedMedia[index] && associatedMedia[index].source_url}
                    title={article.title.rendered}
                    meta={article.acf.meta_description}
                    writer={article.acf.writers_name}
                    />
                </div>
            ))}
        </section>
    </main>
}