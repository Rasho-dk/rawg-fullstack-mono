import type { Game } from "../types/game";

import useData from "@/hooks/use-data";
import type { Genre } from "@/types/game";

const useGames = (selectedGenre?: Genre | null) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
      },
    },
    [selectedGenre],
  );
  return { games: data, error, isLoading };
};

export default useGames;
