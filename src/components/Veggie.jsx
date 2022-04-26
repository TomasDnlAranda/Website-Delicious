import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Wrapper = styled.div`
	margin: 1rem;
	overflow: hidden;
`;

const Card = styled.div`
	min-height: 15rem;
	border-radius: 0.75rem;
	overflow: hidden;
	position: relative;
	margin: 0;
	padding: 1rem;
	p {
		position: absolute;
		z-index: 10;
		left: 50%;
		bottom: 0%;
		transform: translate(-50%, 0%);
		color: ${(props) => props.theme.light};
		width: 100%;
		text-align: center;
		font-weight: 600;
		font-size: 1rem;
		top: 120px;
		height: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		object-fit: cover;
		width: 100%;
		height: 250px;
	}
`;

const Gradiant = styled.div`
	z-index: 3;
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

const Veggie = () => {
	const key = 'd0c21a078f6a4395bd4c4ec9966f7e0d';
	const [veggie, setVeggie] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const check = localStorage.getItem('veggie');

		if (check) {
			setVeggie(JSON.parse(check));
		} else {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9&tags=vegetarian`
			);
			const data = await api.json();
			localStorage.setItem('veggie', JSON.stringify(data.recipes));
			setVeggie(data.recipes);
		}
	};

	return (
		<Wrapper>
			<h3>Our Vegeterian Picks</h3>
			<Splide options={{ perPage: 3, pagination: false, arrows: false, drag: 'free', gap: '2rem' }}>
				{veggie.map((item) => (
					<SplideSlide key={item.id}>
						<Card key={item.id}>
							<p>{item.title}</p>
							<img src={item.image} alt={item.title + item.id} />
						</Card>
						<Gradiant />
					</SplideSlide>
				))}
			</Splide>
		</Wrapper>
	);
};

export default Veggie;
