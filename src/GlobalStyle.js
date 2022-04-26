import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0 5%;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Chakra Petch', sans-serif;
}

h4 {
    font-size: 1rem;
    color: rgb(56,56,56);
}

h3 {
    font-size: 1.5rem;
    color: rgb(56,56,56);
    line-height: 2.5rem;
    margin: 2rem 0;
}
`;
