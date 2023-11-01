export default async function handler(req, res) {
    const name = req.query.name;
    const url = "https://pokeapi.co/api/v2/pokemon/";
    
    if (req.method === 'GET') {
        if (name) {
            const response = await fetch(url + name);
            try {
              const data = await response.json();
              const typeNames = data.types.map((typeObj) => typeObj.type.name);
              // name sprite type
              const selectData = {
                  name: data.species.name,
                  sprite: data.sprites.front_default,
                  type: typeNames
              }
              res.status(200).json(selectData);
            } catch (e) {
              res.status(400).json({ error: "pokemon does not exist" });
            }
          } 
    }
  }