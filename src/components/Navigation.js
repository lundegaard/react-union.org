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

const InlineFlex = styled(Flex).attrs({ is: 'span' })`
	display: inline-flex;
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

const Navigation = () => (
	<NavContainer>
		<Flex is="section" alignItems="center">
			<InlineFlex slignItems="center" justifyContent="space-between">
				<img src="/logos/logo-filled.svg" height="32px" alt="" />
				<Logo to="/">
					<span>React Union</span>
				</Logo>
			</InlineFlex>
			<Link className="nav-link" to="/docs">
				Documentation
			</Link>
		</Flex>
		<UserLinks />
	</NavContainer>
);

export default Navigation;
