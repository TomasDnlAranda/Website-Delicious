import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

const Grid = styled.div`
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

const Searched = () => {
	const key = 'a4d88c03894e426095f328ff476206d0';
	const [searchedRecipes, setSearchedRecipes] = useState([]);
	const { search } = useParams();

	useEffect(() => {
		getCuinse(search);
	}, [search]);

	const getCuinse = async (name) => {
		const data = await fetch(
			`https://api.spoonacular.com/recipes/random?apiKey=${key}&number=9&tags=${name}`
		);
		const recipes = await data.json();
		setSearchedRecipes(recipes.recipes);
	};

	return (
		<Grid>
			{searchedRecipes.map((item) => (
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

export default Searched;
