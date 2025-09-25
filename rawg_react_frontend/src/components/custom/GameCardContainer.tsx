import { Box } from "@chakra-ui/react";

import type { Props as GameCardProps } from "../../types/game";

const GameCardContainer = ({ children, textAlign }: GameCardProps) => {
  return <Box textAlign={textAlign}>{children}</Box>;
};

export default GameCardContainer;
