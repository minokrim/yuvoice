import React from "react";
export default function StoriesCategoriesCard({category,description}){
    return <main className="flex h-full flex-col bg-gradient-to-b from-purple-600/30 to-blue-600/30 items-center justify-center p-3 rounded-lg">
        <h3 className="text-purple-900 text-lg font-semibold">{category}</h3>
        <p className=" flex w-full text-sm font-light h-16">{description}</p>
    </main>
}