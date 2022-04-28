import styled from 'styled-components';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const FormStyle = styled.form`
	position: relative;
	width: 100%;
	background: ${(props) => props.theme.bg_icons};
	display: flex;
	position: relative;
	margin: 1rem auto 0;
	width: 30rem;
	align-items: center;
	border-radius: 1rem;

	input {
		border: none;
		background: ${(props) => props.theme.bg_icons};
		margin: 0 0.5rem;
		font-size: 1rem;
		color: ${(props) => props.theme.light};
		padding: 1rem 1rem;
		border-radius: 1rem;
		outline: none;
		flex-grow: 1;
	}

	svg {
		color: ${(props) => props.theme.light};
		margin-left: 0.5rem;
	}
`;

const Search = () => {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const submitHandler = (e) => {
		e.preventDefault();
		navigate('searched/' + input);
	};

	console.log(navigate);
	return (
		<FormStyle onSubmit={submitHandler}>
			<FaSearch />
			<input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
		</FormStyle>
	);
};

export default Search;
