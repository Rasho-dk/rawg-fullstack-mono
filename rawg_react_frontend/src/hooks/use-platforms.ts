import useData from "./generic-function/use-data";

import { type Platform } from "@/types/game";

const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatforms;
