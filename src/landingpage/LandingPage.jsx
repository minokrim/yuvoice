import React, { useState,useContext } from "react";
import "./LandingPage.css";
import background1 from "../assets/bg1.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import background2 from "../assets/bg2.jpg";
import Nav from "../nav/nav.jsx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "../footer/footer";
import { ResponseContext } from "../context/responseContext.jsx";
import { MediaContext } from "../context/responseContext.jsx";
import p1 from "../assets/p1.jpg"
import p2 from "../assets/p2.jpg"
import p3 from "../assets/p3.jpg"
import p4 from "../assets/p4.jpg"
import CarouselCard from "../component/carouselCard.jsx";
import Carousel2 from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };


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

      // const handleCarouselChange = (nextSlideIndex) => {
      //   if (nextSlideIndex===5) {
      //     setCurrentSlide2(0);
      //   }
      //   else if(nextSlideIndex===6){
      //     setCurrentSlide2(1)
      //   }
      //   else if(nextSlideIndex===7){
      //     setCurrentSlide2(2)
      //   }
      //   else if(nextSlideIndex===8){
      //     setCurrentSlide2(3)
      //   }
      //   else if(nextSlideIndex===9){
      //     setCurrentSlide2(4)
      //   }
      //   // setCurrentSlide2(nextSlideIndex)
      // };

      const handleCarouselChange = (nextSlideIndex) => {
        const totalSlides = 5; // Total number of slides
        const adjustedIndex = nextSlideIndex % totalSlides;
      
        if (adjustedIndex >= 5) {
          setCurrentSlide2(adjustedIndex - 5);
        } else {
          setCurrentSlide2(adjustedIndex);
        }
      };

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 0 
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 0
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 0
  }
}


  return (
    <div className="landing-page">
      {/* Header Section */}
      <Nav />
      <header className="header">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={20000}
          onChange={handleSlideChange}
          showStatus={false}
          showArrows={false}
          className="header-carousel"
        >
          <div>
            <img src={background1} alt="Background1" />
          </div>
          <div>
            <img src={background2} alt="Background2" />
          </div>
        </Carousel>
        {currentSlide === 0 && (
          <div className="header-content">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-blue-600" >Our Vision</h2>
            <p>
              To create a <b>global online town square for superheroes </b>
              <br />
              - a space where <b>success is measured by the good you <br />
              do,</b> not by fame, wealth, or power.
            </p>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-blue-600">Our Belief</h2>
            <p>
              In our world, <b>People are valued for their purpose and<br />
              positive contributions, and communities are built <br />
              around shared causes,</b> not superficial connections.
            </p>
            <button className="about-us-btn text-[#3863FF]">About Us</button>
          </div>
        )}
        {currentSlide === 1 && (
          <div className="header-content">
            <button className="fiction-btn py-2 px-5 rounded-3xl border-none bg-[#9DE828]">Fiction</button>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-blue-600">Reclamation</h2>
            <p className="w-2/5">Emile scowled theatrically at the mirror. His imagination ran wild with unearned pride. That's how I'll look, he thought. That's how I'll look when I march up to receive that shiny, new badge. He could see it in his mind so clearly.</p>
            <button className="learn-more-btn">Read More</button>

            <section className="flex gap-5 font-light text-lg">
              <div className="flex items-center gap-5">
                <IoPersonOutline/>
                <p>Wopicho Tony</p>
              </div>
              <div className="flex items-center">
                <IoLocationOutline/>
                <p>USA</p>
              </div>
            </section>
          </div>
        )}
      </header>

     {/* Editorial Section */}
     <section className="editorial w-full">
        <div className="editorial-content w-[100%] flex justify-center items-center">
          <div className="editorial-text px-10 w-[90%]">
            <h2 className="flex font-medium justify-start border-2">
              Yuvoice <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#662D91] via-[#E87528] to-[#D30FD3]">Editorial</span>
            </h2>
            <section className="flex justify-between border-2 gap-20">
            <p>Bringing you stories around the world</p>
            <button className="bg-orange-500 text-white text-lg font-medium px-5 py-3 h-1/2 rounded-xl border-none">Read More</button>
            </section>
          </div>

          <div className="w-[90%] flex items-center justify-center">
            <Carousel2 
            responsive={responsive} infinite={true} minimumTouchDrag={10} autoPlay={true} autoPlaySpeed={3000} arrows={false} focusOnSelect={true} beforeChange={handleCarouselChange} centerMode={false} itemClass="car" className="w-[90%] flex h-[30em]">

              {topArticles.map((article,index)=>(
              <div key={index} className={`w-full h-max flex transform transition-transform duration-500 ${currentSlide2===index ? 'scale-110 z-10' : 'scale-54 opacity-100'}`}>
                {console.log(currentSlide2)}

              <CarouselCard image={associatedMedia[index] && associatedMedia[index].source_url} title={article.title.rendered} category={article.acf.category[0]}/>
              </div>
              ))}

            </Carousel2>


          </div>
        </div>
      </section>
      <section className="platform flex ">
        <div className="bg-gradient-to-r from-purple-600/20 via-orange-600/20 to-pink-600/20 w-1/2 rounded-ee-[5em] p-5 pr-40 text-left">
        <h2>Yuvoice <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#662D91] via-[#E87528] to-[#D30FD3]">Platform</span></h2>
        <p className="w-[60%] text-sm">Yuvoice is creating an AI-Backed platform that will disrupt the modern internet.</p>


            <h3 className="font-bold text-xl">We are actually <span className="highlight-social text-transparent bg-clip-text  bg-gradient-to-r from-[#662D91] via-[#E87528] to-[#23C6D8]">"social"</span></h3>
            <ul className="font-medium tetx-sm">
              <li>We connect real people to real causes</li>
              <li>We focus on genuine friendships in action-oriented communities</li>
              <li>Our game-changing algorithm rewards users for impact</li>
            </ul>
        </div>
          <img src={p1} alt="Social" className="w-auto h-[15em] relative right-40 top-5"/>
          </section>

          <div className="flex justify-between items-center">
          <div className="flex items-center gap-5 w-1/5 relative left-60">
              <img src={p2} alt="Media 1" className="w-[12em] h-[12em] rounded-t-2xl"/>
              <section className="flex flex-col gap-5">
              <img src={p3} alt="Media 2" className="w-[12em] h-[12em]"/>
              <img src={p4} alt="Media 3" className="w-[12em] h-[12em]"/>
              </section>
            </div>

            <div className="flex flex-col bg-gradient-to-r from-purple-600/20 via-orange-600/20 to-pink-600/20 rounded-es-[5em] h-[15em] w-[100%] items-end justify-center text-left ">
            <section className=" flex flex-col justify-center items-left w-[50%] relative right-20">
            <h3 className="text-left font-bold text-xl">We are actually <span className="text-transparent bg-clip-text  bg-gradient-to-r from-[#662D91] via-[#E87528] to-[#23C6D8]">"media"</span></h3>
            <ul className="flex flex-col justify-center items-left gap-1 p-0 font-medium tetx-sm">
              <li className="w-[100%]">Our feed prioritizes high quality global stories and posts from real friends, not “brain rot” drivel or echo chambers</li>
              <li className="w-[100%]">We are an activism incubator, not an outrage incubator</li>
            </ul>
            </section>
            </div>
          </div>
    

      <section className="subscribe mt-20 bg-gradient-to-r from-[#E87528] to-[#662D91] flex items-center justify-center">
        <h2>Yuvoice Platform: Social Media for Social Good – Coming Soon in 2025</h2>
      </section>

      <form className="mt-10">
        <h3 className="text-4xl font-light text-purple-800">SUBSCRIBE NOW!</h3>
        <section className="sub flex gap-5 justify-center mt-5">
        <input type="email" placeholder="Email Address" className="w-[30%] h-[2em]"/>
        <button type="submit" className="bg-purple-800 text-white text-lg font-medium border-none">Subscribe</button>
        </section>
        </form>



      <Footer/>
    </div>

   



  );
};

export default LandingPage;
