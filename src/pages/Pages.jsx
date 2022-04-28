import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Cuisini from './Cuisini';
import Home from './Home';
import Recipes from './Recipes';
import Searched from './Searched';
import { AnimatePresence } from 'framer-motion';

const Pages = () => {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes location={location} key={location.pathname}>
				<Route index path="/" element={<Home />} />
				<Route path="/cuisini/:type" element={<Cuisini />} />
				<Route path="/searched/:search" element={<Searched />} />
				<Route path="/recipe/:name" element={<Recipes />} />
			</Routes>
		</AnimatePresence>
	);
};

export default Pages;
