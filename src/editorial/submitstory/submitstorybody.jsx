import React from "react";
import Nav from "../../nav/nav";
import SubmitHeader from "./submitheader";
import StoriesCategories from "./storycategory";
import SubmitUbn from "./submiubn";
import ChooseUs from "./chooseUs";
import Guidelines from "./guidelines";
import Footer from "../../footer/footer"
export default function SubmitStoryBody(){
    return <main className="flex flex-col bg-gradient-to-b from-purple-600/20 to-white">
        <Nav/>
        <SubmitHeader/> 
        <StoriesCategories/>
        <SubmitUbn/>
        <ChooseUs/>
        <Guidelines/>
        <Footer/>
    </main>
}