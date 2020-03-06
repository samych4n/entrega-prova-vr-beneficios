import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Card from '../../../Components/Card';
import PokemonActions from '../../../store/Actions/pokemon';
import { getPokemonInfo } from '../../../services/pokeapi';
class PokemonCard extends Component {
	componentDidMount() {
		this.loadImage();
	}

	shouldComponentUpdate(nextProps) {
		const { pokemonInfo: nextPokemonInfo } = nextProps;
		const { number, pokemonInfo } = this.props;
		return !(nextPokemonInfo[number] === pokemonInfo[number]);
	}

	async loadImage() {
		const { number, pokemonInfo, addPokemonInfo } = this.props;
		if (!pokemonInfo[number]) {
			const info = await getPokemonInfo(number);
			addPokemonInfo(number, info);
		}
	}

	render() {
		const { pokemonInfo, number, history } = this.props;
		const image = pokemonInfo[number]
			? pokemonInfo[number].sprites.front_default || '/notfound.png'
			: null;
		return (
			<Card
				{...this.props}
				{...{ image }}
				onClick={() => {
					history.push(`/pokemon/${this.props.number}`);
				}}
			/>
		);
	}
}

const mapStateToProps = state => ({
	pokemonInfo: state.pokemon.pokemonInfo,
});
export default connect(
	mapStateToProps,
	PokemonActions
)(withRouter(PokemonCard));
