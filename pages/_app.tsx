import type { AppProps } from 'next/app';
import Theme from '@sweatpants/theme';
import { createGlobalStyle } from 'styled-components';
import CartProvider from '@context/cart';
import ToastProvider from '@context/toast';
import './fonts.css';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    font-family: 'Roboto Mono', 'SFMono-Regular', Monaco, Consolas, 'Lucida Console', monospace;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  p {
    line-height: 1.35em;
  }

  ::selection {
    background: #0000ff;
    color: #ffffff;
  }

  ::-moz-selection {
    background: #0000ff;
    color: #ffffff;
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
        sizes: {
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
          1000: '7rem',
        },
        fontSizes: {
          200: '0.5rem',
          300: '0.75rem',
          400: '1rem',
          500: '1.5rem',
          600: '2rem',
          1000: '4rem',
        },
        colors: {
          blue: '#0000FF',
          black: '#000',
          white: '#FFF',
          gray: '#CECBC8',
        },
        fonts: {
          sans: "'Whyte-Inktrap', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, Helvetica, sans-serif;",
          mono: "'Roboto Mono', 'SFMono-Regular', Monaco, Consolas, 'Lucida Console', monospace",
        },
        radii: {
          200: '20px',
          400: '35px',
          800: '75px',
        },
      }}
    >
      <GlobalStyle />
      <ToastProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </ToastProvider>
    </Theme>
  );
}

export default MyApp;
