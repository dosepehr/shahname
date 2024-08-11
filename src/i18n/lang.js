const fetchLangData = async () => {
    const res = await fetch("http://localhost:4000/characters");
    const characters = await res.json();

    const lang = characters.reduce((acc, character) => {
        acc[character.id] = {
            name: character.name.fa,
            description: character.description.fa,
        };
        return acc;
    }, {});
    return lang;
};

export default fetchLangData;
