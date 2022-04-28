import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { GiKnifeFork } from 'react-icons/gi';

const LogoComponent = styled.div`
	text-decoration: none;
	font-size: 1.5rem;
	font-weight: 400;
	font-family: 'Lobster Two', cursive;
	color: ${(props) => props.theme.dark};
`;

const Nav = styled(Link)`
	text-decoration: none;
	padding: 4rem 0;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	svg {
		font-size: 2rem;
	}
`;

const Logo = () => {
	return (
		<Nav to="/">
			<GiKnifeFork />
			<LogoComponent>Delicous</LogoComponent>
		</Nav>
	);
};

export default Logo;
