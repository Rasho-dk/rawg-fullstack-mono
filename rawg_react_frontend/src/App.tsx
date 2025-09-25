import { useState } from "react";

import { Grid, GridItem, Show } from "@chakra-ui/react";

import "./App.css";
import GameCardContainer from "./components/custom/GameCardContainer";
import CustomList from "./components/reusableComponents/CustomList";
import useGenres from "./hooks/use-genres";
import GameGrid from "./pages/GameGrid";
import NavBar from "./pages/NavBar";
import PlatformSelector from "./pages/PlatformSelector";
import StoreList from "./pages/StoreList";
import type { GameQuery } from "./types/game";
import GenreList from "./pages/GenreList";

function App() {
  /*
   * gameQuery holds all filter options (genre, platform, store, etc.)
   * setGameQuery updates only the changed filter, keeping others unchanged
   */
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem display={{ base: "none", lg: `block` }} area={"aside"}>
        <GenreList
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenre={gameQuery?.genre}
        />
        {/* <Show when={gameQuery.genre}>
          <CustomList
            title="Genres"
            useDataHook={useGenres}
            onSelectItem={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedItem={gameQuery?.genre}
          />
        </Show> */}
        <StoreList
          onSelectItem={(store) => setGameQuery({ ...gameQuery, store })}
          selectedItem={gameQuery?.store}
        />
      </GridItem>
      <GridItem area={"main"}>
        <GameCardContainer textAlign="left">
          <PlatformSelector
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery?.platform}
          />
        </GameCardContainer>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
