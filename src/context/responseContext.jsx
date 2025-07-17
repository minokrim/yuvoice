import React,{useState,createContext,useEffect} from "react";
import axios from "axios";

export const ResponseContext=createContext();;
export const MediaContext=createContext();
export default function ResponseProvider({children}){

    const [response,setResponse]=useState([])
    const [media,setMedia]=useState([])
    const [loading, setLoading] = useState(true);

    function fetchArticle () {
      axios.get("https://dev.to/api/articles")
      .then((res)=>{
        setResponse(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    }

    useEffect(()=>{
        // const fetchArticlesAndMedia = async () => {
        //     try {
        //       const articlesResponse = await axios.get(
        //         "https://dev.to/api/articles"
        //       );
        //       setResponse(articlesResponse.data);
        //       console.log(response)
      
        //       const mediaIds = articlesResponse.data
        //         .map((post) => post.featured_media)
        //         .filter(Boolean);
      
        //       const mediaRequests = mediaIds.map((id) =>
        //         axios.get(`https://yuvoice.com/wp-json/wp/v2/media/${id}`)
        //       );
      
        //       const mediaResponses = await Promise.all(mediaRequests);
        //       const mediaData = mediaResponses.map((response) => response.data);
      
        //       setMedia(mediaData);
        //     } catch (error) {
        //       console.error("Error fetching data:", error);
        //     }finally {
        //         setLoading(false);
        //       }
        //   };
      
          // fetchArticlesAndMedia();
          fetchArticle();
    },[])
return <ResponseContext.Provider value={response}>
    <MediaContext.Provider value={{media, loading}}>
    {children}
    </MediaContext.Provider>
</ResponseContext.Provider>
}