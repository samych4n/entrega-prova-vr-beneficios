/* eslint-disable no-undef */
import App from '../App';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { PokemonShowContainer } from '../pokemon-react/PokemonShow/styles';

import { Nome, Stats } from '../pokemon-react/PokemonShow/styles';
import {
	Stat,
	Type,
	Ability,
	Game,
	Sprite,
	Move,
} from '../pokemon-react/PokemonShow/component';
import toJson from 'enzyme-to-json';

const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
it('Showpage - Bulbassaur', async () => {
	const wrapper = mount(
		<MemoryRouter initialEntries={['/pokemon/1']}>
			<App />
		</MemoryRouter>
	);
	await new Promise(res => setTimeout(res, 1000));
	wrapper.update();
	expect(toJson(wrapper.find(PokemonShowContainer))).toMatchSnapshot();

	expect(wrapper.find(Nome)).toHaveLength(1);
	expect(
		wrapper
			.find(Nome)
			.at(0)
			.text()
	).toEqual('#1-bulbasaur');
	expect(wrapper.find(Stats)).toHaveLength(1);
	expect(wrapper.find(Stat)).toHaveLength(6);
	expect(wrapper.find(Type)).toHaveLength(1);
	expect(wrapper.find(Ability)).toHaveLength(1);
	expect(wrapper.find(Game)).toHaveLength(1);
	expect(wrapper.find(Move)).toHaveLength(1);
	expect(wrapper.find(Sprite)).toHaveLength(1);
});
