import { type ReactNode } from "react";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  store: Store | null;
}
export interface SelectedProps<T> {
  selectedItem: T | null;
  onSelectItem: (item: T | null) => void;
}
export interface Store {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
export interface Props {
  children: ReactNode;
  textAlign?: "left" | "center" | "right";
}

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}
