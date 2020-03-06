import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GenContainer, GenTextContainer } from './styled';
import PokemonActions from '../../store/Actions/pokemon';
import { getPokemonGens } from '../../services/pokeapi';

class Header extends Component {
	componentDidMount() {
		this.carregarPokemonInfo();
	}

	carregarPokemonInfo = async () => {
		const { pokemonGens, addPokemonGens } = this.props;
		if (!pokemonGens.length) {
			const pokemonGens = await getPokemonGens();
			addPokemonGens(pokemonGens);
		}
	};
	renderRegions = () => {
		const { pokemonGens, history } = this.props;
		return pokemonGens.map(gen => (
			<GenTextContainer
				key={gen.name}
				onClick={() => {
					history.push(`/list/${gen.id}`);
				}}
			>
				{gen.name}
			</GenTextContainer>
		));
	};

	render() {
		return <GenContainer>{this.renderRegions()}</GenContainer>;
	}
}

Header.propTypes = {
	pokemonGens: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			url: PropTypes.string,
		})
	),
	addPokemonGens: PropTypes.func,
};

const mapStateToProps = state => ({
	pokemonGens: state.pokemon.pokemonGens,
});

export default connect(mapStateToProps, PokemonActions)(withRouter(Header));
