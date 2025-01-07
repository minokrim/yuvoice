import React,{useContext} from "react";
import "./thisweek.css"
import { ResponseContext } from "../context/responseContext";
import { MediaContext } from "../context/responseContext";
import Card from "../component/card";
import spinner from "../assets/spinner.svg"


export default function Thisweek(){
    const post=useContext(ResponseContext);
    const {media,loading}=useContext(MediaContext)

    const getTopArticlesWithMedia = (count) => {
        const slicedArticles = Array.isArray(post) ? post.slice(0, count) : [];
        const associatedMedia = slicedArticles.map((article) =>
          media.find((mediaItem) => mediaItem.id === article.featured_media)
        );
        return { articles: slicedArticles, media: associatedMedia };
      };

    
    const { articles: topArticles, media: associatedMedia } = getTopArticlesWithMedia(4);

    return <main className="tw-body">
        <section className="tw-heading">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-blue-600">This Week Stories</h2>
            <div className="tw-vr"></div>
        </section>
        <section className="tw-content-holder">
            <div className="tw-content-holder">
            {topArticles.map((posts)=>{
            const associatedMedia = media.find((medias) => medias.id === posts.featured_media);
            return(
                <div key={posts.id} className="tw-content">
                    <Card category={loading?"LOADING":posts.acf.category[0]} image={loading?spinner:associatedMedia && associatedMedia.source_url} title={loading?"LOADING":posts.title.rendered} meta={loading?"LOADING":posts.acf.meta_description} writer={loading?"LOADING":posts.acf.writers_name}/>
                </div>
            )
            })}
            </div>
        </section>
    </main>
}