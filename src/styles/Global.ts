import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Nunito, sans-serif;
    }
    
    a { 
        text-decoration: none
    } 

    li {
        list-style-type: none
    }
    html {
        background-color: #2C3032;
    }
`;

export default GlobalStyle;
