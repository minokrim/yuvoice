import React,{useState} from "react";
import "./nav.css"
import dropdown from "../assets/dropdown.png";
import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";
import hamburger from "../assets/hamburger.png"
export default function Nav(){
    const[mobileNav,setMobileNav]=useState(false)
    function handleClick(){
        setMobileNav(!mobileNav)
    }

    return <main className="nav-Body">

        <section className="nav-left">
            <img src={logo} alt="logo" />
            <img src={hamburger} alt="hamburger icon" id="hamburger" onClick={handleClick}/>

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

        {mobileNav && (
        <section className="mobileNavOptions" id="mobileNav" onClick={handleClick}>
            <p>Home</p>
            <p>Editorial</p>
            <p>Get Involved</p>
            <p>About</p>
            {/* <Link to="/" className="Link">Home</Link>
            <Link to="/" className="Link">Editorial</Link>
            <Link to="/" className="Link">Get Involved</Link>
            <Link to="/" className="Link">About</Link> */}
        </section>
        )}
    </main>
}