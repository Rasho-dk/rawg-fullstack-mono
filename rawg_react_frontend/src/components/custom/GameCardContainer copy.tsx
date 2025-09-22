import { Box } from "@chakra-ui/react";

import type { Props as GameCardProps } from "@/types/game";

const GameCardContainer = ({ children }: GameCardProps) => {
  return <Box>{children}</Box>;
};

export default GameCardContainer;
