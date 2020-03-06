import { bindActionCreators } from 'redux';
import { ADD_POKEMON_LIST, ADD_POKEMON_INFO, ADD_POKEMON_GENS } from '../types';
function addPokemonList(gen, newPokemons) {
	return {
		type: ADD_POKEMON_LIST,
		newPokemons,
		gen,
	};
}
function addPokemonInfo(number, info) {
	return {
		type: ADD_POKEMON_INFO,
		number,
		info,
	};
}
function addPokemonGens(gens) {
	return {
		type: ADD_POKEMON_GENS,
		gens,
	};
}

export default dispatch =>
	bindActionCreators(
		{ addPokemonList, addPokemonInfo, addPokemonGens },
		dispatch
	);
