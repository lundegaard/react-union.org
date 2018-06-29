import styled from 'styled-components';

const Button = styled.div`
	border: 1px solid ${props => (props.dark ? '#fff' : props.theme.brand)};
	background: ${props => (props.dark ? '#fff' : props.theme.brand)};
	color: ${props => (props.dark ? props.theme.brand : '#fff')};
	border-radius: 3px;
	padding: 1rem;
	font-size: 1.414rem;
	display: inline-block;
`;

export default Button;
