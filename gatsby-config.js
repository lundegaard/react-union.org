const { title, siteUrl } = require('./siteConfig');

module.exports = {
	// pathPrefix: config.pathPrefix,
	siteMetadata: {
		title,
		siteUrl,
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: ['crimson text:400, 400i, 700, 700i', 'space mono:400,700'],
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'docs',
				path: `${__dirname}/content/`,
			},
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 690,
						},
					},
					'gatsby-remark-responsive-iframe',
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-autolink-headers',
				],
			},
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: '#c62828',
			},
		},
		'gatsby-plugin-sharp',
		'gatsby-plugin-no-sourcemaps',
		'gatsby-plugin-catch-links',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-offline',
		{
			resolve: 'gatsby-plugin-gtag',
			options: {
				trackingId: 'UA-22469286-2',
			},
		},
	],
};
