import React from "react";
import { RiFileEditLine } from "react-icons/ri";
import { HiDocumentCheck } from "react-icons/hi2";

export default function Guidelines(){
    return <main className="flex flex-col py-10">
        <section className="flex flex-col gap-5">
            <h2 className="text-purple-700 text-3xl font-bold">Ready to submit?</h2>
            <p className="text-2xl">Read the details below to get started!</p>
        </section>

        <section className="flex flex-col justify-center gap-10 mt-10 md:flex-row md:gap-40">
            <div className="w-full flex flex-col justify-center items-center md:w-[30%]">
                <figure className="flex items-center justify-center w-full md:justify-start ">
                    <RiFileEditLine color="white" className="text-5xl bg-purple-800 rounded-lg p-2"/>
                    <figcaption className="text-2xl font-bold">Guidelines</figcaption>
                </figure>
                <ul className="flex flex-col text-left list-disc marker:text-black gap-1 mt-0 text-lg font-light p-9 md:p-0 md:mt-5">
                    <li>Ensure you have the intellectual property rights 
                    to the piece you are submitting.</li>
                    <li>
                    By submitting your piece, you are giving TurtleZence the right to publish it. We ask for exclusive written and audio content rights for a year and non-exclusive publication rights after that. For illustrations, you keep all rights, and we only need the non-exclusive right to publish.
                    </li>
                    <li>
                    By submitting your piece, you agree that we can publish the edited version of the piece. If you disapprove of any edits, please let us know, as we can take down or archive the piece or that portion of it from the website.
                    </li>
                    <li>
                    By submitting your piece you confirm that you have the rights to publish your submission, that you’ve credited anyone else who contributed to it, that it hasn’t been submitted anywhere else, that it’s not misleading, that it doesn’t violate the rights of any person, and that you’ve informed us of any conflicts of interest. If you mislead us, you'll be responsible for that
                    </li>
                </ul>
            </div>
            <div className="w-full flex flex-col justify-center md:justify-start lg:justify-center items-center md:w-[30%]">
                <figure className="flex items-center justify-center w-full md:justify-start">
                    <HiDocumentCheck color="white" className="text-5xl bg-purple-800 rounded-lg p-2"/>
                    <figcaption className="text-2xl font-bold">Submissions</figcaption>
                </figure>
                <ul className="flex flex-col text-left list-disc marker:text-black gap-1 mt-0 text-lg font-light p-9 md:p-0 md:mt-5">
                    <li>If your piece has trigger warnings that readers should know about, please add them as a disclaimer for sensitivity.</li>
                    <li>
                    Please indicate how you would prefer to be credited: by your full name, by your first name, by your surname, by your pen name or anonymously (your writing will be credited to "Global Citizen").
                    </li>
                    <li>
                    Unless you want your piece to be published anonymously, please list ALL countries or places you've called home or currently call home for at least 6 months or more: the country/place where you live now, the country/place where you used to live and the country/place you call home.
                    </li>
                    <li>
                    Please add links to any social media channels you have that you'd like to include after your name (or to be used for promotional purposes of your article on our social media channels). For example, a personal blog, Instagram, LinkedIn, etc.; Include visuals and accessible links.
                    </li>
                </ul>
            </div>
        </section>

        <section className="flex flex-col gap-10 mt-0 font-medium items-center w-full md:mt-20">
            <p className="w-2/3 md:w-[35%]">Read our submission guidelines <a href="https://docs.google.com/document/d/1M47vcyqYAA4ubCmgtR4FE-l9IiVNyRH7K29v0vSaFbY/edit?tab=t.0" target="blank" rel="noreferrer" className="decoration cursor-pointer underline">here</a> to find out which editorial section your article story/poem best fits in.</p>
            <p>Read our Contributor’s Agreement <a className="decoration cursor-pointer underline" href="https://docs.google.com/document/d/1RG2Q12zMSEDeH4lYnMjEoolasV8OfTxnu-wwdDqf4qE/edit?tab=t.0 " target="_blank" rel="noreferrer">here</a>.</p>

        </section>
    </main>
}