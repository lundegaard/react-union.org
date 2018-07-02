import React from 'react';
import Link from 'gatsby-link';
import versions from '../../content/versions.json';

const Footer = () => (
	<div>
		Copyright © 2018 Lundegaard
		<Link to="/history">{versions.actual}</Link>
	</div>
);

export default Footer;
