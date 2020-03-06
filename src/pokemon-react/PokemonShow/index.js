import React, { Component } from 'react';
import PokemonActions from '../../store/Actions/pokemon';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPokemonInfo } from '../../services/pokeapi';

import { Picture, PokemonShowContainer, Nome, Stats } from './styles';
import { Stat, Type, Ability, Game, Sprite, Move } from './component';

class PokemonShow extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
		this.loadPokemonInfo();
	}

	async loadPokemonInfo() {
		const { pokemonInfo, addPokemonInfo, match, history } = this.props;
		const { id } = match.params;
		if (!pokemonInfo[id]) {
			try {
				const info = await getPokemonInfo(id);
				addPokemonInfo(id, info);
			} catch (e) {
				history.push('/');
			}
		}
	}

	render() {
		const { match, pokemonInfo } = this.props;
		const { id } = match.params;
		if (!pokemonInfo[id])
			return (
				<PokemonShowContainer>Carregando Dados</PokemonShowContainer>
			);
		const pokemon = pokemonInfo[id];
		return (
			<PokemonShowContainer>
				<Nome>
					#{id}-{pokemon.species.name}
				</Nome>
				<Picture>
					<img
						src={pokemon.sprites.front_default || '/notfound.png'}
						alt={`imagem de ${pokemon.species.name}`}
					/>
				</Picture>
				<Type types={pokemon.types} />
				<Stats>
					{pokemon.stats.map(val => (
						<Stat
							key={val.stat.name}
							name={val.stat.name}
							value={val.base_stat}
						/>
					))}
				</Stats>
				<Ability abilities={pokemon.abilities} />
				<Sprite sprites={pokemon.sprites} />
				<Game games={pokemon.game_indices} />
				<Move moves={pokemon.moves} />
			</PokemonShowContainer>
		);
	}
}

const mapStateToProps = state => ({
	pokemonInfo: state.pokemon.pokemonInfo,
});

export default connect(
	mapStateToProps,
	PokemonActions
)(withRouter(PokemonShow));
