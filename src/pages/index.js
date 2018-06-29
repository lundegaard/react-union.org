import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const IndexHeadContainer = styled.div`
	background: ${props => props.theme.brand};
	padding: ${props => props.theme.sitePadding};
	text-align: center;
`;

const Hero = styled.div`
	padding: 50px 0;
	& > h1 {
		font-weight: 600;
	}
`;

const BodyContainer = styled.div`
	padding: ${props => props.theme.sitePadding};
	max-width: ${props => props.theme.contentWidthLaptop};
	margin: 0 auto;

	.contributors {
		max-width: 400px;
		margin: 100px auto 0;
	}
`;

const ButtonContainer = styled.div`
	border: 1px solid ${props => props.theme.brand};
	background: ${props => props.theme.brand};
	color: white;
	border-radius: 3px;
	padding: 25px;
	font-size: 2rem;
	display: inline-block;
`;

const Index = () => (
	<div className="index-container">
		<Helmet title="react-union" />
		<main>
			<IndexHeadContainer>
				<Navigation />
				<Hero>
					<img src="/logos/logo-1024.png" width="150px" alt="" />
					<h1>react-union</h1>
					<h4>TODO description</h4>
				</Hero>
			</IndexHeadContainer>
			<BodyContainer>
				<p>Marketing stuff</p>
				<Link to="/docs">
					<ButtonContainer>Get Started</ButtonContainer>
				</Link>
			</BodyContainer>
			<Footer />
		</main>
	</div>
);

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
	query IndexQuery {
		allMarkdown: allMarkdownRemark(limit: 2000) {
			edges {
				node {
					fields {
						slug
					}
					excerpt
					timeToRead
					frontmatter {
						title
					}
				}
			}
		}
	}
`;
