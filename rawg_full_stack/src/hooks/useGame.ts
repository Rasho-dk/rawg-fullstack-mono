import useData from "@/hooks/useData"
import type { Game } from '../types/game'; 


const useGame = () =>  useData<Game>('/games')

export default useGame
