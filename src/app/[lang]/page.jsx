import Character from '@/components/Character';
import Intro from '@/components/Intro';

const Home = async ({ searchParams, params }) => {
    const res = await fetch('http://localhost:4000/en_characters');
    const characters = await res.json();
    return (
        <>
            <Intro />
            {characters.map((char) => (
                <Character
                    char={char}
                    key={char.id}
                    isSingle={false}
                    params={params}
                />
            ))}
        </>
    );
};

export default Home;
