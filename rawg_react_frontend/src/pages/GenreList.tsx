import { Button, Container, For, VStack } from "@chakra-ui/react";

import GenreItem from "@/components/custom/GenreItem";
import GenreSkeleton from "@/components/custom/GenreSkeleton";
import useGenres from "@/hooks/use-genres";
import type { Genre } from "@/types/game";

interface props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: props) => {
  const { data: genres, error } = useGenres();
  const skeletons = [...Array(20).keys()];

  return (
    <Container>
      <VStack alignItems="start">
        <For
          each={genres}
          fallback={
            <For each={skeletons}>
              {(number) => <GenreSkeleton key={number} />}
            </For>
          }
        >
          {(genre) => (
            <Button
              key={genre.id}
              onClick={() => onSelectGenre(genre)}
              variant="ghost"
              width="100%"
              fontSize="lg"
              justifyContent="flex-start"
            >
              <GenreItem genre={genre} />
            </Button>
          )}
        </For>
      </VStack>
      {error && <p>Error: {error}</p>}
    </Container>
  );
};

export default GenreList;
