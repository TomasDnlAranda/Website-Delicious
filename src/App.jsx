import React from 'react';
import Pages from './pages/Pages';
import { themeLight } from './components/Theme';
import { ThemeProvider } from 'styled-components';
import Category from './components/Category';
import Search from './components/Search';
import Logo from './components/Logo';

const App = () => {
	return (
		<>
			<ThemeProvider theme={themeLight}>
				<Logo />
				<Search />
				<Category />
				<Pages />
			</ThemeProvider>
		</>
	);
};

export default App;
