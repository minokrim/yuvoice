import React from "react";
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import { WithUs } from "./WithUs";
import WhyVolunteerWithUs from "./WhyUs";
import GetInvolved from "./GetInvolved";

export default function VolunteerBody(){
  
    return <main> 
        <Nav className="br"/>
        <WithUs/>
        <WhyVolunteerWithUs/>
        <GetInvolved/>
        <Footer/>
    </main>
}