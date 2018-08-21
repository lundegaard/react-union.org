import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { __, map, prop, compose } from 'ramda';
import { toKebabCase } from 'ramda-extension';

const TOCWrapper = styled.div`
	padding: ${props => props.theme.sitePadding};
	padding-left: 0;
	margin: 0;

	a {
		margin: 0;
		color: #000;
		display: block;
	}

	a:hover {
		text-decoration: none;
		border-bottom: none;
		color: ${props => props.theme.brand};
	}
`;

const StyledSectionList = styled.ol`
	list-style: none;
	margin: 0;
`;

const EntryTitle = styled.h6`
	display: inline-block;
	margin: 0;
	line-height: 1.5;
	text-decoration: none;
`;

const SectionListItem = styled.li`
	margin: 0;
	padding-left: ${props => props.theme.sitePadding};
`;

const EntryListItem = styled.li`
	margin: 0;

	a {
		padding: 0.25rem 0;
		padding-left: ${props => props.theme.sitePadding};
	}

	a.active {
		border-left: 8px solid ${props => props.theme.brand};
		color: ${props => props.theme.brand};

		h1,
		h2,
		h3,
		h4,
		h5,
		h6 {
			font-weight: bold;
		}
	}
`;

const ChapterTitle = styled.h5`
	font-weight: ${({ level }) => {
		switch (level % 3) {
			case 1:
				return '400';
			case 2:
				return '200';
			default:
				return '200';
		}
	}};
	font-size: ${({ level }) => {
		switch (level % 3) {
			case 1:
				return '1.414rem';
			case 2:
				return '1rem';
			default:
				return '1rem';
		}
	}};
	color: ${({ level, theme }) => {
		switch (level % 3) {
			case 1:
				return 'black';
			case 2:
				return theme.accent;
			default:
				return theme.brand;
		}
	}};
	margin: 16px 0 8px 0;
`;

const renderSections = (main, subsections) =>
	map(
		({ slug, title }) => (
			<StyledSectionList key={slug}>
				<SectionListItem>
					<ChapterTitle level={1}>{title}</ChapterTitle>
				</SectionListItem>
				{compose(
					map(({ title, slug }) => (
						<EntryListItem key={slug}>
							<Link to={slug} className="link" activeClassName="active">
								<EntryTitle>{title}</EntryTitle>
							</Link>
						</EntryListItem>
					)),
					prop(__, subsections),
					toKebabCase
				)(title)}
			</StyledSectionList>
		),
		main
	);

const TableOfContents = ({ sections: { main, ...subsections } }) => (
	<TOCWrapper>{renderSections(main, subsections)}</TOCWrapper>
);

TableOfContents.propTypes = {
	sections: PropTypes.objectOf(
		PropTypes.arrayOf(
			PropTypes.shape({
				title: PropTypes.string,
				slug: PropTypes.string,
			})
		)
	),
};

export default TableOfContents;
