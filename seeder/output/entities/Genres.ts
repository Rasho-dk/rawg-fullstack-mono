import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Games } from "./Games";

@Entity("genres", { schema: "rawgDatabase" })
export class Genres {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "image_background", nullable: true, length: 255 })
  image_background?: string;

  @ManyToMany(() => Games, (games) => games.genres)
  games: Games[];
}
