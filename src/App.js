import React, { useContext, useEffect, useState } from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Home } from './pages/Home';
import { theme, darkTheme } from './miscellaneous/theme';
import { ApplicationContext } from './context/AppContext';

import "@fontsource/poppins/400.css"
import "@fontsource/poppins/500.css"
import "@fontsource/poppins/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/poppins/900.css"

import { NavBar } from './components/NavBar';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact'
import { Footer } from './components/Footer';
import { Spinner } from './components/Spinner';

export const App = () => {

  const { darkMode } = useContext(ApplicationContext);
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    const timer = async() => {
      setShowSplashScreen(true)
      setTimeout(() => {
        setShowSplashScreen(false)
      }, 2500)
    }

    timer()
  }, [])

  return (
    <ChakraProvider theme={darkMode ? darkTheme : theme}>
      { showSplashScreen ? <Spinner/> : (
        <>
          <NavBar/>
          <>
            <Home/>
            <About/>
            <Portfolio/>
            <Contact/>
          </>
          <Footer/>        
        </>
      ) }

    </ChakraProvider>
  );
}
