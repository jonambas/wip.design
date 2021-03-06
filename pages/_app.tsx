import type { AppProps } from 'next/app';
import Theme from '@sweatpants/theme';
import Box from '@sweatpants/box';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  @font-face {
    font-family: 'Whyte-Inktrap';
    src: url('./ABCWhyteInktrap-Bold-Trial.woff2') format('woff2'),
      url('./ABCWhyteInktrap-Bold-Trial.woff') format('woff');
    font-weight: 800;
    font-style: bold;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme
      theme={{
        space: {
          0: '0rem',
          100: '0.25rem',
          200: '0.5rem',
          300: '0.75rem',
          400: '1rem',
          500: '1.5rem',
          600: '2rem',
          700: '3rem',
          800: '4rem',
          900: '6rem',
          1000: '8rem',
        },
        colors: {
          blue: '#0000FF',
          black: '#000',
        },
        fonts: {
          sans: "'Whyte-Inktrap', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif;",
          mono: "'PT Mono', 'SFMono-Regular', Monaco, Consolas, 'Lucida Console', monospace",
        },
      }}
    >
      <GlobalStyle />
      <Box m={['500', '600', '800']}>
        <Component {...pageProps} />
      </Box>
    </Theme>
  );
}

export default MyApp;
