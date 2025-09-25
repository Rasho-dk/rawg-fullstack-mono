import { Flex, Image } from "@chakra-ui/react";

import logo from "../assets/logo.png";
import { ColorModeButton } from "../components/ui/color-mode";

const NavBar = () => {
  return (
    <Flex
      as="nav"
      justify="space-between"
      align="center"
      padding="1rem"
      bg="gray.100"
      boxShadow="sm"
    >
      <Image src={logo} alt="Logo" height="40px" />
      <ColorModeButton />
    </Flex>
  );
};

export default NavBar;
