import useData from "@/hooks/use-data"
import type { Game } from '../types/game'; 


const useGame = () =>  useData<Game>('/games')

export default useGame
