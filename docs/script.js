import { fetchGraphQL } from './js/apiClient.js';
import { GET_POKEMON } from './js/getPokemon.js';

async function fetchPokemon() {
  const name = document.getElementById('pokemon-name').value.trim().toLowerCase();
  if (!name) {
    alert('Please enter a Pokémon name!');
    return;
  }

  try {
    const data = await fetchGraphQL(GET_POKEMON, { name });
    const pokemon = data.getPokemon;

    if (!pokemon) {
      throw new Error('Pokemon not found');
    }

    // Atualiza sprites
    const spriteSection = document.getElementById('pokemon-sprite-section');
    if (spriteSection) {
      spriteSection.innerHTML = `
        <div class="row text-center">
          <div class="col">
            <img src="${pokemon.sprite}" alt="Original Sprite" class="img-fluid" style="max-width: 150px;">
            <p>Original</p>
          </div>
          <div class="col">
            <img src="${pokemon.shinySprite}" alt="Shiny Sprite" class="img-fluid" style="max-width: 150px;">
            <p>Shiny</p>
          </div>
        </div>
      `;
    }

    // Atualiza dados básicos
    document.getElementById('pokemon-title').textContent = pokemon.key;
    document.getElementById('pokemon-types').innerHTML = `Types: ${pokemon.types.map(type => `<span class="type-tag type-${type.name.toLowerCase()}">${type.name}</span>`).join(' ')}`;
    document.getElementById('pokemon-weight').textContent = `Weight: ${pokemon.weight} kg`;
    document.getElementById('pokemon-height').textContent = `Height: ${pokemon.height} m`;

    // Base Stats
    const baseStats = document.getElementById('pokemon-base-stats');
    if (baseStats) {
      baseStats.innerHTML = '';
      Object.entries(pokemon.baseStats).forEach(([stat, value]) => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.textContent = `${stat.toUpperCase()}: ${value}`;
        baseStats.appendChild(li);
      });
    }

    // Moves Table com tipos estilizados
    const levelUpMoves = pokemon.learnsets?.generation8?.levelUpMoves || [];
    const movesTable = document.getElementById('pokemon-moves');
    if (movesTable) {
      if (levelUpMoves.length > 0) {
        movesTable.innerHTML = `
          <h3 class="text-center mt-4">Level-Up Moves</h3>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Level</th>
                <th>Move</th>
                <th>Type</th>
                <th>Power</th>
                <th>Accuracy</th>
              </tr>
            </thead>
            <tbody>
              ${levelUpMoves.map(move => `
                <tr>
                  <td>${move.level}</td>
                  <td>${move.move.name}</td>
                  <td><span class="type-tag type-${move.move.type.toLowerCase()}">${move.move.type}</span></td>
                  <td>${move.move.basePower || 'N/A'}</td>
                  <td>${move.move.accuracy || 'N/A'}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
      } else {
        movesTable.innerHTML = '<p class="text-center">No level-up moves available.</p>';
      }
    }

    // Exibe a seção de resultados
    document.getElementById('result').classList.remove('d-none');
  } catch (error) {
    alert(error.message);
    document.getElementById('result').classList.add('d-none');
  }
}

// Aguarda o carregamento do DOM antes de vincular o evento
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('fetch-button').addEventListener('click', fetchPokemon);
});
