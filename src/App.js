import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Home } from './pages/Home';
import { theme } from './miscellaneous/theme';
import { AppContext } from './context/AppContext';

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

export const App = () => {

  return (
    <ChakraProvider theme={theme}>
      <AppContext>
        <NavBar/>
        <>
          <Home/>
          <About/>
          <Portfolio/>
          <Contact/>
        </>
        <Footer/>
      </AppContext>
    </ChakraProvider>
  );
}
