import React from 'react';
import {
	StatsName,
	StatContainer,
	StatsBar,
	StatsValue,
	TypesContainer,
	Types,
	AbilitiesContainer,
	AbilitiesTitle,
	Abilities,
	GamesContainer,
	GamesNameContainer,
	GamesTitle,
	Games,
	SpritesContainer,
	SpritesGroupContainer,
	SpritesSexContainer,
	SpritesTitle,
	Sprites,
	MovesContainer,
	MovesNameContainer,
	MovesTitle,
	Moves,
} from './styles';

import { statColor, typeColor } from '../../configs/colors';
export function Stat({ name, value }) {
	return (
		<StatContainer>
			<StatsName>{name}</StatsName>
			<StatsValue>{value}</StatsValue>
			<StatsBar value={value} color={statColor[name] || '#FFFFFF'} />
		</StatContainer>
	);
}

export function Type({ types }) {
	return (
		<TypesContainer>
			{types
				.sort((a, b) => (a.slot < b.slot ? 1 : -1))
				.map(val => (
					<Types
						key={val.type.name}
						color={typeColor[val.type.name] || '#FFFFFF'}
					>
						{val.type.name}
					</Types>
				))}
		</TypesContainer>
	);
}

export function Ability({ abilities }) {
	return (
		<AbilitiesContainer>
			<AbilitiesTitle>Habilidades</AbilitiesTitle>
			{abilities.map(ability => (
				<Abilities
					key={ability.ability.name}
					is_hidden={ability.is_hidden}
				>
					{ability.ability.name}
				</Abilities>
			))}
		</AbilitiesContainer>
	);
}

export function Game({ games }) {
	const gamesInfo = games
		.map(game => ({
			...game,
			id_game: /https:\/\/pokeapi.co\/api\/v2\/version\/([0-9]*)\//.exec(
				game.version.url
			)[1],
		}))
		.sort((a, b) => a.id_game - b.id_game);
	return (
		<GamesContainer>
			<GamesTitle>Jogos</GamesTitle>
			<GamesNameContainer>
				{gamesInfo.map(game => (
					<Games key={game.id_game}>{game.version.name}</Games>
				))}
			</GamesNameContainer>
		</GamesContainer>
	);
}

export function Sprite({ sprites }) {
	return (
		<SpritesContainer>
			<SpritesTitle>Sprites</SpritesTitle>
			<SpritesSexContainer>
				<SpritesGroupContainer>
					<Sprites src={sprites.front_default} />
					<Sprites src={sprites.back_default} />
				</SpritesGroupContainer>
				<SpritesGroupContainer>
					<Sprites src={sprites.front_shiny} />
					<Sprites src={sprites.back_shiny} />
				</SpritesGroupContainer>
			</SpritesSexContainer>
			{sprites.front_female && (
				<SpritesSexContainer>
					<SpritesGroupContainer>
						<Sprites src={sprites.front_female} />
						<Sprites src={sprites.back_female} />
					</SpritesGroupContainer>
					<SpritesGroupContainer>
						<Sprites src={sprites.front_shiny_female} />
						<Sprites src={sprites.back_shiny_female} />
					</SpritesGroupContainer>
				</SpritesSexContainer>
			)}
		</SpritesContainer>
	);
}

export function Move({ moves }) {
	return (
		<MovesContainer>
			<MovesTitle>Moves</MovesTitle>
			<MovesNameContainer>
				{moves.map(move => (
					<Moves key={move.move.name}>{move.move.name}</Moves>
				))}
			</MovesNameContainer>
		</MovesContainer>
	);
}
