import { Button, Menu, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import usePlatforms from "../hooks/use-platforms";
import type { Platform } from "../types/game";

interface props {
  onSelectedPlatform: (platform: Platform | null) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: props) => {
  const { data: parent_platforms, error } = usePlatforms();
  if (error) return null;

  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant="plain" size="lg">
            {selectedPlatform ? selectedPlatform.name : "Platforms"}
            <BsChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {selectedPlatform && (
                <Menu.Item
                  color="red"
                  onClick={() => onSelectedPlatform(null)}
                  value="new-txt-a"
                >
                  Clear
                </Menu.Item>
              )}
              {parent_platforms?.map((platform) => (
                <Menu.Item
                  key={platform.id}
                  onClick={() => onSelectedPlatform(platform)}
                  value="new-txt-a"
                >
                  {platform.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};

export default PlatformSelector;
