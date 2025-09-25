import { useState } from "react";

import { Button, Container, For, Heading, VStack } from "@chakra-ui/react";

import GenreItem from "../components/custom/GenreItem";
import GenreSkeleton from "../components/custom/GenreSkeleton";
import useGenres from "../hooks/use-genres";
import type { Genre } from "../types/game";

interface props {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: props) => {
  const { data: genres, error } = useGenres();
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedGenres = isExpanded ? genres : genres.slice(0, 5);

  const skeletons = [...Array(20).keys()];

  return (
    <>
      <Button variant="ghost" onClick={() => onSelectGenre(null)}>
        <Heading fontSize="md" margin={1} p={2}>
          Genres
        </Heading>
      </Button>
      <Container>
        <VStack alignItems="start"  p={2}>
          <For
            each={displayedGenres}
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
                color={
                  genre.id === selectedGenre?.id
                    ? "yellow.600"
                    : "whiteAlpha.800"
                }
                _hover={{ color: "yellow.100" }}
              >
                <GenreItem genre={genre} />
              </Button>
            )}
          </For>
          {genres.length > 5 && (
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show Less" : "Show More"}
            </Button>
          )}
        </VStack>
        {error && <p>Error: {error}</p>}
      </Container>
    </>
  );
};

export default GenreList;
