import React from "react";
import './editorialbody.css'
import Nav from "../nav/nav";
import Header from "../editorial/header";
import Thisweek from "../editorial/thisweek";
import Ubn from "../editorial/ubn";
import Stories from "../editorial/stories";
import Footer from "../footer/footer";
export default function EditorialBody(){
    return <main className="body-container">
        <Nav/>
        <Header/>
        <section className="sec-2">
        <Thisweek/>
        <Ubn/>
        </section>
        <Stories/>
        <Footer/>
    </main>
}