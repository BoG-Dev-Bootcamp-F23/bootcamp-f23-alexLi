
export default async function handler(req, res) {
    const name = req.query.name;
    const url = "https://pokeapi.co/api/v2/pokemon/";

    const id = Math.floor(Math.random() * 1000) + 1;
    const response = await fetch(url + id);
    const data = await response.json();
    const typeNames = data.types.map((typeObj) => typeObj.type.name);
    const selectData = {
        name: data.species.name,
        sprite: data.sprites.front_default,
        type: typeNames
    }
    // name sprite type
    res.status(200).json(selectData);
}