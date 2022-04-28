import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.div`
	display: flex;
	justify-content: center;
	margin: 2rem 0;
`;

const SLink = styled(NavLink)`
	display: flex;
	justify-content: center;
	margin: 2rem 0;
	align-items: center;
	border-radius: 50%;
	margin-right: 2rem;
	flex-direction: column;
	text-decoration: none;
	background: ${(props) => props.theme.bg_icons};
	width: 6rem;
	height: 6rem;
	cursor: pointer;
	transform: scale(0.8);

	h4 {
		color: ${(props) => props.theme.light};
		font-size: 0.8rem;
		margin: 0.25rem;
	}
	svg {
		color: ${(props) => props.theme.light};
		font-size: 1.5rem;
	}

	&.active {
		background: ${(props) => props.theme.active};
	}
`;
const Category = () => {
	return (
		<List>
			<SLink to="/cuisini/italian">
				<FaPizzaSlice />
				<h4>Italian</h4>
			</SLink>
			<SLink to="/cuisini/american">
				<FaHamburger />
				<h4>American</h4>
			</SLink>
			<SLink to="/cuisini/thai">
				<GiNoodles />
				<h4>Thai</h4>
			</SLink>
			<SLink to="/cuisini/japanese">
				<GiChopsticks />
				<h4>Japanese</h4>
			</SLink>
		</List>
	);
};

export default Category;
