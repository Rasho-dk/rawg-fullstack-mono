import { Router } from "express";
import { AppDataSource } from "../data-source";
import { Genres } from "../entities/Genres";

interface Response {
  count: number;
  results: Genres[];
}

const genreRouter = Router();

const genreRepository = AppDataSource.getRepository(Genres);

//GET all genres
genreRouter.get("/", async (req, res) => {
  try {
    const genres = await genreRepository.find();
    const response: Response = {
      count: genres.length,
      results: genres,
    };
    res.send(response);
  } catch (error) {
    console.error("Error fetching genres:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

export default genreRouter;
