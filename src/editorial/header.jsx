import React,{useState,useEffect} from "react";
import axios from "axios";
import './header.css'
import spinner from "../assets/spinner.svg"
import person from "../assets/person.png"
export default function Header(){
    const [post,setPost]=useState([]);
    const [media, setMedia] = useState([]);
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        setLoading(true)
        axios.get("https://yuvoice.com/wp-json/wp/v2/article?per_page=100")
        .then((res)=>{
            console.log(res)    
            setPost(res.data)
            return axios.get("https://yuvoice.com/wp-json/wp/v2/media?per_page=100")
        })
        .then((res)=>{
            setMedia(res.data)
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[])

    const sectionAPost = post.filter((item) => [209].includes(item.id));
    const sectionAMedia=media.filter((item)=>[214].includes(item.id));
    const sectionB = post.filter((item) => [205, 207].includes(item.id));
    const sectionBMedia=media.filter((item)=>[222,223].includes(item.id));


    return <main className="header-body">
        <section>
            <div className="main-edit-title">
            <h1>Brighter Tomorrow- <span>Highlighting exemplar stories from around the world</span></h1>
            <p></p>
            </div>
            <div className="header-render-cont">
                {loading ? (
                    <img src={spinner} alt="loading"/>
                    ) :(
                    <div className="section-containers">
                    <section className="section-a">
                    {sectionAMedia.map((items)=>(
                                <div key={items.id}>
                                <section className="section-a-left">
                                <img src={items.source_url} alt="" />
                                    {sectionAPost.map((item)=>(
                                <div className="sec-a-details" key={item.id}>
                                    <div className="sec-a-detail1">
                                    <h2>{item.title.rendered}</h2>
                                    <figure>
                                        <img src={person} alt="user icon" />
                                        <p>{item.acf.writers_name}</p>
                                    </figure>
                                    </div>
                                    <p className="sec-a-meta">{item.acf.meta_description}</p>
                                </div>
                                    ))}
                                </section>
                            </div>
                        ))
                    }
                    </section>

                    <section className="section-b">
                    <div className="section-b-media">
                    {sectionBMedia.map((item2)=>(
                            <div key={item2.id} className="section-b-media-holder">
                                        <img src={item2.source_url} alt="" />
                            </div>
                        ))
                    }
                    </div>

                    <div className="section-b-details">
                    {sectionB.map((item3)=>(
                    <div key={item3.id} className="section-b-details-holder"> 
                            <h2>{item3.title.rendered}</h2>
                            <p>{item3.acf.meta_description}</p>
                            <figure>
                                    <img src={person} alt="user icon"/>
                                    <p>{item3.acf.writers_name}</p>
                            </figure>
                    </div>
                    ))}
                    </div>
                    </section>
                    </div>
                    )}
            </div>
        </section>
    </main>
}