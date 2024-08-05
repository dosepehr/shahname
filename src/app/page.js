import Image from "next/image";
import Link from "next/link";

const Home = async () => {
    const res = await fetch("http://localhost:4000/characters");
    const characters = await res.json();
    return (
        <>
            <div className="w-[90%] mx-auto ">
                {characters.map((char) => (
                    <div className="bg-white/15 p-14 flex gap-x-14 rounded-[40px] flex-col lg:flex-row relative">
                        <div className="min-w-[444px] h-[444px] w-1/2 lg:w-full mx-auto">
                            <Image
                                src={
                                    "http://localhost:4000/images/" + char.cover
                                }
                                width={2000}
                                height={2000}
                                className="w-full h-full object-contain mx-auto"
                            />
                        </div>
                        <div className="mt-14">
                            <p className="font-bold text-3xl ">
                                {+char.id < 10 && "0"}
                                {char.id}. {char.name.en}
                            </p>
                            <p className="my-14">{char.description.en}</p>
                            <Link
                                href={char.id}
                                className=" border border-white bg-transparent text-white py-3 px-2 rounded-xl"
                            >
                                see more
                            </Link>
                        </div>
                        <p className="opacity-20 text-white absolute right-12 bottom-12" >Šāhnāmeh (The Book of Kings)</p>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Home;
