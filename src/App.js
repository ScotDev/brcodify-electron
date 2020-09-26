import React from 'react';

import "./Custom.css"

import { ThemeProvider, Text, Box, CSSReset } from '@chakra-ui/core'

// import FormComponent from './components/Functional/FormComponent'
import FormComponentHooks from './components/Functional/FormComponentHooks'
import Credits from './components/Layout/Credits';

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <div className="App">

        <Box bg="gray.900" minHeight="100vh" display="flex" alignItems="center" justifyContent="center" flexDirection="column">
          <Text fontSize="5xl" color="cyan.50" mb={4}>BRCODIFY</Text>
          <Text fontSize="3xl" color="cyan.50" mb={6}>A simple barcode generator.</Text>

          {/* <FormComponent></FormComponent> */}
          <FormComponentHooks></FormComponentHooks>
          <Credits></Credits>
        </Box>
      </div>

    </ThemeProvider>

  );
}

export default App;
