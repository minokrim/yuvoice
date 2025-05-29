import  React from "react";
import { Link } from "react-router-dom";
export default function StoryContent({currentStory}){
    const addTailwindClasses = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
      
        const paragraphs = doc.querySelectorAll('p');
        paragraphs.forEach((p) => {
          p.classList.add('mt-0','pt-0',"color-black",'w-[100%]') 
        });

        const figure=doc.querySelectorAll("figure")
        figure.forEach((fig)=>{
          fig.classList.add("w-full","flex",'justify-center',"md:w-full","lg:w-[50em]")
        });

        const images = doc.querySelectorAll('img');
        images.forEach((p) => {
          p.classList.add('w-[100%]','h-auto','justify-self-center','self-center',"object-cover","md:h-[35em]")
        });
      
        return doc.body.innerHTML;
      };
      const editedContent = addTailwindClasses(currentStory.content.rendered);

    return <main className="flex flex-col items-center w-[95%] justify-center md:w-full">
        <h5 className="text-gray-400 w-full font-normal md:w-[49%]">
        <b>Editor's Note:</b> Yuvoice uplifts diverse voices around the world. We focus on the perspectives of real people living through history and how Planet Earth looks through their eyes. We never necessarily endorse, promote, or agree with the pieces we publish. We want to showcase viewpoints of all types. Please check out our Statement of Global Progress for further information on our stance.
        </h5>
        <section dangerouslySetInnerHTML={{__html: editedContent,}} className="flex flex-col p-0 items-start text-left font-light text-base obj br w-[80%] md:p-20 md:w-[70%]">
          
        </section>
        
        <section className="flex items-center justify-center w-[70%]">
            <div className="br flex flex-col w-full gap-1 md:dlex-row md:gap-10 md:flex-row">{
              currentStory.acf.topic_tags.map((item)=>(
                <section>
                  <p key={item.id} className=" bg-purple-600/20 rounded-3xl py-2 px-3">#{item}</p>
                </section>
              ))
            }
            </div>
        </section>
        <hr className="border border-solid border-gray-500 w-[70%] h-[0.01em]"/>

        <section className="text-left py-5 w-[70%] items-center">
          <b>{currentStory.acf.writers_name}</b>
          <h4 className="text-sm font-thin">{currentStory.acf.writers_bio}</h4>
          <p className="text-sm font-thin"><b>Writer's Note:</b> {currentStory.acf.closing_notes}</p>
        </section>
        <hr className="border border-solid border-gray-500 w-[70%] h-[0.01em]"/>

        <section className="flex justify-start w-[70%]">
          <p className="text-purple-700 text-left">If you are interested in submitting a story to Yuvoice, please visit our submissions page <Link to="/submitstory">here!</Link></p>
        </section>
        </main>
}