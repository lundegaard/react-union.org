const path = require('path');
const R = require('ramda');
const R_ = require('ramda-extension');

module.exports = ({ node, boundActionCreators, getNode }) => {
	const { createNodeField } = boundActionCreators;
	let newSlug;
	if (node.internal.type === 'MarkdownRemark') {
		const { frontmatter } = node;
		const { title, slug } = frontmatter;
		const fileNode = getNode(node.parent);
		const parsedFilePath = path.parse(fileNode.relativePath);
		if (slug) {
			newSlug = `/${R_.toKebabCase(slug)}`;
		}

		const section = R.split('/', parsedFilePath.dir)[1];
		if (title && section) {
			newSlug = `/${R_.toKebabCase(section)}-${R_.toKebabCase(title)}`;
			createNodeField({ node, name: 'section', value: section });
		} else if (title) {
			newSlug = `/${R_.toKebabCase(title)}`;
		} else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
			newSlug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
		} else if (parsedFilePath.dir === '') {
			newSlug = `/${parsedFilePath.name}/`;
		} else {
			newSlug = `/${parsedFilePath.dir}/`;
		}
		createNodeField({ node, name: 'slug', value: newSlug });
	}
};
