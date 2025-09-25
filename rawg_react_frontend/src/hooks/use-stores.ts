import useData from "./generic-function/use-data";

import { type Store } from "../types/game";

const useStores = () => useData<Store>("/stores");

export default useStores;
