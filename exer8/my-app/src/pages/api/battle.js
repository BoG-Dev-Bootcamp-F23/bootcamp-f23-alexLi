
export default async function handler(req, res) {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    if (req.method === 'POST') {
        const body = req.body;
        if (!body) {
            return res.status(400).json({ error: "Invalid Body" });
        }
        // const { pokemon1, pokemon2 } = {body.pokemon1, body.pokemon2};
        const pokemon1 = body.pokemon1;
        const pokemon2 = body.pokemon2;
        try {
            const response1 = await fetch(url + pokemon1);
            const response2 = await fetch(url + pokemon2);
            const data1 = await response1.json();
            const data2 = await response2.json();
            const baseStat1 = parseInt(data1.stats[0].base_stat);
            const baseStat2 = parseInt(data2.stats[0].base_stat);

            if (baseStat1 > baseStat2) {
                res.status(200).json({
                    higherStat: pokemon1
                });
            } else if (baseStat2 === baseStat1) {
                res.status(200).json({
                    higherStat:  `${pokemon1} and ${pokemon2} have equal base stats`
                });
            } else {
                res.status(200).json({
                    higherStat: pokemon2
                });
            }
        } catch(e) {    
            res.status(400).json({ error: "Invalid Pokemon"});
        }
    }
}