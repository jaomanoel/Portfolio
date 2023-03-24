import { useState } from "react";

// Skills
import Html from "../../assets/icons/files/html.svg";
import Js from "../../assets/icons/files/js.svg";
import React from "../../assets/icons/files/react.svg";
import Css from "../../assets/icons/files/css.svg";

// Mockups desktops
import microsoftDesktop from "../../assets/images/projects/microsoft-desktop.png";
import androidDesktop from "../../assets/images/projects/android-desktop.png";
import googleDesktop from "../../assets/images/projects/google-desktop.png";
import loopstudiosDesktop from "../../assets/images/projects/loopstudios-desktop.png";
import travelDesktop from "../../assets/images/projects/travel-desktop.png";
import dsdeliverDesktop from "../../assets/images/projects/dsdeliver-desktop.png";
import blogrDesktop from "../../assets/images/projects/blogr-desktop.png";

// Mockups mobile
import androidMobile from "../../assets/images/projects/android-mobile.png";
import googleMobile from "../../assets/images/projects/google-desktop.png";
import loopstudiosMobile from "../../assets/images/projects/loopstudios-mobile.png";
import travelMobile from "../../assets/images/projects/travel-mobile.png";
import dsdeliverMobile from "../../assets/images/projects/dsdeliver-mobile.png";
import blogrMobile from "../../assets/images/projects/blogr-mobile.png";

export function useProjects() {
    const [projects, setProjects] = useState([
        {
            name: "Project",
            imgDesktop: RedesSociais,
            imgMobile: RedesSociais,
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [Html, Css, React, Js],
        },
        {
            name: "Copia da Microsoft",
            imgDesktop: microsoftDesktop,
            imgMobile: microsoftDesktop,
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [Html, Css, Js],
        },
        {
            name: "Project",
            imgDesktop: IOS14,
            imgMobile: IOS14,
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [Html, Css, React, Js],
        },
        {
            name: "Project",
            imgDesktop: microsoftDesktop,
            imgMobile: microsoftDesktop,
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [Html, Css, React, Js],
        },
        {
            name: "Project",
            imgDesktop: Test,
            imgMobile: Test,
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [Html, Css, React, Js],
        },
        {
            name: "Project",
            imgDesktop: Test,
            imgMobile: Test,
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
