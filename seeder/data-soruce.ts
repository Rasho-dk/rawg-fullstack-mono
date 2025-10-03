import { DataSource } from "typeorm";
import { Games } from "./output/entities/Games";
import { Genres } from "./output/entities/Genres";
import { ParentPlatforms } from "./output/entities/ParentPlatforms";
import { Stores } from "./output/entities/Stores";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3307,
  username: "root",
  password: "admin",
  database: "rawgDatabase",
  synchronize: true, // in production, set to false
  logging: true,
  // entities: ["src/entity/**/*.ts"],
  entities: [Games, Genres, ParentPlatforms, Stores],
  // migrations: ["src/migration/**/*.ts"],
  // subscribers: ["src/subscriber/**/*.ts"],
});
