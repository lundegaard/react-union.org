import React from 'react';
import { FaGithub, FaTwitter, FaFacebook } from 'react-icons/lib/fa';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	max-width: 100%;
`;

const UserIcon = styled.a`
	margin-left: 25px;
	color: white;
	&:hover {
		color: rgba(0, 0, 0, 0.2);
		border-bottom: none;
	}
`;

const iconStyle = {
	width: '20px',
	height: '20px',
};

const UserLinks = () => (
	<Container className="user-links">
		<UserIcon href="https://github.com/lundegaard/react-union">
			<FaGithub style={iconStyle} />
		</UserIcon>
		<UserIcon href="https://twitter.com/lundegaardjerry">
			<FaTwitter style={iconStyle} />
		</UserIcon>
		<UserIcon href="https://www.facebook.com/lundegaard/">
			<FaFacebook style={iconStyle} />
		</UserIcon>
	</Container>
);

export default UserLinks;
