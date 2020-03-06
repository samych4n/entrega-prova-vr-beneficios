import styled from 'styled-components';
import { CardSquare } from '../Components/Card/styled';

export const PokedexContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const BackgroundFixed = styled.div`
	background-image: url('/background.jpg');
	background-position: bottom;
	background-repeat: no-repeat;
	background-size: cover;
	position: fixed;
	top: 0;
	left: 0;
	z-index: -10;
	height: 100%;
	width: 100%;
`;

export const PokedexScreen = styled.div`
	position: fixed;
	background-image: url('/rotom_cropped.png');
	background-size: 100% 100vh;
	max-width: 750px;
	height: 100vh;
	width: 100%;
	z-index: 10;
	pointer-events: none;
`;

export const PokedexScreenContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-flow: wrap;
	align-items: center;
	justify-content: center;
	background-color: salmon;
	min-height: 100vh;

	padding-top: 250px;
	padding-left: 50px;
	padding-right: 50px;
	padding-bottom: 120px;
	max-width: 750px;
	width: 100%;

	${CardSquare} {
		margin: 5px;
		cursor: pointer;
	}
`;
