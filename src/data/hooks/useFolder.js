import { useState } from "react";

import StoryBook from "../../assets/icons/explorer/folders/storybook.svg";
import StoryBookOpen from "../../assets/icons/explorer/folders/storybook-open.svg";
import NodeModules from "../../assets/icons/explorer/folders/nodemodules.svg";
import NodeModulesOpen from "../../assets/icons/explorer/folders/nodemodules-open.svg";
import Public from "../../assets/icons/explorer/folders/public.svg";
import PublicOpen from "../../assets/icons/explorer/folders/public-open.svg";
import Src from "../../assets/icons/explorer/folders/src.svg";
import SrcOpen from "../../assets/icons/explorer/folders/src-open.svg";

export function useFolder() {
    const [folders, setFolders] = useState([
        {
            icon: StoryBook,
            icon_open: StoryBookOpen,
            name: ".storybook",
            arrow: false,
        },
        {
            icon: NodeModules,
            icon_open: NodeModulesOpen,
            name: "node_modules",
            arrow: false,
        },
        {
            icon: Public,
            icon_open: PublicOpen,
            name: "public",
            arrow: false,
        },
        {
            icon: Src,
            icon_open: SrcOpen,
            name: "src",
            arrow: true,
        },
    ]);

    return folders;
}
