import React from 'react';
import Routes from '../routes';
import Header from './Header';
import {
	PokedexContainer,
	PokedexScreen,
	PokedexScreenContainer,
	BackgroundFixed,
} from './styled';

export default function Pokemon() {
	return (
		<PokedexContainer>
			<BackgroundFixed />
			<PokedexScreen />
			<PokedexScreenContainer>
				<Routes>
					<Header />
				</Routes>
			</PokedexScreenContainer>
		</PokedexContainer>
	);
}
