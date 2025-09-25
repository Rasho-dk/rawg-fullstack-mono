import useData from "@/hooks/generic-function/use-data";
import type { Game, GameQuery } from "@/types/game";

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        stores: gameQuery?.store?.id,
      },
    },
    [gameQuery],
  );
  return { games: data, error, isLoading };
};

export default useGames;
