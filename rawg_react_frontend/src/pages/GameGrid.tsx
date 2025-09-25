import { For, SimpleGrid, Text } from "@chakra-ui/react";

import GameCard from "../components/custom/GameCard";
import GameCardContainer from "../components/custom/GameCardContainer";
import GameCardSkeleton from "../components/custom/GameCardSkeleton";
import useGames from "../hooks/use-games";
import type { GameQuery } from "../types/game";

interface props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: props) => {
  const { games, error, isLoading } = useGames(gameQuery);
  const skeletons = [...Array(20).keys()];

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={4} padding={2}>
      {isLoading ? (
        <For each={skeletons}>
          {(skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          )}
        </For>
      ) : (
        <For each={games} fallback={<Text>No games found.</Text>}>
          {(game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          )}
        </For>
      )}
      {error && <Text color={"red"}>Error: {error}</Text>}
    </SimpleGrid>
  );
};

export default GameGrid;
