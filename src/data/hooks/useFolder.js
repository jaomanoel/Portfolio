import { useState } from "react";

import StoryBook from "../../assets/icons/explorer/folders/storybook.svg";
import NodeModules from "../../assets/icons/explorer/folders/nodemodules.svg";
import Public from "../../assets/icons/explorer/folders/public.svg";
import Src from "../../assets/icons/explorer/folders/src.svg";

export function useFolder() {
    const [folders, setFolders] = useState([
        {
            icon: StoryBook,
            name: ".storybook",
            arrow: false,
        },
        {
            icon: NodeModules,
            name: "node_modules",
            arrow: false,
        },
        {
            icon: Public,
            name: "public",
            arrow: false,
        },
        {
            icon: Src,
            name: "src",
            arrow: true,
        },
    ]);

    return folders;
}
