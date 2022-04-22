import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	margin: 4rem 0rem;
`;

const Card = styled.div`
	min-height: 25rem;
	border-radius: 2rem;
	overflow: hidden;

	img {
		border-radius: 2rem;
	}
`;

const Popular = () => {
	const key = 'd0c21a078f6a4395bd4c4ec9966f7e0d';
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9`);
		const data = await api.json();
		setPopular(data.recipes);
	};

	return (
		<>
			{popular.map((item) => (
				<Wrapper key={item.id}>
					<h3>Popular Picks</h3>
					{popular.map((item) => (
						<Card key={item.id}>
							<p>{item.title}</p>
							<img src={item.image} alt={item.title + item.id} />
						</Card>
					))}
				</Wrapper>
			))}
		</>
	);
};

export default Popular;
