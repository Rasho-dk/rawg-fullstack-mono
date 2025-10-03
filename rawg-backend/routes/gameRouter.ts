import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Games } from "../entities/Games";
import { Genres } from "../entities/Genres";
import { ParentPlatforms } from "../entities/ParentPlatforms";
import { Stores } from "../entities/Stores";

// interface for response data structure expected by the frontend
interface ModifiedGame {
  id: number;
  name: string;
  background_image?: string;
  metacritic?: number;
  parent_platforms: { platform: ParentPlatforms }[];
  genres: Genres[];
  stores: Stores[];
}


interface Response {
  count: number;
  results: ModifiedGame[];
}

const gameRouter = Router();
const gameRepository = AppDataSource.getRepository(Games);

gameRouter.get("/", async (req, res) => {
  try {
    // Using QueryBuilder to fetch games along with their relations - genres, stores, and parent platforms
    const queryBuilder = gameRepository
      .createQueryBuilder("game")
      .leftJoinAndSelect("game.genres", "genres")
      .leftJoinAndSelect("game.stores", "stores")
      .leftJoinAndSelect("game.parent_platforms", "parent_platforms");

    const games = await queryBuilder.getMany();

    // Transforming the data to match the expected response structure
    const modifiedGames: ModifiedGame[] = games.map((game) => ({
      ...game,
      parent_platforms: game.parent_platforms?.map((pp) => ({ platform: pp })),
    }));

    // Constructing the final response object
    const response: Response = {
      count: games.length,
      results: modifiedGames,
    };
    res.send(response); // Sending the response back to the client
  } catch (error) {
    console.error("Error fetching games:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

export default gameRouter;
