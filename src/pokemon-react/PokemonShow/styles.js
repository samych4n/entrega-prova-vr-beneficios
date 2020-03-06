import styled from 'styled-components';

export const PokemonShowContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const Section = styled.div`
	display: flex;
	border-radius: 15px;
	border: 8px solid #df1818;
	background-color: white;
	margin-bottom: 20px;
	padding: 10px;
`;

export const Nome = styled(Section)`
	width: 70%;
	max-width: 800px;

	font-size: 20px;
	font-weight: bold;
	text-transform: uppercase;
	justify-content: center;

	@media (max-width: 500px) {
		width: 85%;
	}
`;

export const Picture = styled(Section)`
	width: 70%;
	&:after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
	& img {
		height: 100%;
		width: 100%;
	}
	@media (max-width: 500px) {
		width: 85%;
	}
`;

// #region stats
export const Stats = styled(Section)`
	display: flex;
	flex-direction: column-reverse;
	width: 70%;
	@media (max-width: 500px) {
		width: 85%;
	}
`;
export const StatContainer = styled.div`
	display: flex;
	justify-content: space-between;
	position: relative;
	margin: 2.5px;
	border: 1px solid black;
	border-radius: 15px;
`;
export const StatsName = styled.div`
	margin-left: 10px;
	font-weight: bold;
	font-size: 15px;
`;

export const StatsValue = styled.div`
	font-size: 15px;
	font-weight: bold;
	margin-right: 10px;
`;

export const StatsBar = styled.div`
	font-size: 10px;
	background-color: ${props => props.color};
	position: absolute;
	height: 100%;
	opacity: 0.5;
	border-radius: 15px;
	width: ${props => `calc(100% * ${props.value} / 255)`};
`;

//#endregion stats

// #region types
export const TypesContainer = styled(Section)`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	width: 70%;
	@media (max-width: 500px) {
		width: 85%;
	}
`;

export const Types = styled.div`
	background-color: ${props => props.color};
	font-size: 20px;
	font-weight: bold;
	padding: 5px;
	flex: 1;
	text-align: center;
`;

// #endregion types

// #region abilities
export const AbilitiesContainer = styled(Section)`
	width: 70%;
	display: flex;
	flex-direction: column;
	@media (max-width: 500px) {
		width: 85%;
	}
`;

export const AbilitiesTitle = styled.div`
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	text-decoration: underline;
	padding-bottom: 5px;
`;

export const Abilities = styled.div`
	background-color: ${props => (props.is_hidden ? '#a67c00' : '#FFFFFF')};
	font-size: 15px;
	font-weight: bold;
	padding: 5px;
`;
// #endregion abilities

// #region games
export const GamesContainer = styled(Section)`
	width: 70%;
	display: flex;
	flex-direction: column;
	@media (max-width: 500px) {
		width: 85%;
	}
`;

export const GamesTitle = styled.div`
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	text-decoration: underline;
	padding-bottom: 5px;
`;

export const GamesNameContainer = styled.div`
	font-size: 15px;
	font-weight: bold;
	padding: 5px;
	display: flex;
	flex-direction: row;
	flex-flow: wrap;
`;

export const Games = styled.div`
	font-size: 15px;
	font-weight: bold;
	padding: 5px;
`;
// #endregion games

// #region sprites
export const SpritesContainer = styled(Section)`
	width: 70%;
	display: flex;
	flex-direction: column;
	@media (max-width: 500px) {
		width: 85%;
	}
`;

export const SpritesTitle = styled.div`
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	text-decoration: underline;
	padding-bottom: 5px;
`;

export const SpritesSexContainer = styled.div`
	padding: 5px;
	display: flex;
	flex-direction: row;
	flex-flow: wrap;
	justify-content: center;
`;

export const SpritesGroupContainer = styled.div`
	padding: 5px;
	display: flex;
	flex-flow: wrap;
	flex-direction: row;
	justify-content: center;
`;

export const Sprites = styled.img`
	&:after {
		content: '';
		display: block;
		padding-bottom: 100%;
	}
`;
// #endregion sprites
// #region moves
export const MovesContainer = styled(Section)`
	width: 70%;
	display: flex;
	flex-direction: column;
	@media (max-width: 500px) {
		width: 85%;
	}
`;

export const MovesTitle = styled.div`
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	text-transform: uppercase;
	text-decoration: underline;
	padding-bottom: 5px;
`;

export const MovesNameContainer = styled.div`
	font-size: 15px;
	font-weight: bold;
	padding: 5px;
	display: flex;
	flex-direction: row;
	flex-flow: wrap;
`;

export const Moves = styled.div`
	font-size: 15px;
	font-weight: bold;
	padding: 5px;
`;
// #endregion moves
