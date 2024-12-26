import React from "react";
import './body.css'
import Nav from "../nav/nav";
import Header from "../editorial/header";
<<<<<<< HEAD
// import Card from "../component/card";
import Thisweek from "../editorial/thisweek";
=======
import Thisweek from "../editorial/thisweek";
import Ubn from "../editorial/ubn";
import Stories from "../editorial/stories";
import Footer from "../footer/footer";
>>>>>>> 57c2e2ea95cd2a50e42023fbbb93d43d8ba89c2a
export default function Body(){
    return <main className="body-container">
        <Nav/>
        <Header/>
<<<<<<< HEAD
        <Thisweek/>

=======
        <section className="sec-2">
        <Thisweek/>
        <Ubn/>
        </section>
        <Stories/>
        <Footer/>
>>>>>>> 57c2e2ea95cd2a50e42023fbbb93d43d8ba89c2a
    </main>
}