import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	grid-gap: 3rem;
`;

const Card = styled.div`
	img {
		width: 100%;
		border-radius: 2rem;
	}
	a {
		text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
	}
`;
const Cuisini = () => {
	const key = 'a4d88c03894e426095f328ff476206d0';
	const [cuisini, setCuisini] = useState([]);
	let params = useParams();

	useEffect(() => {
		getCuinse(params.type);
	}, [params.type]);

	const getCuinse = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&cuisine=${name}`
		);
		const recipes = await data.json();
		setCuisini(recipes.results);
	};

	return (
		<Grid
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5 }}
		>
			{cuisini.map((item) => (
				<Link to={`/recipe/${item.id}`} key={item.id}>
					<Card>
						<img src={item.image} alt={item.id} />
						<h4>{item.title}</h4>
					</Card>
				</Link>
			))}
		</Grid>
	);
};

export default Cuisini;
