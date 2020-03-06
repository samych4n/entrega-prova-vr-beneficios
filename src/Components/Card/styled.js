import styled from 'styled-components';

export const CardSquare = styled.div`
	width: 200px;
	height: 200px;
`;

export const CardImage = styled.img`
	width: 150px;
	height: 150px;
	background-color: white;
	border-radius: 5px;
	margin-left: 25px;
	margin-right: 25px;
	margin-bottom: 10px;
	/* background-size: contain; */
	/* background-image: ${props => `url(${props.image})`}; */
`;

export const CardName = styled.div`
	border-radius: 15px;
	border: 8px solid #df1818;
	background-color: white;
	margin-left: 10px;
	width: 180px;
	height: 40px;
	font-size: 20px;
	font-weight: bold;
	text-transform: uppercase;
	text-align: center;
`;
