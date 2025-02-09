import React, { useState,useEffect } from "react";
import person from "../assets/person.png"
import readmore from "../assets/readmore.png"
import './card.css'
import { Link } from "react-router-dom";
export default function Card({category,image,title,meta,writer,storyId}){
    const[id,setId]=useState(null)
    const handleClick=()=>{
        setId(storyId)
        console.log("Story ID in Card:", storyId); 
    }

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
                <p className="writer overflow-hidden h-6">{writer}</p>
                </section>
                <section className="read-more">
                {/* <p onClick={handleClick} className="cursor-pointer">Read more</p> */}
                    <Link to={`/story/${storyId}`}>
                    <p onClick={handleClick} className="cursor-pointer">Read more</p>
                    </Link>
                    <img src={readmore} alt="button to read more" />
                </section>
            </div>
        </section>
    </main>
}