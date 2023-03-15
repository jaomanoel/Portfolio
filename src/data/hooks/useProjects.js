import { useState } from "react";

export function useProjects() {
    const [projects, setProjects] = useState([
        {
            name: "Project",
            img: "",
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [],
        },
        {
            name: "Project",
            img: "",
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [],
        },
        {
            name: "Project",
            img: "",
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [],
        },
        {
            name: "Project",
            img: "",
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [],
        },
        {
            name: "Project",
            img: "",
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [],
        },
        {
            name: "Project",
            img: "",
            desc: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
            link_git: "#",
            link_site: "#",
            icons: [],
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
