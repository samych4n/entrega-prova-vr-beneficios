import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PokemonList from './pokemon-react/PokemonList';
import PokemonShow from './pokemon-react/PokemonShow';

export default function Routes({ children }) {
	return (
		<BrowserRouter>
			{children}
			<Switch>
				<Route path="/list/:gen" exact component={PokemonList} />
				<Route path="/pokemon/:id" component={PokemonShow} />
				<Route path="/" component={() => <Redirect to="/list/1" />} />
			</Switch>
		</BrowserRouter>
	);
}
