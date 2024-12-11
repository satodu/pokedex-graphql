import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { fetchGraphQL } from '../src/apiClient.js';
import { GET_POKEMON } from '../src/queries/getPokemon.js';

const app = express();
const PORT = 3000;

// Resolve o caminho absoluto para a pasta "docs"
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve arquivos estáticos da pasta "docs"
const docsPath = path.join(__dirname);

// Rota principal para o HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(docsPath, 'example.html'));
});

// API route for Pokémon data
// API route for Pokémon data
app.get('/pokemon', async (req, res) => {
    const { name } = req.query;

    // Converter o nome para letras minúsculas
    const formattedName = name.trim().toLowerCase();

    console.log(`Fetching data for Pokémon: ${formattedName}`);
    try {
        const variables = { name: formattedName };
        const data = await fetchGraphQL(GET_POKEMON, variables);

        if (!data || !data.getPokemon) {
            throw new Error('Pokemon not found');
        }

        const pokemon = data.getPokemon;

        res.json({
            id: pokemon.key,
            name: pokemon.key,
            sprite: pokemon.sprite,
            shinySprite: pokemon.shinySprite,
            weight: pokemon.weight,
            height: pokemon.height,
            types: pokemon.types.map(type => type.name),
            baseStats: {
                hp: pokemon.baseStats.hp,
                attack: pokemon.baseStats.attack,
                defense: pokemon.baseStats.defense,
                specialAttack: pokemon.baseStats.specialattack,
                specialDefense: pokemon.baseStats.specialdefense,
                speed: pokemon.baseStats.speed,
            },
            attacks: pokemon.learnsets.generation8.levelUpMoves.map(move => ({
                level: move.level,
                name: move.move.name,
                type: move.move.type,
                basePower: move.move.basePower,
                accuracy: move.move.accuracy,
            })),
        });
    } catch (error) {
        console.error('Error fetching Pokémon:', error);
        res.status(500).json({ error: error.message });
    }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
