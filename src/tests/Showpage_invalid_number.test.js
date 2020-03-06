/* eslint-disable no-undef */
import App from '../App';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import { PokemonShowContainer } from '../pokemon-react/PokemonShow/styles';

import { Stats } from '../pokemon-react/PokemonShow/styles';
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
		<MemoryRouter initialEntries={['/pokemon/2000']}>
			<App />
		</MemoryRouter>
	);
	await new Promise(res => setTimeout(res, 1000));
	wrapper.update();
	expect(toJson(wrapper.find(PokemonShowContainer))).toMatchSnapshot();

	expect(wrapper.find(Stats)).toHaveLength(0);
	expect(wrapper.find(Stat)).toHaveLength(0);
	expect(wrapper.find(Type)).toHaveLength(0);
	expect(wrapper.find(Ability)).toHaveLength(0);
	expect(wrapper.find(Game)).toHaveLength(0);
	expect(wrapper.find(Move)).toHaveLength(0);
	expect(wrapper.find(Sprite)).toHaveLength(0);
});
