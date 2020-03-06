import styled from 'styled-components';

export const GenContainer = styled.div`
	display: flex;
	flex-direction: row;
	flex-flow: wrap;
	align-items: center;
	justify-content: center;
	min-width: 100%;
	margin-bottom: 80px;
`;

export const GenTextContainer = styled.div`
	border-radius: 15px;
	border: 8px solid #df1818;
	background-color: white;
	margin: 5px;

	width: 250px;
	height: 40px;
	font-size: 20px;
	font-weight: bold;
	text-transform: uppercase;
	text-align: center;
	cursor: pointer;
`;
