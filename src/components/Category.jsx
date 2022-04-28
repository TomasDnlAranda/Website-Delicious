import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	margin: 1rem auto;

	@media only screen and (min-width: 700px) {
		width: 60vw;
		margin: 3rem auto;
	}
`;

const SLink = styled(NavLink)`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	flex-direction: column;
	text-decoration: none;
	background: ${(props) => props.theme.bg_icons};
	width: 4rem;
	height: 4rem;
	cursor: pointer;
	transform: scale(0.8);

	h4 {
		color: ${(props) => props.theme.light};
		font-size: 0.5rem;
		margin: 0.25rem;
	}
	svg {
		color: ${(props) => props.theme.light};
		font-size: 1.15rem;
	}

	&.active {
		background: ${(props) => props.theme.active};
	}

	@media only screen and (min-width: 400px) {
		width: 5rem;
		height: 5rem;
		svg {
			color: ${(props) => props.theme.light};
			font-size: 1.25rem;
		}
	}

	@media only screen and (min-width: 700px) {
		width: 7rem;
		height: 7rem;
		h4 {
			color: ${(props) => props.theme.light};
			font-size: 0.75rem;
			margin: 0.25rem;
		}
		svg {
			color: ${(props) => props.theme.light};
			font-size: 1.5rem;
		}
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
