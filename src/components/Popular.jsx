import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
	margin: 1rem;
	overflow: hidden;
`;

const Card = styled.div`
	min-height: 25rem;
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
		height: 40%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 1rem;
		top: 95px;
	}
	img {
		border-radius: 2rem;
		position: absolute;
		left: 0;
		object-fit: cover;
		width: 250px;
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

const Popular = () => {
	const key = 'a4d88c03894e426095f328ff476206d0';
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const check = localStorage.getItem('popular');

		if (check) {
			setPopular(JSON.parse(check));
		} else {
			const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9`);
			const data = await api.json();
			localStorage.setItem('popular', JSON.stringify(data.recipes));
			setPopular(data.recipes);
		}
	};

	return (
		<>
			<Wrapper>
				<h3>Popular Picks</h3>
				<Splide
					options={{
						perPage: 4,
						pagination: false,
						arrows: false,
						drag: 'free',
						gap: '2rem',
						breakpoints: {
							500: {
								perPage: 1,
								drag: 'free',
								gap: '2rem',
								arrows: false,
								pagination: false,
							},
							700: {
								perPage: 2,
								drag: 'free',
								gap: '2rem',
								pagination: false,
							},
							1400: {
								perPage: 3,
								drag: 'free',
								gap: '2rem',
								pagination: false,
							},
							2500: {
								perPage: 5,
								drag: 'free',
								pagination: false,
								gap: '2rem',
							},
						},
					}}
				>
					{popular.map((item) => (
						<SplideSlide key={item.id}>
							<Link to={`/recipe/${item.id}`}>
								<Card key={item.id}>
									<p>{item.title}</p>
									<img src={item.image} alt={item.title + item.id} />
								</Card>
							</Link>
							<Gradiant />
						</SplideSlide>
					))}
				</Splide>
			</Wrapper>
		</>
	);
};

export default Popular;
