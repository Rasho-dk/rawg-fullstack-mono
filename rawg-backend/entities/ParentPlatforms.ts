import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Games } from "./Games";

@Entity("parent_platforms", { schema: "rawgDatabase" })
export class ParentPlatforms {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", length: 255 })
  name: string;

  @Column("varchar", { name: "slug", length: 255 })
  slug: string;

  @ManyToMany(() => Games, (games) => games.parent_platforms)
  games: Games[];
}
