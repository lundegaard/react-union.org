const path = require('path');

module.exports = async({ graphql, boundActionCreators }) => {
	const { createPage } = boundActionCreators;

	const docsPage = path.resolve('src/templates/docs.js');
	const allMarkdown = await graphql(
		`
			{
				allMarkdownRemark {
					edges {
						node {
							fields {
								slug
							}
						}
					}
				}
			}
		`
	);

	if (allMarkdown.errors) {
		console.error(allMarkdown.errors);

		throw Error(allMarkdown.errors);
	}

	allMarkdown.data.allMarkdownRemark.edges.forEach(edge => {
		createPage({
			path: edge.node.fields.slug,
			component: docsPage,
			context: {
				slug: edge.node.fields.slug,
			},
		});
	});
};
