import { getPokemon, getTypes } from './index.js';

(async () => {
    console.log('Fetching Pikachu...');
    const pikachu = await getPokemon('pikachu');
    console.log(pikachu);

    console.log('\nFetching all Pokémon types...');
    const types = await getTypes();
    console.log(types);
})();
