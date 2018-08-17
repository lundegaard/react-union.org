import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import UserLinks from './UserLinks';

const NavContainer = styled(Flex).attrs({
	width: [1],
	is: 'nav',
	justifyContent: 'space-between',
})`
	background: ${props => props.theme.brand};

	.nav-link {
		margin-left: 164px;
		font-weight: 200;
		color: #fff;
		line-height: 32px;
	}
`;

const Logo = styled(Link)`
	color: #fff;
	font-weight: bold;
	font-size: 1.2rem;
	line-height: 32px;
	margin-left: 8px;

	&:hover {
		text-decoration: none;
		border-bottom: none;
	}
`;

const LogoImage = styled.img.attrs({
	src: '/logos/logo-filled.svg',
	height: 32,
	width: 32,
	alt: 'Logo',
})`
	display: inline-block;
	vertical-align: middle;
	margin-right: 4px;
`;

const LogoText = styled.span`
	vertical-align: middle;
`;

const Navigation = () => (
	<NavContainer>
		<Flex is="section" alignItems="center">
			<Logo to="/">
				<LogoImage />
				<LogoText>React Union</LogoText>
			</Logo>

			<Link className="nav-link" to="/union-component-introduction">
				Documentation
			</Link>
		</Flex>
		<UserLinks />
	</NavContainer>
);

export default Navigation;
