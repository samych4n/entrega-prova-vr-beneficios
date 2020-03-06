import { ADD_POKEMON_LIST, ADD_POKEMON_INFO, ADD_POKEMON_GENS } from '../types';
const INITIAL_STATE = {
	pokemonGens: [],
	pokemonList: {},
	pokemonInfo: {},
};

export default function pokemon(state = INITIAL_STATE, action) {
	switch (action.type) {
		case ADD_POKEMON_LIST:
			return {
				...state,
				pokemonList: {
					...state.pokemonList,
					[action.gen]: {
						...action.newPokemons,
					},
				},
			};
		case ADD_POKEMON_INFO:
			return {
				...state,
				pokemonInfo: {
					...state.pokemonInfo,
					[action.number]: action.info,
				},
			};
		case ADD_POKEMON_GENS:
			return {
				...state,
				pokemonGens: [...action.gens],
			};
		default:
			return state;
	}
}
