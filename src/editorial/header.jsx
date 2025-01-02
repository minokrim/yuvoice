import React, { useContext } from "react";
import { ResponseContext, MediaContext } from "../context/responseContext";
import "./header.css";
import spinner from "../assets/spinner.svg";
import person from "../assets/person.png";

export default function Header() {
  const post = useContext(ResponseContext);
  const { media, loading } = useContext(MediaContext);

  const selectedCategory = "Humanity";

  const filteredPosts = post
    .filter((article) => article.acf.category.includes(selectedCategory))
    .slice(0, 3);

  const filteredMedia = media.filter((item) =>
    filteredPosts.some((postItem) => postItem.featured_media === item.id)
  );

  return (
    <main className="header-body">
      <section className="header-container">
        <div className="main-edit-title">
          <h1>Brighter Tomorrow-</h1>
          <span>Highlighting exemplar stories from around the world</span>
        </div>
        <div className="header-render-cont">
          {<div className="section-containers">
              <section className="section-a">
                <div className="section-a-left">
                  {filteredMedia.length > 0 && (
                    <img src={loading?spinner:filteredMedia[0].source_url} alt="" />
                  )}
                  {filteredPosts.length > 0 && (
                    <div className="sec-a-details">
                      <div className="sec-a-detail1">
                        <h2>{loading?"LOADING":filteredPosts[0].title.rendered}</h2>
                        <figure>
                          <img src={person} alt="user icon" />
                          <p>{loading?"LOADING":filteredPosts[0].acf.writers_name}</p>
                        </figure>
                      </div>
                      <p className="sec-a-meta">
                        {loading?"LOADING":filteredPosts[0].acf.meta_description}
                      </p>
                    </div>
                  )}
                </div>
              </section>

              <section className="section-b">
                <div className="section-b-media">
                  {filteredMedia.slice(1).map((item, index) => (
                    <div key={item.id} className="section-b-media-holder">
                      <img src={loading?spinner:item.source_url} alt="" />
                    </div>
                  ))}
                </div>

                <div className="section-b-details">
                  {filteredPosts.slice(1).map((postItem) => (
                    <div key={postItem.id} className="section-b-details-holder">
                      <h2>{loading?"LOADING":postItem.title.rendered}</h2>
                      <p>{loading?"LOADING":postItem.acf.meta_description}</p>
                      <figure>
                        <img src={person} alt="user icon" />
                        <p>{loading?"LOADING":postItem.acf.writers_name}</p>
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
