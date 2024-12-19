import React from "react";
import "./nav.css"
import dropdown from "../assets/dropdown.png";
import logo from "../assets/logo.png";
export default function Nav(){
    return <main className="nav-Body">

        <section className="nav-left">
            <img src={logo} alt="logo" />
        </section>

        <section className="nav-right">
            <p>Home</p>

            <div className="nav-option">
            <p>Editorial</p>
            <img src={dropdown} alt="dropDown" />
            </div>

            <div className="nav-option">
            <p>Get Involved</p>
            <img src={dropdown} alt="dropDown" />
            </div>

            <p>About</p>

        </section>
    </main>
}