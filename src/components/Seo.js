import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import config from '../../siteConfig';

const Seo = ({ ogUrl }) => {
	return (
		<Helmet>
			<meta property="og:type" content="website" />
			<meta property="og:title" content={config.title} />
			<meta property="og:description" content={config.description} />

			<meta property="og:image" content={`${config.siteUrl}/og_img.png`} />
			<meta property="og:url" content={`${config.siteUrl}/${ogUrl}`} />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:site" content="@LundegaardJerry" />
			<meta name="twitter:title" content={config.title} />
			<meta name="twitter:description" content={config.description} />
			<meta name="twitter:image" content={`${config.siteUrl}/og_img.png`} />
		</Helmet>
	);
};

Seo.propTypes = {
	ogUrl: PropTypes.string,
};

export default Seo;
