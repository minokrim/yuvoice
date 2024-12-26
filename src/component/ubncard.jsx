import React from "react";
import "./ubncard.css"
import person from "../assets/person.png"
export default function UbnCard({image,title,meta,writer}){
    return <main className="ubnCard-body">
        <section className="ubnCard-holder">
        <img src={image} alt="" />
        <section className="ubnCard-detail">
            <h3>{title}title</h3>
            <p>{meta}meta...</p>
            <div className="ubnCard-writer">
                <img src={person} alt="" />
                <p>{writer}</p>
            </div>
        </section>
        </section>
    </main>
}