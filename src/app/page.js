import Character from "@/components/Character";

const Home = async () => {
    const res = await fetch("http://localhost:4000/characters");
    const characters = await res.json();
    return (
        <>
            {characters.map((char) => (
                <Character char={char} key={char.id} />
            ))}
        </>
    );
};

export default Home;
