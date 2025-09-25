import { useState } from "react";

import {
  Button,
  For,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import useStores from "../hooks/use-stores";
import getCroppedImageUrl from "../services/image-url-handler";
import type { SelectedProps, Store } from "../types/game";

const StoreList = ({ selectedItem, onSelectItem }: SelectedProps<Store>) => {
  const { data: stores } = useStores();
  const getColorSchema = (selectedItem: Store | null, store: Store) => {
    return selectedItem?.id === store.id ? "yellow" : undefined;
  };
  const [isExpanded, setIsExpanded] = useState(false);
  const displayedStores = isExpanded ? stores : stores.slice(0, 5);

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => onSelectItem(null)}
        width="100%"
        fontSize="lg"
      >
        <Heading>Stores</Heading>
      </Button>
      <VStack alignItems="start" p={2}>
        <For each={displayedStores} fallback={<Text>No stores found.</Text>}>
          {(store) => (
            <HStack>
              <Image
                src={getCroppedImageUrl(store.image_background)}
                alt={store.name}
                borderRadius={8}
                boxSize="30px"
                objectFit="cover"
              />
              <Button
                onClick={() => onSelectItem(store)}
                variant="ghost" // changed from "link" to "ghost"
                fontSize={"lg"}
                colorScheme={getColorSchema(selectedItem, store)}
              >
                {store.name}
              </Button>
            </HStack>
          )}
        </For>
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          variant="outline"
          mt={2}
          width="100%"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </VStack>
    </>
  );
};

export default StoreList;
