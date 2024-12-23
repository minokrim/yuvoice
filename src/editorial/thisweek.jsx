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

    return <main className="tw-body">
        <section className="tw-heading">
            <h2>This Week Stories</h2>
            <div className="tw-vr"></div>
        </section>
        <section className="tw-content-holder">
            <div className="tw-content-holder">
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
            </div>
        </section>
    </main>
}