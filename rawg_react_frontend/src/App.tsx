import { Grid, GridItem } from '@chakra-ui/react'
import NavBar from '@/pages/NavBar'
import GameGrid from '@/pages/GameGrid' 

import './App.css'

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      >
        <GridItem area={'nav'}>
          <NavBar />
        </GridItem>
        {/* <GridItem display={{base: 'none', lg: `block`}} area={'aside'}>
          <GenreList/>
        </GridItem> */}
        <GridItem area={'main'}>
          <GameGrid/>
        </GridItem>
      </Grid>
  )
}

export default App
