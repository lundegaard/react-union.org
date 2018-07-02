import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import versions from '../../content/versions.json';
import Footer from '../components/Footer';

const History = () => (
	<div>
		<Helmet>
			<title>versions | react-union</title>
		</Helmet>
		<Header />
		<h2>React Union versions</h2>
		{versions.history.map(version => (
			<a href={version.url} key={version.title} target="_blank">
				<h3>{version.title}</h3>
			</a>
		))}
		<Footer />
	</div>
);

export default History;
