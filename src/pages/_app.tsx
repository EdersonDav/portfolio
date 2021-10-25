import GlobalStyled from '../styles/global';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyled />
    </>
  );
}
export default MyApp;
