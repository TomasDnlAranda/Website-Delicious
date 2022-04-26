import React from 'react';
import Pages from './pages/Pages';
import { themeLight } from './components/Theme';
import { ThemeProvider } from 'styled-components';

const App = () => {
	return (
		<>
			<ThemeProvider theme={themeLight}>
				<Pages />
			</ThemeProvider>
		</>
	);
};

export default App;
