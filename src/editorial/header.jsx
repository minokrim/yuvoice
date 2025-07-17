import React, { useContext } from "react";
import { ResponseContext, MediaContext } from "../context/responseContext";
import "./header.css";
import spinner from "../assets/spinner.svg";
import person from "../assets/person.png";
import fallback from "../assets/ldsvg3.png"

export default function Header() {
  const post = useContext(ResponseContext);

  const selectedCategory = "Humanity";

  const filteredPosts = post.slice(0, 3);

  return (
    <main className="header-body">
      <section className="header-container">
        <div className="main-edit-title">
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-blue-600">Brighter Tomorrow</h1>
          <span>Highlighting exemplar stories from around the world</span>
        </div>
        <div className="header-render-cont">
          {<div className="section-containers">
              <section className="section-a">
                <div className="section-a-left">
                  {filteredPosts.length > 0 && (
                    <img src={filteredPosts[0].cover_image} alt=""   onError={(e) => e.target.src = {fallback}} 
/>
                  )}
                  {filteredPosts.length > 0 && (
                    <div className="sec-a-details">
                      <div className="sec-a-detail1">
                        <h2>{filteredPosts[0].title}</h2>
                        <figure>
                          <img src={person} alt="user icon"   onError={(e) => e.target.src = {fallback}}/>
                          <p>{filteredPosts[0].user.name}</p>
                        </figure>
                      </div>
                      <p className="sec-a-meta">
                        {filteredPosts[0].description}
                      </p>
                    </div>
                  )}
                </div>
              </section>

              <section className="section-b">
                <div className="section-b-media">
                  {filteredPosts.slice(1).map((item, index) => (
                    <div key={item.id} className="section-b-media-holder">
                      <img src={item.cover_image} alt=""   onError={(e) => e.target.src = {fallback}}/>
                    </div>
                  ))}
                </div>

                <div className="section-b-details">
                  {filteredPosts.slice(1).map((postItem) => (
                    <div key={postItem.id} className="section-b-details-holder">
                      <h2>{postItem.title}</h2>
                      <p>{postItem.description}</p>
                      <figure>
                        <img src={person} alt="user icon"   onError={(e) => e.target.src = {fallback}}/>
                        <p>{postItem.user.name}</p>
                      </figure>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          }
        </div>
      </section>
    </main>
  );
}
