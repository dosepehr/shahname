import Character from "@/components/Character";
import Header from "@/components/Header";

const Home = async () => {
    const res = await fetch("http://localhost:4000/characters");
    const characters = await res.json();
    return (
        <>
            <Header />
            <div className="container space-y-8">
                {characters.map((char) => (
                    <Character char={char} key={char.id} />
                ))}
            </div>
        </>
    );
};

export default Home;
