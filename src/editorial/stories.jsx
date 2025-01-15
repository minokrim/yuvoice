import React,{useContext,useState} from "react";
import { MediaContext } from "../context/responseContext";
import { ResponseContext } from "../context/responseContext";
import spinner from "../assets/spinner.svg"
import rarrow from "../assets/right-arrow.png"
import larrow from "../assets/left-arrow.png"
import Card from "../component/card";
import "./stories.css"
import NavStories from "./storiesnav";
import { IoSearchSharp } from "react-icons/io5";


export default function Stories(){
    const post=useContext(ResponseContext)
    const {media,loading}=useContext(MediaContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState("");
    const articlesPerPage = 12
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedId, setSelectedId] = useState("");

        const filteredArticles = post.filter((article) => {
          const matchesCategory = selectedCategory
            ? article.acf.category.includes(selectedCategory)
            : true;
          const matchesSearch =
            article.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) || article.acf.writers_name.toLowerCase().includes(searchTerm.toLowerCase()) ;
      
          return matchesCategory && matchesSearch;
        });

        const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
        const startIndex = (currentPage - 1) * articlesPerPage;
        const endIndex = currentPage * articlesPerPage;
      
        const currentArticles = filteredArticles.slice(startIndex, endIndex);
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

        const handleCategorySelect = (category) => {
            setSelectedCategory(category);
            setCurrentPage(1);
        };


    
    return <main className="stories_holder">
        
        <section>
            <NavStories onCategorySelect={handleCategorySelect} />
        </section>

        <section className="search_container">
        <input type="search" name="search" className="search" placeholder="Search" onChange={((e)=>{setSearchTerm(e.target.value)})}/>
        {/* <img src={search} alt="search icon" /> */}
        <IoSearchSharp className="search_icon" color="white"/>
        </section>

        <section className="stories_articles">
            {currentArticles.map((article,index)=>(
                <div key={article.id} className="stories_card">
            <Card
              category={loading?"LOADING":article.acf.category[0]}
              image={loading?spinner:currentMedia[index]?.source_url}
              title={loading?"LOADING":article.title.rendered}
              meta={loading?"LOADING":article.acf.meta_description}
              writer={loading?"LOADING":article.acf.writers_name}
              storyId={article.id}
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