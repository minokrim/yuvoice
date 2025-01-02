import React from "react";
import Nav from "../../nav/nav";
import SubmitHeader from "./submitheader";
import StoriesCategories from "./storycategory";
import SubmitUbn from "./submiubn";
import ChooseUs from "./chooseUs";
import Guidelines from "./guidelines";
import Form from "./form";
import Footer from "../../footer/footer"
export default function SubmitStoryBody(){
    return <main className="flex flex-col">
        <section className="flex flex-col bg-gradient-to-b from-purple-600/30 to-white">
        <Nav/>
        <SubmitHeader/> 
        </section>
        <StoriesCategories/>
        <SubmitUbn/>
        <ChooseUs/>
        <Guidelines/>
        <Form/>
        <Footer/>
    </main>
}