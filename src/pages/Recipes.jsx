import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailWrapper = styled.div`
	margin-top: 10rem;
	margin-bottom: 5rem;
	display: flex;
	.active {
		background: ${(props) => props.theme.bg_icons};
		color: ${(props) => props.theme.light};
	}

	h2 {
		margin-bottom: 2rem;
	}

	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}

	ul {
		margin-top: 2rem;
	}
`;

const Button = styled.button`
	padding: 1rem 2rem;
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.light};
	border: 2px solid ${(props) => props.theme.dark};
	margin-right: 2rem;
	font-weight: 600;
`;

const Info = styled.div`
	margin-left: 10rem;
`;

const Recipes = () => {
	const params = useParams();
	const [details, setDetails] = useState({});
	const [activeTab, setActiveTab] = useState('instructions');
	const key = 'a4d88c03894e426095f328ff476206d0';

	const fetchDetails = async (id) => {
		const api = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${key}`);
		const datailData = await api.json();
		setDetails(datailData);
	};

	useEffect(() => {
		fetchDetails(params.name);
	}, [params.name]);

	return (
		<DetailWrapper>
			<div>
				<h2>{details.title}</h2>
				<img src={details.image} alt={details.title} />
			</div>
			<Info>
				<Button
					className={activeTab === 'instructions' ? 'active' : ''}
					onClick={() => setActiveTab('instructions')}
				>
					Instructions
				</Button>
				<Button
					className={activeTab === 'ingredients' ? 'active' : ''}
					onClick={() => setActiveTab('ingredients')}
				>
					Ingredients
				</Button>
				{activeTab === 'instructions' ? (
					<div>
						<h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
						<h4 dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
					</div>
				) : null}
				{activeTab === 'ingredients' ? (
					<ul>
						{details.extendedIngredients.map((item) => (
							<li key={item.id}>{item.original}</li>
						))}
					</ul>
				) : null}
			</Info>
		</DetailWrapper>
	);
};

export default Recipes;
