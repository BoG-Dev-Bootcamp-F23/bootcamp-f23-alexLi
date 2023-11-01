export default async function handler(req, res) {
    const type = req.query.type;
    const url = "https://pokeapi.co/api/v2/type/";
    if (req.method === 'GET') {
        if (type) {
            const response = await fetch(url + type);
            try {
              const data = await response.json();
              const pokemonNames = data.pokemon.map((pokemonObj) => pokemonObj.pokemon.name);
              const selectData = {
                  pokemon: pokemonNames
              }
              res.status(200).json(selectData);
            } catch (e) {
              res.status(400).json({ error: "Type does not exist :(" });
            }
          } 
    }
  }