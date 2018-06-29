import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import Navigation from '../components/Navigation';
import HeroLogo from '../components/HeroLogo';
import Footer from '../components/Footer';
import Button from '../components/Button';

const IndexHeadContainer = styled.div`
	background: ${props => props.theme.brand};
	padding: ${props => props.theme.sitePadding};
	text-align: center;
`;

const Hero = styled.div`
	padding: 50px 0;
	color: ${props => props.theme.lightGrey};
	& > h1 {
		font-weight: 400;
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
const Divider = styled.div`
	border-bottom: 1px solid ${props => props.theme.lightGrey};
	width: 100%;
	margin: 8px 0;
`;

const Perex = styled.h4`
	margin-top: 0;
	letter-spacing: 12px;
	font-weight: 200 !important;
`;

const HeroLogoWrapper = styled.section`
	width: 450px;
	margin: 0 auto;
`;

const Index = () => (
	<div className="index-container">
		<Helmet title="React Union" />
		<main>
			<IndexHeadContainer>
				<Navigation />
				<Hero>
					<HeroLogoWrapper>
						<HeroLogo />
					</HeroLogoWrapper>
					<Perex>React for CMSs and Portals</Perex>
					<Link to="/docs">
						<Button dark>Get started →</Button>
					</Link>
				</Hero>
			</IndexHeadContainer>
			<BodyContainer>
				<Flex>
					<Box width={[1 / 3]}>
						<h2>&lt;Union /&gt;</h2>
						<p>Assemble React application from distributed HTML segments into one Virtual Dom.</p>
						<p>
							Use Hot Module Reloading or one Redux store across within environement of your
							favourite CMS.
						</p>
					</Box>
					<Box width={[1 / 3]}>
						<h2>Union Scripts</h2>
						<p>Use Zero config SDK targetting Large Apps.</p>
					</Box>
					<Box width={[1 / 3]}>
						<h2>Boilerplates</h2>
						<p>Setup quickly your project with our boilerplates.</p>
					</Box>
				</Flex>
				<Divider />
				<Box>What next?</Box>
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
