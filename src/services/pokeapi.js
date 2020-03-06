import axios from 'axios';
import pokeapiConf from '../configs/pokeapi';

const { baseurl, version } = pokeapiConf;

export const pokeapi = axios.create({
	baseURL: `${baseurl}${version}/`,
});

function HandleError(func) {
	return async function() {
		try {
			return await func(...arguments);
		} catch (e) {
			//TO DO ... tratar os erros de forma adequada
			console.log(e);
			throw e;
		}
	};
}

export const getPokemonGens = HandleError(async () => {
	const { data } = await pokeapi.get('generation/');
	const { results } = data;
	return results.map(gen => ({
		...gen,
		id: /https:\/\/pokeapi.co\/api\/v2\/generation\/([0-9]*)/.exec(
			gen.url
		)[1],
	}));
});

export const getPokemonList = HandleError(async generation => {
	const { data } = await pokeapi.get(`/generation/${generation}/`);
	const { pokemon_species } = data;

	return pokemon_species.reduce((acc, pokemon) => {
		acc[
			/https:\/\/pokeapi.co\/api\/v2\/pokemon-species\/([0-9]*)\//.exec(
				pokemon.url
			)[1]
		] = pokemon;
		return acc;
	}, {});
});

export const getPokemonInfo = HandleError(async number => {
	const { data } = await pokeapi.get(`/pokemon/${number}/`);
	return data;
});
