import { useState } from "react";

import ReactIcon from "../../assets/icons/files/react.svg";
import Html from "../../assets/icons/files/html.svg";
import Css from "../../assets/icons/files/css.svg";
import Js from "../../assets/icons/files/js.svg";

export function useNav() {
    const [nav, setNav] = useState([
        {
            path: "/",
            name: "home.jsx",
            icon: ReactIcon,
            isSelected: true,
        },
        {
            path: "/about",
            name: "sobre.html",
            icon: Html,
            isSelected: false,
        },
        {
            path: "/contact",
            name: "contato.css",
            icon: Css,
            isSelected: false,
        },
        {
            path: "/projects",
            name: "projects.js",
            icon: Js,
            isSelected: false,
        },
    ]);

    return nav;
}
