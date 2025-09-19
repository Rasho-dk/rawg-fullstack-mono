import type { Platform } from "@/types/game"
import { HStack, For, Icon } from "@chakra-ui/react"
import type { IconType } from 'react-icons';
import { FaAndroid, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendoswitch  } from "react-icons/si";

const iconMap: Record<string, IconType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendoswitch,
    android: FaAndroid,
    ios: MdPhoneIphone
}

const PlatformIconsList = ({ platforms }: { platforms: Platform[] }) => {
    const getIcon = (slug: string): IconType | undefined => iconMap[slug];
    return (
        <HStack>
            <For each={platforms}>
                {(platform) => {
                    const IconComponent = getIcon(platform.slug);
                    if (!IconComponent) return null;
                    return <Icon as={IconComponent} key={platform.id} />;
                }}
            </For>
        </HStack>
    )
}

export default PlatformIconsList