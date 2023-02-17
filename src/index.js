const pokeNameInput = document.querySelector('#poke-input');
const searchBtn = document.querySelector('#search-btn');

/*
	DESAFIO: CRIE UMA APLICAÇÃO QUE AO CLICAR, MOSTRA NO CONSOLE OS DADOS (name, color, id) DE UM POKÉMON

	REGRAS:
		1. VOCÊ PRECISA FAZER QUE O USUÁRIO POSSA DIGITAR O NOME DE UM POKÉMON DINAMICAMENTE.
		2. SE NENHUM POKÉMON FOR ENCONTRADO, MOSTRE ALGUM ALEATÓRIO (PODE SER ESTATICAMENTE DECLARADO).
*/

//URL_TO_API: `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`;

const getPokemon = async pokeName => {
	try {
		const req = await fetch(urlHere);
	} catch ({ message }) {}
};
