/* eslint-disable react/no-danger*/
import React from 'react';
import PropTypes from 'prop-types';
import { prop, pipe, path, o, contains, find } from 'ramda';

const edgesProp = prop('edges');
const nodeProp = prop('node');
const htmlProp = o(prop('html'), nodeProp);
const slugPath = o(path(['fields', 'slug']), nodeProp);

const findById = (examples, exampleId) =>
	pipe(
		edgesProp,
		find(o(contains(exampleId), slugPath)),
		htmlProp
	)(examples);

const LandingExample = ({ examples, exampleId }) => (
	<div dangerouslySetInnerHTML={{ __html: findById(examples, exampleId) }} />
);

LandingExample.propTypes = {
	exampleId: PropTypes.string,
	examples: PropTypes.object,
};

export default LandingExample;
