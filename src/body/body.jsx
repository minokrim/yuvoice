import React from "react";
import './body.css'
import Nav from "../nav/nav";
import Header from "../editorial/header";
// import Card from "../component/card";
import Thisweek from "../editorial/thisweek";
export default function Body(){
    return <main className="body-container">
        <Nav/>
        <Header/>
        <Thisweek/>

    </main>
}