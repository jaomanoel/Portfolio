import { useState } from "react";

import Git from "../../assets/icons/files/git.svg";
import Html from "../../assets/icons/files/html.svg";
import Node from "../../assets/icons/files/node.svg";
import Vite from "../../assets/icons/files/vite.svg";

export function useFileHome() {
    const [files, setFiles] = useState([
        {
            icon: Git,
            name: ".gitattributes",
        },
        {
            icon: Git,
            name: ".gitgnore",
        },
        {
            icon: Html,
            name: "index.html",
        },
        {
            icon: Node,
            name: "package-lock.json",
        },
        {
            icon: Node,
            name: "package.json",
        },
        {
            icon: Vite,
            name: "vite.config.js",
        },
    ]);

    return files;
}
