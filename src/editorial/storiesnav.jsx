import React,{useContext,useState} from "react";
import "./storiesnav.css"
import { MediaContext, ResponseContext } from "../context/responseContext";

export default function NavStories({onCategorySelect}){

    const post=useContext(ResponseContext);
    const [selectedCategory,setSelectedCategory]=useState("");

    const cat = post
        .flatMap((category) => (category.acf?.category ? category.acf.category : [])) 
        .filter((item, index, self) => self.indexOf(item) === index)
        .sort((a, b) => a.localeCompare(b));

        const handleCategoryClick = (category) => {
            console.log("Selected Category:", category);
            onCategorySelect(category);
        };
        
    return <main className="storyNav-body">
        <section className="storyNav-container">
            <h5 className={`cat ${selectedCategory === "" ? "active" : ""}`}onClick={() => handleCategoryClick("")}>All Stories</h5>
            {cat.map((category,index)=>(
                <div key={index} className="storyNav-render">
                    <h5 className={`cat ${selectedCategory === category ? "active" : ""}`}onClick={() => handleCategoryClick(category)}>{category||"LOADING"}</h5>
                </div>
            ))}
        </section>
        <div className="hr"></div>

    </main>
}