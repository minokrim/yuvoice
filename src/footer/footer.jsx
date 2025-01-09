import React from "react";
import "./footer.css";
import logo from "../assets/logo.png";
import ig from "../assets/ig.png";
import fb from "../assets/fb.png";
import tweet from "../assets/tweet.png";
import linkedin from "../assets/linkedin.png";

export default function Footer(){
    return <main className="footer-container">
        <div className="footer-body items-center">
            <section className="footer-sec1">
                <img src={logo} alt="" />
                <p>Bringing you stories around the world</p>
                <div className="social-sec">
                    <p>Social Links</p>
                    <section className="social-images">
                        <a href="https://www.instagram.com/yuvoiceorg/" target="_blank" rel="noreferrer">
                        <img src={ig} alt="" className="w-5"/>
                        </a>
                        <a href="https://www.linkedin.com/company/yuvoiceorg" target="_blank" rel="noreferrerx">
                        <img src={linkedin} alt="" className="w-5"/>
                        </a>
                        <a href="https://www.facebook.com/yuvoiceorg/" target="_blank" rel="noreferrer">
                        <img src={fb} alt="" className="w-5"/>
                        </a>
                        <a href="">
                        <img src={tweet} alt="" className="w-5"/>

                        </a>
                    </section>
                </div>
            </section>

            <section className="footer-sec2 gap-5">
                <p>Quick Links</p>
                <div className="ql-options">
                    <div className="ql-option1">
                    <h3>Volunteer</h3>
                    <h3>Submit a Story</h3>
                    </div>
                    <div className="ql-option2">
                    <h3>Our Statement</h3>
                    <h3>Donate</h3>
                    </div>
                </div>
            </section>


            <section className="footer-sec3">
                <h2>We would love to hear from you!</h2>
                <p>You can reach out to us at:</p>
                <p>info@yuvoice.org</p>
            </section>
        </div>

        <section className="footer-sec4 mt-10">
            <h4>&copy; 2024 Yuvoice</h4>
            <h4>Privacy Policy</h4>
            <h4>Terms & Conditions</h4>
        </section>
    </main>
}