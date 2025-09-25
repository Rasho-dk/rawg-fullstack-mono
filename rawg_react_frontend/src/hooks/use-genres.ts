import useData from "@/hooks/generic-function/use-data";
import type { Genre } from "@/types/game";

const useGenres = () => useData<Genre>("/genres");

export default useGenres;
