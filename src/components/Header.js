import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const SiteContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: ${props => props.theme.brand};
	padding: 25px;
`;

const Header = () => (
	<SiteContainer>
		<Navigation />
	</SiteContainer>
);

export default Header;
