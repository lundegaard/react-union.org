import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Header from '../components/Header';
import versions from '../../content/versions';
import Seo from '../components/Seo';
import config from '../../siteConfig';

const History = () => (
	<div>
		<Helmet title={`versions | ${config.title}`} />
		<Seo ogUrl="history.html" />
		<BodyGrid>
			<HeaderContainer>
				<Header />
			</HeaderContainer>
			<BodyContainer>
				<h2>React Union versions</h2>
				{versions.history.map(version => (
					<a href={version.url} key={version.title} target="_blank">
						<h3>{version.title}</h3>
					</a>
				))}
			</BodyContainer>
		</BodyGrid>
	</div>
);

export default History;

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
