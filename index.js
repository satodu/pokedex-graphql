import { fetchGraphQL } from './src/apiClient.js';
import { GET_POKEMON } from './src/queries/getPokemon.js';
import { GET_TYPES } from './src/queries/getTypes.js';

export async function getPokemon(name) {
    try {
        const data = await fetchGraphQL(GET_POKEMON, { name });
        return data.pokemon;
    } catch (error) {
        console.error(error.message);
    }
}

export async function getTypes() {
    try {
        const data = await fetchGraphQL(GET_TYPES);
        return data.types.results.map(type => type.name);
    } catch (error) {
        console.error(error.message);
    }
}
