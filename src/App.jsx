import React from 'react';
import Pages from './pages/Pages';
import { themeLight } from './components/Theme';
import { ThemeProvider } from 'styled-components';
import Category from './components/Category';

const App = () => {
	return (
		<>
			<ThemeProvider theme={themeLight}>
				<Category />
				<Pages />
			</ThemeProvider>
		</>
	);
};

export default App;
