import { useState } from "react";

import Html from "../../assets/icons/files/html.svg";
import Js from "../../assets/icons/files/js.svg";
import React from "../../assets/icons/files/react.svg";
import Css from "../../assets/icons/files/css.svg";

export function useProjects() {
    const [projects, setProjects] = useState([
        {
            name: "Project",
            img: "",
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [Html, Css, React, Js],
        },
        {
            name: "Project",
            img: "",
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [Html, Css, React, Js],
        },
        {
            name: "Project",
            img: "",
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [Html, Css, React, Js],
        },
        {
            name: "Project",
            img: "",
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [Html, Css, React, Js],
        },
        {
            name: "Project",
            img: "",
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [Html, Css, React, Js],
        },
        {
            name: "Project",
            img: "",
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [Html, Css, React, Js],
        },
    ]);

    function getProjects() {
        return projects;
    }

    function setProject(project) {
        setProjects(project);
    }

    return {
        getProjects,
        setProject,
    };
}
