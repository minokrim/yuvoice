import React,{useState,createContext,useEffect} from "react";
import axios from "axios";

export const ResponseContext=createContext();;
export const MediaContext=createContext();
export default function ResponseProvider({children}){

    const [response,setResponse]=useState([])
    const [media,setMedia]=useState([])
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchArticlesAndMedia = async () => {
            try {
              const articlesResponse = await axios.get(
                "https://yuvoice.com/wp-json/wp/v2/article?per_page=100"
              );
              console.log("Articles:", articlesResponse.data);
      
              setResponse(articlesResponse.data);
      
              const mediaIds = articlesResponse.data
                .map((post) => post.featured_media)
                .filter(Boolean);
              console.log("Media IDs:", mediaIds);
      
              const mediaRequests = mediaIds.map((id) =>
                axios.get(`https://yuvoice.com/wp-json/wp/v2/media/${id}`)
              );
      
              const mediaResponses = await Promise.all(mediaRequests);
              const mediaData = mediaResponses.map((response) => response.data);
      
              setMedia(mediaData);
              console.log("Media Data:", mediaData);
            } catch (error) {
              console.error("Error fetching data:", error);
            }finally {
                setLoading(false);
              }
          };
      
          fetchArticlesAndMedia();
    },[])

return <ResponseContext.Provider value={response}>
    <MediaContext.Provider value={{media, loading}}>
    {children}
    </MediaContext.Provider>
</ResponseContext.Provider>
}