import { useState } from "react";

import "./App.css";
import type { Genre } from "./hooks/use-genres";
import { Grid, GridItem } from "@chakra-ui/react";

import GameGrid from "@/pages/GameGrid";
import GenreList from "@/pages/GenreList";
import NavBar from "@/pages/NavBar";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem display={{ base: "none", lg: `block` }} area={"aside"}>
        <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
      </GridItem>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
