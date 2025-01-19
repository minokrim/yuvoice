import React from "react";
import Footer from "../footer/footer"
import Subscribe from "./subscribe.jsx";
import Divider from "./divider.jsx";
import WeAre from "./weAre.jsx";
import Editorial from "./editorial.jsx";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import LandingPage2 from "../component/landingpage2.jsx";
import LandingPage1 from "../component/landingpage1.jsx";
import Nav from "../nav/nav.jsx";
export default function LandingBody(){
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return <main> 
        <Nav className="br"/>
        <Carousel responsive={responsive} arrows={false} autoPlay={true} autoPlaySpeed={3000} infinite={true} className="relative mt-[-7.5em]">
            <LandingPage1/>
            <LandingPage2/>
        </Carousel>

        <Editorial/>
        <WeAre/>
        <Divider/>
        <Subscribe/>
        <Footer/>
    </main>
}