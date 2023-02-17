const pokeNameInput = document.querySelector('#poke-input');
const searchBtn = document.querySelector('#search-btn');

const firstPokes = ['pikachu', 'charmander', 'mewtwo', 'charizard'];
const randomPokes = firstPokes[Math.floor(Math.random() * firstPokes.length)];

const getPokemon = async pokeName => {
try {
const req = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeName || randomPokes}`);
const { name, color, id } = await req.json();

    	return { name, color, id };
    } catch ({ message }) {
    	console.log(message);
    }

};

searchBtn.addEventListener('click', async () => {
const pokemon = await getPokemon(pokeNameInput.value);
console.log(pokemon);
});
