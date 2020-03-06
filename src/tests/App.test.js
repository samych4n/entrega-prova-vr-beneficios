/* eslint-disable no-undef */
import React from 'react';
import App from '../App';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import PokemonList from '../pokemon-react/PokemonList';
import Header from '../pokemon-react/Header';
import PokemonShow from '../pokemon-react/PokemonShow';

const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });

it('Homepage', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/list/1']}>
			<App />
		</MemoryRouter>
	);

	expect(wrapper.find(Header)).toHaveLength(1);
	expect(wrapper.find(PokemonList)).toHaveLength(1);
	expect(wrapper.find(PokemonShow)).toHaveLength(0);
});

it('Showpage', () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/pokemon/1']}>
			<App />
		</MemoryRouter>
	);
	expect(wrapper.find(Header)).toHaveLength(1);
	expect(wrapper.find(PokemonShow)).toHaveLength(1);
	expect(wrapper.find(PokemonList)).toHaveLength(0);
});
