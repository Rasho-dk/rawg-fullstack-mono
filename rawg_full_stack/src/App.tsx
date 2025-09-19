import { Grid, GridItem } from '@chakra-ui/react'

import './App.css'

function App() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
      <GridItem w="100%" h="10" bg="blue.500" />
    </Grid>
  );
}

export default App
