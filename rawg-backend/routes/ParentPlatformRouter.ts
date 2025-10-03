import { Router } from "express";
import { AppDataSource } from "../data-source";
import { ParentPlatforms } from "../entities/ParentPlatforms";

interface Response {
  count: number;
  results: ParentPlatforms[];
}

const parentPlatformRouter = Router();

const parentPlatformRepository = AppDataSource.getRepository(ParentPlatforms);

//GET all parent platforms
parentPlatformRouter.get("/", async (req, res) => {
  try {
    const parentPlatforms = await parentPlatformRepository.find();
    const response: Response = {
      count: parentPlatforms.length,
      results: parentPlatforms,
    };
    res.send(response);
  } catch (error) {
    console.error("Error fetching parent platforms:", error);
    res.status(500).send({ error: "Internal server error" });
  }
});

export default parentPlatformRouter;
