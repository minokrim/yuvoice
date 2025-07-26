import React,{useState,useContext} from "react";
import { ResponseContext } from "../context/responseContext.jsx";
import { MediaContext } from "../context/responseContext.jsx";
import Carousel from 'react-multi-carousel';
import CarouselCard from "../component/carouselCard.jsx";
import 'react-multi-carousel/lib/styles.css';
import "./editorial.css"
export default function Editorial(){
    const [currentSlide, setCurrentSlide] = useState(0);

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
          console.log(topArticles)
          const responsive = {
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };

          const handleBeforeChange = (previousSlide, nextSlide) => {
            setCurrentSlide(nextSlide);
          };

    return <main className="flex flex-col text-left items-center py-10 bg-gradient-to-r from-[#662D91] to-[#E87528]">
        <div className="w-[90%]">
        <h2 className="text-3xl font-medium">TurtleZence <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#662D91] via-[#E87528] to-[#D30FD3]">Editorial</span></h2>
        <section className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-normal">Bringing <b>stories</b> from around <b>the world.</b></p>
            <button className="h-[20%] bg-black text-white border-none px-7 py-3 rounded-xl font-semibold">Read More</button>
        </section>
        </div>

        <section className="flex w-[90%] mt-20 items-center justify-center">
            <Carousel className="pl-7" responsive={responsive} slidesToSlide={1} arrows={false} infinite={true} autoPlay={true} autoPlaySpeed={3000} customTransition="transform 300ms ease-in-out" beforeChange={handleBeforeChange}>
              {topArticles.map((article,index)=>(
              <div key={index}>
              <CarouselCard image={article.social_image} title={article.title} category={article.type_of} link={article.canonical_url}/>
              </div>
              ))}
            </Carousel>
        </section>
    </main>
}