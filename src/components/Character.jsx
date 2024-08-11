import React from "react";
import Image from "next/image";
import Link from "next/link";
const Character = ({ char }) => {
    return (
        <div>
            <div className="bg-white/15 p-14 flex rounded-[40px] flex-col lg:flex-row relative gap-14">
                <div className=" w-full md:w-3/4 lg:w-[38%] mx-auto lg:ml-0">
                    <Image
                        src={"http://localhost:4000/images/" + char.cover}
                        width={2000}
                        height={2000}
                        className="w-full h-full object-contain mx-auto"
                    />
                </div>
                <div className="lg:mt-14 lg:w-1/2 w-full">
                    <p className="font-bold text-3xl ">
                        {+char.id < 10 && "0"}
                        {char.id}. {char.name.en}
                    </p>
                    <p className="my-14">{char.description.en}</p>
                    <Link
                        href={char.id}
                        className=" border-2 hover:text-gray-700 hover:shadow-1 hover:bg-white duration-300 border-white bg-transparent text-white py-3 px-2 rounded-xl"
                    >
                        see more
                    </Link>
                </div>
                <p className="opacity-20 text-white absolute right-12 bottom-4 md:bottom-12">
                    Šāhnāmeh (The Book of Kings)
                </p>
            </div>
        </div>
    );
};

export default Character;
