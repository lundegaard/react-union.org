/* eslint-disable react/no-danger*/
import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import {
	map,
	pipe,
	prop,
	values,
	mergeAll,
	find,
	equals,
	groupBy,
	o,
	reject,
	isNil,
	sortBy,
	ifElse,
	over,
	view,
	lensProp,
	toLower,
	omit,
} from 'ramda';

import Header from '../components/Header';
import TableOfContents from '../components/TableOfContents';
import Seo from '../components/Seo';
import config from '../../siteConfig';

const sectionLens = lensProp('section');

const viewSection = view(sectionLens);

const normalizeSections = sections => {
	const normalizedStructure = o(
		reject(o(isNil, viewSection)),
		map(
			pipe(
				prop('node'),
				values,
				// since section can be in both objects, but value can have only one
				map(ifElse(o(isNil, viewSection), omit(['section']), over(sectionLens, toLower))),
				mergeAll
			)
		)
	)(sections);
	const bySection = val => find(o(equals, viewSection)(val), map(viewSection, normalizedStructure));
	return o(map(sortBy(prop('order'))), groupBy(bySection))(normalizedStructure);
};

const Docs = ({ data: { postBySlug, tableOfContents } }) => (
	<div>
		<Helmet title={`${postBySlug.frontmatter.title} | ${config.title}`} />
		<Seo ogUrl="union-component-introduction.html" />
		<BodyGrid>
			<HeaderContainer>
				<Header />
			</HeaderContainer>
			<ToCContainer>
				<TableOfContents sections={normalizeSections(tableOfContents.edges)} />
			</ToCContainer>
			<BodyContainer>
				<div>
					<h1>{postBySlug.frontmatter.title}</h1>
					<div dangerouslySetInnerHTML={{ __html: postBySlug.html }} />
				</div>
			</BodyContainer>
		</BodyGrid>
	</div>
);

Docs.propTypes = {
	data: PropTypes.shape({
		postBySlug: PropTypes.shape({
			frontmatter: PropTypes.shape({
				title: PropTypes.string,
			}),
			html: PropTypes.string,
		}),
		tableOfContents: PropTypes.shape({
			edges: PropTypes.arrayOf(
				PropTypes.shape({
					node: PropTypes.shape({
						fields: PropTypes.shape({
							slug: PropTypes.string,
						}),
						frontmatter: PropTypes.shape({
							title: PropTypes.string,
							order: PropTypes.number,
							section: PropTypes.string,
						}),
					}),
				})
			),
		}),
	}),
};

export default Docs;

const BodyGrid = styled.div`
	height: 100vh;
	display: grid;
	grid-template-rows: 75px 1fr;
	grid-template-columns: 300px 1fr;

	@media screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
		height: inherit;
	}
`;

const HeaderContainer = styled.div`
	grid-column: 1 / 3;
	grid-row: 1 / 2;
	z-index: 2;
	@media screen and (max-width: 600px) {
		order: 1;
	}
`;

const BodyContainer = styled.div`
	grid-column: 2 / 3;
	grid-row: 2 / 3;
	overflow: scroll;
	justify-self: center;
	width: 100%;
	padding: ${props => props.theme.sitePadding};
	@media screen and (max-width: 600px) {
		order: 2;
	}

	& > div {
		max-width: ${props => props.theme.contentWidthLaptop};
		margin: auto;
	}

	& > h1 {
		color: ${props => props.theme.accentDark};
	}
`;

const ToCContainer = styled.div`
	grid-column: 1 / 2;
	grid-row: 2 / 3;
	background: ${props => props.theme.lightGrey};
	overflow: scroll;
	@media screen and (max-width: 600px) {
		order: 3;
		overflow: inherit;
	}
`;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
	query LessonBySlug($slug: String!) {
		postBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			timeToRead
			excerpt
			frontmatter {
				title
			}
		}
		tableOfContents: allMarkdownRemark {
			edges {
				node {
					fields {
						slug
						section
					}
					frontmatter {
						title
						order
						section
					}
				}
			}
		}
	}
`;
