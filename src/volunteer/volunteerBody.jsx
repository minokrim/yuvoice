import React from "react";
import Nav from "../nav/nav";
import Footer from "../footer/footer";
import VolunteerHeader from "./volunteerHeader";
import WhyVolunteer from "./whyVolunteer";
import VolunteerDivider from "./volunteerDivider";
import Roles from "./roles";
export default function VolunteerBody(){
    return <main className="w-full flex flex-col bg-gradient-to-b from-purple-300/60 to-white items-center justify-center">
        <Nav/>
        <VolunteerHeader/>
        <WhyVolunteer/>
        <VolunteerDivider/>
        <Roles/>
        <Footer/>
    </main>
}