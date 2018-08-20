import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import './css/index.css';
import './css/prism-darcula.css';
import theme from './theme';
import config from '../../siteConfig';

const MainLayout = ({ children }) => (
	<div>
		<Helmet title={config.title} />
		<ThemeProvider theme={theme}>{children()}</ThemeProvider>
	</div>
);

MainLayout.propTypes = {
	children: PropTypes.func,
};

export default MainLayout;
