import React from 'react';
import {
  Box,
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

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppContext>
        <NavBar/>
        <Box
          w={{
            base: '95%',
            sm: '90%',
            lg: '85%',
            xl: '80%',
            '2xl': '75%',
          }}
          margin='auto'
          pos='relative'
        >
          <Home/>
        </Box>
      </AppContext>
    </ChakraProvider>
  );
}
