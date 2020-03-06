import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { PokemonListContainer } from './style';
import PokemonActions from '../../store/Actions/pokemon';
import PokemonCard from './PokemonCard';
import { getPokemonList } from '../../services/pokeapi';

class PokemonList extends Component {
	componentDidMount() {
		this.carregarPokemonInfo();
		window.scrollTo(0, 0);
	}

	componentDidUpdate(prevProps) {
		const { match: prevMatch } = prevProps;
		const { gen: prevGen } = prevMatch.params;
		const { match } = this.props;
		const { gen } = match.params;

		if (prevGen !== gen) this.carregarPokemonInfo();
	}

	carregarPokemonInfo = async () => {
		const { pokemonList, addPokemonList, match } = this.props;
		const { gen } = match.params;

		if (pokemonList[gen]) return;
		const regionInfo = await getPokemonList(gen);
		addPokemonList(gen, regionInfo);
	};

	render() {
		const { pokemonList, match } = this.props;
		const { gen } = match.params;
		const pokemonListCurrentGen = pokemonList[gen];

		const keys = pokemonListCurrentGen
			? Object.keys(pokemonListCurrentGen).sort((a, b) => a - b)
			: [];

		return keys.length ? (
			<PokemonListContainer>
				{keys.map(key => (
					<PokemonCard
						key={key}
						number={key}
						name={pokemonListCurrentGen[key].name}
					/>
				))}
			</PokemonListContainer>
		) : (
			<>Escolha Uma Geração</>
		);
	}
}

PokemonList.propTypes = {
	pokemonList: PropTypes.shape({
		name: PropTypes.string,
		url: PropTypes.string,
	}),
	addPokemonList: PropTypes.func,
};

const mapStateToProps = state => ({
	pokemonList: state.pokemon.pokemonList,
});
export default connect(
	mapStateToProps,
	PokemonActions
)(withRouter(PokemonList));
