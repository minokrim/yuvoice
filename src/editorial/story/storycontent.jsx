import  React from "react";
export default function StoryContent({currentStory}){
    const addTailwindClasses = (htmlContent) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlContent, 'text/html');
      
        const paragraphs = doc.querySelectorAll('p');
        paragraphs.forEach((p) => {
          p.classList.add('mt-0','pt-0',"color-black") 
        });

        const images = doc.querySelectorAll('img');
        images.forEach((p) => {
          p.classList.add('w-[60em]','h-[35em]','justify-self-center','self-center')
        });
      
        return doc.body.innerHTML;
      };
      const editedContent = addTailwindClasses(currentStory.content.rendered);

    return <main className="flex flex-col items-center border border-solid border-red-500 w-[80%] justify-center">
        <h5 className="text-gray-400 w-[49%] font-normal">
        <b>Editor's Note:</b> Yuvoice uplifts diverse voices around the world. We focus on the perspectives of real people living through history and how Planet Earth looks through their eyes. We never necessarily endorse, promote, or agree with the pieces we publish. We want to showcase viewpoints of all types. Please check out our Statement of Global Progress for further information on our stance.
        </h5>
        <section dangerouslySetInnerHTML={{__html: editedContent,}} className="flex flex-col p-20 items-start text-left font-light text-base obj br w-[70%]">
          
        </section>
        
        <section className="flex w-full items-center justify-center">
            <p className="br flex w-full items-center justify-center bg-purple-600/20 rounded-lg">{currentStory.acf.topic_tags}
            </p>
        </section>
        </main>
}