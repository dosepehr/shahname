const fetchData = async () => {
    const res = await fetch("http://localhost:4000/characters");
    const characters = await res.json();
    return characters;
};

const characters = fetchData();

const fa = characters.reduce((acc, character) => {
    acc[character.id] = {
        name: character.name.fa,
        description: character.description.fa,
    };
    return acc;
}, {});

export default fa;
