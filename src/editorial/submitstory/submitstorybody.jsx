import React from "react";
import Nav from "../../nav/nav";
import SubmitHeader from "./submitheader";
import StoriesCategories from "./storycategory";
import SubmitUbn from "./submiubn";
export default function SubmitStoryBody(){
    return <main className="flex flex-col bg-gradient-to-b from-purple-600/20 to-white">
        <Nav/>
        <SubmitHeader/> 
        <StoriesCategories/>
        <SubmitUbn/>
    </main>
}