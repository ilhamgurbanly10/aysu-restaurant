import { BackToTopBtn } from '../components/Buttons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Head from '../components/Head';
import FlashProgress from '../components/flash/Progress';
import { useEffect, useState } from 'react';
import { endProgress } from '../components/flash/Progress';

const Layout = (props) => {

  const [isLoaded, setIsLoaded] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
      setIsLoaded(true);
  }, []);

  useEffect(() => {
      if (isLoaded) { endProgress(); }
  }, [isLoaded]);

  return (
    <>  
      <Head/>
      <FlashProgress/>
      <Header/>
      {props.children}
      <BackToTopBtn/>
      <Footer/>
    </>
  )
};

export default Layout;