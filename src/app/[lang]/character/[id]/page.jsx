import Character from "@/components/Character";
import React from "react";

const page = async ({ params }) => {
    const { id } = params;
    const res = await fetch(`http://localhost:4000/characters/${id}`);
    const data = await res.json();
    return (
        <div>
            <Character params={params} char={data} isSingle />
        </div>
    );
};

export default page;
