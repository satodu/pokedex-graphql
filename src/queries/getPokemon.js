export const GET_POKEMON = `
  query GetPokemon($name: PokemonEnum!) {
    getPokemon(pokemon: $name) {
      key
      sprite
      shinySprite
      weight
      height
      types {
        name
      }
      baseStats {
        hp
        attack
        defense
        specialattack
        specialdefense
        speed
      }
      learnsets {
        generation8 {
          levelUpMoves {
            level
            move {
              name
              type
              basePower
              accuracy
            }
          }
        }
      }
    }
  }
`;
