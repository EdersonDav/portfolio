import GlobalStyled from '../styles/global';
import type { AppProps } from 'next/app';
import { Header } from '../components/Header';
import { useState } from 'react';
import { OpenMenuButton } from '../components/OpenMenuButton';
import { Footer } from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenuMobile = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <OpenMenuButton toggleMenuMobile={toggleMenuMobile} isOpen={isOpen} />
      <Header toggleMenuMobile={toggleMenuMobile} isOpen={isOpen} />
      <Component {...pageProps} />
      <Footer/>
      <GlobalStyled />
    </>
  );
}
export default MyApp;
