import RoleCard from "../component/rolecard"
import { RolesData } from "../component/role"
import { useState } from "react"

export default function Roles(){

    return <main className="w-[90%] py-5">
        <h2 className="flex self-start">Open Roles</h2>
        <section className="w-full flex gap-10 mb-0 pb-0 text-gray-300 overflow-x-scroll md:overflow-x-visible">
            <p>All</p>
            <p>Editorial</p>
            <p>Journalism</p>
            <p>Marketing</p>
            <p>People & Culture</p>
            <p>Technology</p>
        </section>
        <hr className="flex mt-0 pt-0"/>

        <section>
            {RolesData.map((role)=>(
                <div key={role.id}>
                <RoleCard title={role.job} description={role.description} type={role.jobtype} hours={role.hours}/>
                <hr />
                </div>
            ))}
        </section>
    </main>
}