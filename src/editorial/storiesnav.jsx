import React,{useContext} from "react";
import "./storiesnav.css"
import { ResponseContext } from "../context/responseContext";
export default function NavStories(){
    const post=useContext(ResponseContext)
    const cat = post
        .flatMap((category) => (category.acf?.category ? category.acf.category : [])) 
        .filter((item, index, self) => self.indexOf(item) === index)
        .sort((a, b) => a.localeCompare(b));
        console.log(cat)
    return <main className="storyNav-body">
        <section className="storyNav-container">
            <h5 className="cat">All Stories</h5>
            {cat.map((category)=>(
                <div key={category.id} className="storyNav-render">
                    <h5 className="cat">{category}</h5>
                </div>
            ))}
        </section>
        <div className="hr"></div>

    </main>
}