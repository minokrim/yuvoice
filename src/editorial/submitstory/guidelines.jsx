import React from "react";
import { Link } from "react-router-dom";
export default function Guidelines(){
    return <main className="flex flex-col py-10">
        <section className="flex flex-col gap-5">
            <h2 className="text-purple-700 text-3xl font-bold">Ready to submit?</h2>
            <p className="text-2xl">Read the details below to get started!</p>
        </section>

        <section className="flex justify-center gap-40 mt-10">
            <div className="w-[30%] flex flex-col">
                <figure className="flex ">
                    <img src="" alt="" />
                    <figcaption className="text-2xl font-bold">Guidelines</figcaption>
                </figure>
                <ul className="flex flex-col text-left list-disc marker:text-black gap-1 mt-5 text-lg font-light">
                    <li>Ensure you have the intellectual property rights 
                    to the piece you are submitting.</li>
                    <li>
                    By submitting your piece, you are giving Yuvoice the right to publish it. We ask for exclusive written and audio content rights for a year and non-exclusive publication rights after that. For illustrations, you keep all rights, and we only need the non-exclusive right to publish.
                    </li>
                    <li>
                    By submitting your piece, you agree that we can publish the edited version of the piece. If you disapprove of any edits, please let us know, as we can take down or archive the piece or that portion of it from the website.
                    </li>
                    <li>
                    By submitting your piece you confirm that you have the rights to publish your submission, that you’ve credited anyone else who contributed to it, that it hasn’t been submitted anywhere else, that it’s not misleading, that it doesn’t violate the rights of any person, and that you’ve informed us of any conflicts of interest. If you mislead us, you'll be responsible for that
                    </li>
                </ul>
            </div>
            <div className="w-[30%] flex flex-col">
                <figure className="flex ">
                    <img src="" alt="" />
                    <figcaption className="text-2xl font-bold">Submissions</figcaption>
                </figure>
                <ul className="flex flex-col text-left list-disc marker:text-black gap-1 mt-5 text-lg font-light">
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

        <section className="flex flex-col gap-10 mt-20 font-medium items-center w-full">
            <p className="w-[35%]">Read our submission guidelines here to find out which editorial section your article story/poem best fits in.</p>
            <p>Read our Contributor’s Agreement here.</p>
        </section>
    </main>
}