import type { ReactNode } from "react";

import { Box } from "@chakra-ui/react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return <Box>{children}</Box>;
};

export default GameCardContainer;
