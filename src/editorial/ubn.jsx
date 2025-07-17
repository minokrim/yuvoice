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

    
    const { articles: topArticles, media: associatedMedia } = getTopArticlesWithMedia(5);

    return <main className="ubn-holder">
        <section className="ubn-header">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-blue-600">UBN - Un-Breaking News</h2>
        </section>
        <section className="ubn-detail">
            {topArticles.map((article,index)=>(
                <div key={article.id} className="ubn-card">
                    <UbnCard 
                    image={article.social_image}
                    title={article.title}
                    meta={article.description}
                    writer={article.user.name}
                    />
                </div>
            ))}
        </section>
    </main>
}