import React,{useContext,useState} from "react";
import { MediaContext } from "../context/responseContext";
import { ResponseContext } from "../context/responseContext";
import spinner from "../assets/spinner.svg"
import search from "../assets/search.png"
import rarrow from "../assets/right-arrow.png"
import larrow from "../assets/left-arrow.png"
import Card from "../component/card";
import "./stories.css"
import NavStories from "./storiesnav";
export default function Stories(){
    const post=useContext(ResponseContext)
    const {media,loading}=useContext(MediaContext)
    const [currentPage, setCurrentPage] = useState(1);
    const articlesPerPage = 12
        // const getTopArticlesWithMedia = (count) => {
        //     const slicedArticles = Array.isArray(post) ? post.slice(0, count) : [];
        //     const associatedMedia = slicedArticles.map((article) =>
        //       media.find((mediaItem) => mediaItem.id === article.featured_media)
        //     );
        //     return { articles: slicedArticles, media: associatedMedia };
        //   };
    
        if(loading){
            return (<img src={spinner} alt="" />)
        }
        
        // const { articles: topArticles, media: associatedMedia } = getTopArticlesWithMedia();

        const totalPages = Math.ceil(post.length / articlesPerPage);
        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = currentPage * articlesPerPage;
      
        const currentArticles = post.slice(startIndex, endIndex);
        const currentMedia = currentArticles.map((article) =>
            media.find((mediaItem) => mediaItem.id === article.featured_media)
          );
        const handlePrevious = () => {
            if (currentPage > 1) {
              setCurrentPage((prev) => prev - 1);
            }
          };

        const handleNext = () => {
            if (currentPage < totalPages) {
              setCurrentPage((prev) => prev + 1);
            }
          };

        const handlePageClick = (pageNumber) => {
            setCurrentPage(pageNumber);
          };
    
    return <main className="stories_holder">
        
        <section>
            <NavStories/>
        </section>

        <section className="search_container">
        <input type="search" name="search" className="search" placeholder="Search"/>
        <img src={search} alt="search icon" />
        </section>

        <section className="stories_articles">
            {currentArticles.map((article,index)=>(
                <div key={article.id} className="stories_card">
            <Card
              category={article.acf.category[0]}
              image={currentMedia[index]?.source_url}
              title={article.title.rendered}
              meta={article.acf.meta_description}
              writer={article.acf.writers_name}
            />
                </div>
            ))}
        </section>

        <section className="pagination_controls">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          <img src={larrow} alt="" className="arrow"/>
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          <img src={rarrow} alt="" className="arrow"/>
        </button>
      </section>
    </main>
}