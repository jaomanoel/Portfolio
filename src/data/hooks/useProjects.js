import { useState } from "react";

// Skills
import Html from "../../assets/icons/files/html.svg";
import Js from "../../assets/icons/files/js.svg";
import typeScript from "../../assets/icons/files/type-script.svg";
import React from "../../assets/icons/files/react.svg";
import Css from "../../assets/icons/files/css.svg";
import java from "../../assets/icons/files/java.svg";

// Mockups desktops
import digitalBusinessDesktop from "../../assets/images/projects/digitalbusiness-desktop.png";
import loopstudiosDesktop from "../../assets/images/projects/loopstudios-desktop.png";
import travelDesktop from "../../assets/images/projects/travel-desktop.png";
import dsdeliverDesktop from "../../assets/images/projects/dsdeliver-desktop.png";
import blogrDesktop from "../../assets/images/projects/blogr-desktop.png";
import easybankDesktop from "../../assets/images/projects/easybank-desktop.png";

// Mockups mobile
import digitalBusinessMobile from "../../assets/images/projects/digitalbusiness-mobile.png";
import loopstudiosMobile from "../../assets/images/projects/loopstudios-mobile.png";
import travelMobile from "../../assets/images/projects/travel-mobile.png";
import dsdeliverMobile from "../../assets/images/projects/dsdeliver-mobile.png";
import blogrMobile from "../../assets/images/projects/blogr-mobile.png";
import easybankMobile from "../../assets/images/projects/easybank-mobile.png";

export function useProjects() {
    const [projects, setProjects] = useState([
        {
            name: "Digital Business",
            imgDesktop: digitalBusinessDesktop,
            imgMobile: digitalBusinessMobile,
            desc: "Landing page utilizada para a captação de leads, com o objetivo de levar seus negócios físicos para o digital através de um site ou aplicativo móvel. Foi utilizado o framework Next.js junto com TailwindCSS.",
            link_git: "https://github.com/jaomanoel/Digital-Business",
            link_site: "https://digital-business.website/",
            icons: [React, typeScript],
        },
        {
            name: "Blogr",
            imgDesktop: blogrDesktop,
            imgMobile: blogrMobile,
            desc: "Consiste em um projeto do Frontend Mentor, que se trata de uma landing page sobre múltiplas publicações em diferentes plataformas, como mobile, desktop e laptop.",
            link_git: "https://github.com/jaomanoel/landing-page-blogr",
            link_site: "https://jaomanoel.github.io/landing-page-blogr/",
            icons: [React, typeScript],
        },
        {
            name: "Easybank",
            imgDesktop: easybankDesktop,
            imgMobile: easybankMobile,
            desc: "Trata-se de um projeto do Frontend Mentor que consiste em uma landing page de um banco digital. Foi utilizado o framework Next.js juntamente com o TailwindCSS para desenvolver o site.",
            link_git: "https://github.com/jaomanoel/easybank",
            link_site: "https://easybank-7asiv1w20-noel6666.vercel.app/",
            icons: [React, typeScript],
        },
        {
            name: "Ds-Deliver",
            imgDesktop: dsdeliverDesktop,
            imgMobile: dsdeliverMobile,
            desc: "Trata-se de um projeto focado em simular um delivery. Possui um frontend web em React, um backend em Java com Spring e uma versão mobile em React Native. No projeto, é possível fazer o pedido pelo site e o entregador recebe no celular as informações para efetuar a entrega, com ajuda do Google Maps.",
            link_git: "https://github.com/jaomanoel/ds-deliver",
            link_site: "https://ds-deliver.vercel.app/",
            icons: [React, typeScript, java],
        },
        {
            name: "Loopstudios",
            imgDesktop: loopstudiosDesktop,
            imgMobile: loopstudiosMobile,
            desc: "Trata-se de uma landing page sobre um óculos de realidade virtual. Para a realização do projeto, foram utilizadas as tecnologias React e Tailwind CSS. A página faz parte de um desafio do Frontend Mentor.",
            link_git: "https://github.com/jaomanoel/loopstudios",
            link_site: "https://jaomanoel.github.io/loopstudios/",
            icons: [React, Js],
        },
        {
            name: "Travel",
            imgDesktop: travelDesktop,
            imgMobile: travelMobile,
            desc: "Trata-se de um projeto que simula um template de um site de viagens. Foi utilizado o React para a estruturação do site, e o projeto faz parte do site W3.CSS.",
            link_git: "https://github.com/jaomanoel/travel-project",
            link_site: "https://jaomanoel.github.io/travel-project/",
            icons: [React, typeScript],
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
