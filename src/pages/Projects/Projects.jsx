import React from "react";

import { useProjects } from "../../data/hooks/useProjects";

import TextField from "../../ui/components/surface/TextField/TextField";

const Projects = () => {
    const projects = useProjects();

    return (
        <>
            <head>
                <title>Joao Manoel - Projetos</title>
            </head>
            <div className="container-view px-16 md:px-0 mt-30 h-[77vh] 2xl:h-[80vh]">
                <div className="centralizador-col-center relative justify-start ">
                    <div className="absolute hidden md:block top-0 left-0 w-full h-full">
                        <div className="w-[105%] hidden md:block sticky top-[50%] left-[0%] text-center rotate-[28deg] -translate-y-2/4">
                            <TextField Text={"Desenvolvedor Full-Stack"} />
                        </div>
                    </div>

                    <div className="flex z-10 flex-col items-start w-full gap-4 md:flex-row md:justify-between">
                        <h2 className="font-bold text-4xl text-white">
                            Projetos
                        </h2>

                        <a
                            className="h-48 bg-bg-dark-03 px-32 transition-all text-white flex items-center justify-center
                            text-xl rounded-lg md:px-40 hover:bg-blue"
                            href="https://wa.me/message/3RBRQY4FYXPKB1"
                            target={"_blank"}
                        >
                            Contratar
                        </a>
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
                                            //{" "}
                                            {project.name + " " + (index + 1)}
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

                                    <picture>
                                        <source
                                            className="w-[32rem] md:w-[29.6rem] 2xl:w-[35.3rem] h-[15rem] md:h-[15rem] 2xl:h-[16.6rem]"
                                            media="(min-width: 768px)"
                                            srcset={project.imgDesktop}
                                            type="image/png"
                                        />
                                        <img
                                            className="w-[32rem] md:w-[29.6rem] 2xl:w-[35.3rem] h-[15rem] md:h-[15rem] 2xl:h-[16.6rem]"
                                            src={project.imgMobile}
                                            alt={project.name}
                                        />
                                    </picture>
                                </div>

                                <p className="pt-4 text-sm opacity-80 md:text-base font-saira text-white">
                                    {project.desc}
                                </p>

                                <div className="flex items-center justify-center pt-12 gap-20">
                                    <a
                                        className="h-38 w-2/4 hover:bg-blue transition-all bg-bg-dark-03 text-white flex items-center justify-center
                                    text-sm md:text-base rounded-lg"
                                        href={project.link_site}
                                    >
                                        Ver Site
                                    </a>

                                    <a
                                        className="h-38 w-2/4 hover:bg-blue transition-all bg-bg-dark-03 text-white flex items-center justify-center
                                    text-sm md:text-base rounded-lg"
                                        href={project.link_git}
                                    >
                                        Ver Codigo
                                    </a>
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
