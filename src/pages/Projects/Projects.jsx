import React from "react";
import { useProjects } from "../../data/hooks/useProjects";

const Projects = () => {
    const projects = useProjects();

    return (
        <>
            <head>
                <title>Joao Manoel - Projetos</title>
            </head>
            <div
                className={`container-view px-16 md:px-0 mt-30 h-[77vh] 2xl:h-[80vh] bg-local bg-center bg-no-repeat bg-[url('../.././assets/images/projects/textfield.svg')]`}
            >
                <div className="centralizador-col-center relative justify-start">
                    <div className="flex z-10 flex-col items-start w-full gap-4 md:flex-row md:justify-between">
                        <h2 className="font-bold text-4xl text-white">
                            Projetos
                        </h2>
                    </div>

                    <div className="flex z-10 flex-wrap gap-20 justify-start md:justify-between">
                        {projects.getProjects().map((project, index) => (
                            <div
                                key={index + 1}
                                className="w-[36rem] 2xl:md:w-413"
                            >
                                <div className="w-full border-2 p-16 md:p-30 md:pt-12 border-solid border-bg-dark-03 rounded-lg">
                                    <div className="flex items-center pb-[5px] justify-between">
                                        <h3 className="text-base md:text-2xl text-neutral">
                                            // {project.name}
                                        </h3>

                                        <div className="flex items-center gap-4">
                                            {project.icons.map(
                                                (item, index) => (
                                                    <img
                                                        className="w-30 h-30"
                                                        key={index}
                                                        src={item}
                                                        alt="React"
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <picture className="w-full flex items-center justify-center">
                                        <source
                                            media="(min-width: 768px)"
                                            srcset={project.imgDesktop}
                                            type="image/png"
                                        />
                                        <img
                                            className="w-[15rem] md:w-[29.6rem] 2xl:w-[35.3rem] h-[15rem] md:h-[15rem] 2xl:h-[16.6rem]"
                                            src={project.imgMobile}
                                            alt={project.name}
                                        />
                                    </picture>
                                </div>

                                <p className="pt-4 text-sm opacity-80 md:text-base font-saira text-white">
                                    {project.desc}
                                </p>

                                <div className="flex items-center justify-center pt-12 gap-20">
                                    {project.link_site && (
                                        <a
                                            className={`h-38 ${
                                                project.link_git
                                                    ? "w-2/4"
                                                    : "w-full"
                                            } hover:bg-blue transition-all bg-bg-dark-03 text-white flex items-center justify-center
                                    text-sm md:text-base rounded-lg`}
                                            href={project.link_site}
                                            target="_blank"
                                        >
                                            Ver Site
                                        </a>
                                    )}

                                    {project.link_git && (
                                        <a
                                            className={`h-38 ${
                                                project.link_site
                                                    ? "w-2/4"
                                                    : "w-full"
                                            } hover:bg-blue transition-all bg-bg-dark-03 text-white flex items-center justify-center
                                    text-sm md:text-base rounded-lg`}
                                            href={project.link_git}
                                            target="_blank"
                                        >
                                            Ver Codigo
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
