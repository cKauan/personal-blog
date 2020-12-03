import { AppProps } from 'next/app';
import GlobalStyle from '../styles/Global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/Theme';
import PageNProgress from 'next-styled-nprogress';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <PageNProgress
                color="#F2A83B"
                showSpinner={true}
                height="5px"
            />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
