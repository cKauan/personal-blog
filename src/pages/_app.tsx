import { AppProps } from 'next/app';
import GlobalStyle from '../styles/Global';
import { ThemeProvider } from 'styled-components';

const theme = {
    primary: '#648dae',
    secondary: '#aa647b',
    error: '#d32f2f',
    warning: '#f57c00',
    info: '#1976d2',
    success: '#388e3c',
    dark: {
        primary: '#141414',
        secondary: '#202024',
        tertiary: '#2C3032',
        quaternary: '#636363',
        text: '#A2A2A3',
    },
};
export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
