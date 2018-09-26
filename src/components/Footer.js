import React from 'react';
import Link from 'gatsby-link';
import { Box, Flex } from 'grid-styled';
import versions from '../../content/versions';

const SiteContainer = Flex.extend`
	text-align: center;
	background: ${props => props.theme.darkGrey};
	color: ${props => props.theme.lightGrey};
	padding: 32px;
`;

const Footer = () => (
	<SiteContainer>
		<Box width={1}>
			MIT Licensed | Copyright © 2017-present Lundegaard a. s. |{' '}
			<Link to="/history">{versions.current}</Link>
		</Box>
	</SiteContainer>
);

export default Footer;
