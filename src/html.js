/* eslint-disable import/no-webpack-loader-syntax, import/no-unresolved, react/no-danger*/
import React from 'react';
import PropTypes from 'prop-types';
import favicon from './favicon.png';

let inlinedStyles = '';
if (process.env.NODE_ENV === 'production') {
	try {
		inlinedStyles = require('!raw-loader!../public/styles.css');
	} catch (e) {
		console.log(e);
	}
}

const HTML = ({ body, headComponents, postBodyComponents }) => {
	let css;
	if (process.env.NODE_ENV === 'production') {
		css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: inlinedStyles }} />;
	}
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta
					name="google-site-verification"
					content="T9MEmlqShYeiWc0Ki18pTcdEWidi11Yfti2Z4ClrgM0"
				/>
				{headComponents}
				<link rel="shortcut icon" href={favicon} />
				{css}
			</head>
			<body>
				<div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
				{postBodyComponents}
			</body>
		</html>
	);
};

HTML.propTypes = {
	body: PropTypes.string,
	headComponents: PropTypes.node,
	postBodyComponents: PropTypes.node,
};

export default HTML;
