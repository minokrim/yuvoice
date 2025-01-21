import React from "react";
import Nav from "../nav/nav";
import Editorial from "../landingpage/editorial";
import WeAre from "../landingpage/weAre";
import Divider from "../landingpage/divider";
import Subscribe from "../landingpage/subscribe";
import Footer from "../footer/footer";
import { WithUs } from "./WithUs";

export default function VolunteerBody(){
  
    return <main> 
        <Nav className="br"/>
        <WithUs/>
        <Footer/>
    </main>
}