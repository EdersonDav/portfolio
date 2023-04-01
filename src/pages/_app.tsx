import GlobalStyled from '../styles/global';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { useState } from 'react';
import { OpenMenuButton } from '../components/OpenMenuButton';

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toogleMenuMobile = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <OpenMenuButton toogleMenuMobile={toogleMenuMobile} isOpen={isOpen} />
      <Header toogleMenuMobile={toogleMenuMobile} isOpen={isOpen} />
      <Component {...pageProps} />
      <GlobalStyled />
    </>
  );
}
export default MyApp;
