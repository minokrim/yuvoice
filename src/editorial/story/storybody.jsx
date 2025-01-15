import React, { useState,useEffect,useContext } from "react";
import Nav from "../../nav/nav";
import Footer from "../../footer/footer";
import { useParams } from "react-router-dom";
import StoryHeader from "./storyheader";
import { ResponseContext } from "../../context/responseContext";
import { MediaContext } from "../../context/responseContext";
import StoryContent from "./storycontent";
export default function StoryBody(){
    const [currentStory, setCurrentStory] = useState(null);
    const [currentMedia,setCurrentMedia]=useState("")
    const {storyId}=useParams();

    const post=useContext(ResponseContext)
    const {media,loading}=useContext(MediaContext)

    useEffect(() => {
        if (storyId) {
            const story = post.find(article => article.id.toString() === storyId);
            setCurrentStory(story); 
            const articleMedia = media.find((mediaItem) => mediaItem.id === story.featured_media)
            setCurrentMedia(articleMedia.source_url)
              
        }
    }, [storyId, post,media]); 
    if (loading || !currentStory) {
        return <div>Loading...</div>; 
    }
    console.log(currentStory);

    return <main>
        <section>
        <Nav/>
        <StoryHeader currentStory={currentStory} currentMedia={currentMedia}/>
        </section>
        <StoryContent currentStory={currentStory} currentMedia={currentMedia}/>
        <Footer/>
    </main>
}