import * as fs from "fs";
import { AppDataSource } from "./data-soruce";
import { Games } from "./output/entities/Games";
import { Genres } from "./output/entities/Genres";
import { ParentPlatforms } from "./output/entities/ParentPlatforms";
import { Stores } from "./output/entities/Stores";

// Define the structure of the original game data as it appears in games.json

interface GameOriginal {
  id: number;
  name: string;
  background_image?: string;
  metacritic?: number;
  parent_platforms: { platform: ParentPlatforms }[];
  genres: Genres[];
  stores: { store: Stores }[];
}

async function insertData() {
  await AppDataSource.initialize(); // Initialize the data source connection

  //get data from games.json and parse it:
  const rawData = fs.readFileSync("games.json", "utf-8");
  console.log("games.json file read successfully", rawData.slice(0, 100), "...");
  const parsedData = JSON.parse(rawData);
  const gamesOriginalData: GameOriginal[] = parsedData.results;
  console.log(gamesOriginalData.length , " games found in JSON file");
  // Transform the original data to match the Game entity structure
 const gamesData: Games[] = gamesOriginalData.map((game) => ({
  ...game,
  parentPlatforms: game.parent_platforms.map((pp) => pp.platform) ,
  stores: game.stores.map((s) => s.store),
}));
  console.log(gamesData.length , " games ready for insertion");

  // Get repositories for each entity
  const gameRepo = AppDataSource.getRepository(Games);
  const genreRepo = AppDataSource.getRepository(Genres);
  const parentPlatformRepo = AppDataSource.getRepository(ParentPlatforms);
  const storeRepo = AppDataSource.getRepository(Stores);

  //before inserting data, delete all existing data to avoid duplicates:
  await gameRepo.delete({});
  console.log("games deleted");
  await genreRepo.delete({});
  console.log("genres deleted");
  await parentPlatformRepo.delete({});
  console.log("parent platforms deleted");
  await storeRepo.delete({});
  console.log("stores deleted");

  //loop through each game and ensure related entities exist before saving the game
  for (const game of gamesData) {
    // Ensure related genres exist in the database, if not, create them
    await Promise.all(
      game.genres.map(async (g) => {
        let genre = await genreRepo.findOne({ where: { id: g.id } });
        if (!genre) {
          genre = await genreRepo.save(g);
          console.log(`Genre: ${g.name} created`);
        }
        return genre;
      })
    );

    // Ensure related parent platforms exist in the database, if not, create them
    await Promise.all(
      game.parentPlatforms.map(async (pp) => {
        let parentPlatform = await parentPlatformRepo.findOne({
          where: { id: pp.id },
        });
        if (!parentPlatform) {
          parentPlatform = await parentPlatformRepo.save(pp);
          console.log(`Parent Platform: ${pp.name} created`);
        }
        return parentPlatform;
      })
    );

    // Ensure related stores exist in the database, if not, create them
    await Promise.all(
      game.stores.map(async (s) => {
        let store = await storeRepo.findOne({ where: { id: s.id } });
        if (!store) {
          store = await storeRepo.save(s);
          console.log(`Store: ${s.name} created`);
        }
        return store;
      })
    );

    // Now save the game itself - it will also save the relationships in the join tables
    await gameRepo.save(game);
    console.log(`Game: ${game.name} created`);
  }
}

insertData()
  .then(() => {
    console.log("Data insertion completed.");

    AppDataSource.destroy(); // Close the data source connection
    process.exit(); // Exit the process
  })
  .catch((error) => {
    console.error("Error during data insertion:", error);
  });
