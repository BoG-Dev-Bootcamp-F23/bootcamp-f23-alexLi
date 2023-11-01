export default async function handler(req, res) {
  const name = req.query.name;
  const speciesURL = "https://pokeapi.co/api/v2/pokemon-species/";
  if (req.method === 'GET') {
    if (name) {
      const response = await fetch(speciesURL + name);
      try {
        const data = await response.json();
        const evolveURL = data.evolution_chain.url;
  
        const evolveResponse = await fetch(evolveURL);
        const evolveData = await evolveResponse.json();
  
        let queue = [evolveData.chain];
        let foundChildren = [];
  
        while (queue.length > 0) {
          const currentPokemon = queue.shift();
      
          // Check if this Pokémon's name matches the target name
          if (currentPokemon.species.name === name) {
            if (currentPokemon.evolves_to && currentPokemon.evolves_to.length > 0) {
              foundChildren = currentPokemon.evolves_to.map((childPokemon) => childPokemon.species.name);
            } else {
              foundChildren.push(name);
            }
            break;
          }
          // add all children if current pokemon is not target
          queue = [...queue, ...currentPokemon.evolves_to];
          /*
          if (currentPokemon.evolves_to && currentPokemon.evolves_to.length > 0) {
            for (let i = 0; i < currentPokemon.evolves_to.length; i++) {
              queue.push(currentPokemon.evolves_to[i]);
            }
          }
          */
        
        }
        
        const selectData = {
          evolves_to: foundChildren
        }
        res.status(200).json(selectData);
      } catch (e) {
        res.status(400).json({ error: "pokemon does not exist" });
      }
    }
  }
}