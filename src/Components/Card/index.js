import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardImage, CardSquare, CardName } from './styled';
export default class Card extends Component {
	render() {
		const { image, name, onClick } = this.props;
		return (
			<CardSquare onClick={onClick}>
				<CardImage src={image || '/loading.gif'} alt={name} />
				<CardName>{name}</CardName>
			</CardSquare>
		);
	}
}
Card.propTypes = {
	image: PropTypes.string,
	name: PropTypes.string,
	onClick: PropTypes.func,
};
Card.defaultProps = {
	image: '/loading.gif',
	onClick: () => {},
};
