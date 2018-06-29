import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { toLower } from 'ramda';

const TOCWrapper = styled.div`
	padding: ${props => props.theme.sitePadding};
	margin: 0;
`;

const StyledSectionList = styled.ol`
	list-style: none;
	margin: 0;
`;

const EntryTitle = styled.h6`
	display: inline-block;
	font-weight: 200;
	color: black;
	margin: 0;
	line-height: 1.5;
	border-bottom: 1px solid transparent;
	text-decoration: none;
`;

const SectionListItem = styled.li`
	margin: 0;
`;

const EntryListItem = styled.li`
	margin: 0;
	a:hover {
		border-bottom: 1px solid black;
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
	margin-bottom: 16px;
`;

const TableOfContents = ({ sections: { main, ...other } }) => (
	<TOCWrapper>
		{main.map(({ slug, title }) => (
			<StyledSectionList key={slug}>
				<SectionListItem>
					<Link to={slug}>
						<ChapterTitle level={1}>{title}</ChapterTitle>
					</Link>
				</SectionListItem>
				{other[toLower(title)] &&
					other[toLower(title)].map(({ title, slug }) => (
						<EntryListItem key={slug}>
							<Link to={slug}>
								<EntryTitle>{title}</EntryTitle>
							</Link>
						</EntryListItem>
					))}
			</StyledSectionList>
		))}
	</TOCWrapper>
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
