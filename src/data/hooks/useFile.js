import { useState } from "react";

import Pages from "../../assets/icons/explorer/folders/view.svg";
import Assets from "../../assets/icons/explorer/folders/assets.svg";
import React from "../../assets/icons/files/react.svg";

export function useFile() {
    const [files, setFiles] = useState([
        {
            icon: Pages,
            name: "pages",
            arrow: false,
            isArrow: true,
        },
        {
            icon: Assets,
            name: "assets",
            arrow: false,
            isArrow: true,
        },
        {
            icon: React,
            name: "App.jsx",
            arrow: false,
            isArrow: false,
        },
        {
            icon: React,
            name: "main.jsx",
            arrow: false,
            isArrow: false,
        },
    ]);

    return files;
}
