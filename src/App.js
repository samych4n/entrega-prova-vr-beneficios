import React from 'react';
import './styles/App.css';
import Pokemon from './pokemon-react';
import { Provider } from 'react-redux';
import store from './store';

function App() {
	return (
		<div className="App">
			<header className="App-header" />
			<Provider store={store}>
				<Pokemon />
			</Provider>
		</div>
	);
}

export default App;
