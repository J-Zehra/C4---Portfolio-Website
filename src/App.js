import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import { Home } from './pages/Home';
import { theme } from './miscellaneous/theme';
import { AppContext } from './context/AppContext';

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AppContext>
        <>
          <Home/>
        </>
      </AppContext>
    </ChakraProvider>
  );
}
