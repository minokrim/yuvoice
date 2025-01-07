import React from "react";
import person from "../assets/person.png"
import readmore from "../assets/readmore.png"
import './card.css'
export default function Card({category,image,title,meta,writer}){
    return <main className="card-body shadow-md">
        <section className="card-img-sec">
            <img src={image} alt="" />
            <p>{category}</p>
        </section>
        <section className="card-detai-sec">
            <h3>{title}</h3>
            <p>{meta}</p>
            <div className="card-footer">
                <section className="card-footer-writer">
                <img src={person} alt="writer icon" />
                <p>{writer}</p>
                </section>
                <section className="read-more">
                    <p>Read more</p>
                    <img src={readmore} alt="button to read more" />
                </section>
            </div>
        </section>
    </main>
}