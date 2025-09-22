import { Card, HStack, Heading, Image } from "@chakra-ui/react";

import CriticScore from "@/components/custom/CriticScore";
import PlatformIconsList from "@/components/custom/PlatformIconsList";
import getCroppedImageUrl from "@/services/image-url-handler";
import type { Game } from "@/types/game";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card.Root borderRadius={"md"} overflow="hidden">
      <Card.Header padding={0}>
        <Image
          src={getCroppedImageUrl(game.background_image)}
          objectFit={"contain"}
          borderTopRadius={{ base: "md" }}
        />
      </Card.Header>
      <Card.Body>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading>{game.name}</Heading>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
