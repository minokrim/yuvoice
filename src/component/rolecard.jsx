import { IoColorFill } from "react-icons/io5";
import { TfiArrowTopRight } from "react-icons/tfi";
export default function RoleCard({title,description,type,hours}){
    return <main className="flex flex-col text-left">
        <h3 className="mb-0 pb-0">{title}</h3>
        <p className="font-light text-base mt-0 pt-0">{description}</p>
        <section className="flex justify-between items-center justify-center">
            <div className="flex gap-5">
                <p className="flex border-solid border-0.1 border-gray-300 text-gray-300 font-light text-sm rounded-full px-2 w-[4em] items-center justify-center">{type}</p>
                <p className="flex border-solid border-0.1 border-gray-300 text-gray-300 font-light text-sm rounded-full px-2 w-[4em] items-center justify-center">{hours} hours</p>
            </div>
            <button className="text-white text-lg bg-purple-900 px-4 md:px-8 h-max rounded-lg flex justify-between ">Apply<TfiArrowTopRight value={{IoColorFill}} className="flex justify-self-end"/></button>
        </section> 
    </main>
}