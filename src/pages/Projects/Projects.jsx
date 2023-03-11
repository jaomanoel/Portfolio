import React from "react";

import ReactIcon from "../../assets/icons/files/react.svg";

import TextField from "../../ui/components/surface/TextField/TextField";

const Projects = () => {
    return (
        <>
            <head>
                <title>Portfolio - Projects</title>
            </head>
            <div className="container-view px-16 m-30 h-[71vh] 2xl:h-[80vh]">
                <div className="centralizador-col-center justify-start ">
                    <div className="w-full hidden md:block absolute top-2/4 left-[8%] text-center rotate-[28deg]">
                        <TextField Text={"Desenvolvedor Full-Stack"} />
                    </div>

                    <div className="flex z-10 flex-col md:pb-20 items-center w-full gap-4 md:flex-row md:justify-between">
                        <h2 className="font-bold text-4xl text-white">
                            Projetos
                        </h2>
                        <a
                            className="h-48 bg-bg-dark-03 px-32 text-white flex items-center justify-center
                            text-xl rounded-lg md:px-40"
                            href="#"
                        >
                            Contratar
                        </a>
                    </div>

                    <div className="flex z-10 flex-wrap gap-20 justify-center md:justify-between">
                        <div className="w-288 md:w-413">
                            <div className="w-full border-2 p-16 md:p-30 md:pt-12 border-solid border-bg-dark-03 rounded-lg">
                                <div className="flex items-center pb-[5px] justify-between">
                                    <h3 className="text-base md:text-2xl text-neutral">
                                        // Projeto 1
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <img src={ReactIcon} alt="React" />
                                    </div>
                                </div>
                                <div className="w-[256px] md:w-[353px] h-[118px] md:h-[166px] bg-[#575757]"></div>
                            </div>
                            <p className="pt-4 text-sm opacity-80 md:text-base font-saira text-white">
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>

                            <div className="flex items-center justify-center pt-12 gap-20">
                                <a
                                    className="h-38 w-2/4 bg-bg-dark-03 text-white flex items-center justify-center
                                text-sm md:text-base rounded-lg"
                                    href="#"
                                >
                                    Ver Site
                                </a>

                                <a
                                    className="h-38 w-2/4 bg-bg-dark-03 text-white flex items-center justify-center
                                text-sm md:text-base rounded-lg"
                                    href="#"
                                >
                                    Ver Codigo
                                </a>
                            </div>
                        </div>

                        <div className="w-288 md:w-413">
                            <div className="w-full border-2 p-16 md:p-30 md:pt-12 border-solid border-bg-dark-03 rounded-lg">
                                <div className="flex items-center pb-[5px] justify-between">
                                    <h3 className="text-base md:text-2xl text-neutral">
                                        // Projeto 1
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <img src={ReactIcon} alt="React" />
                                    </div>
                                </div>
                                <div className="w-[256px] md:w-[353px] h-[118px] md:h-[166px] bg-[#575757]"></div>
                            </div>
                            <p className="pt-4 text-sm opacity-80 md:text-base font-saira text-white">
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>

                            <div className="flex items-center justify-center pt-12 gap-20">
                                <a
                                    className="h-38 w-2/4 bg-bg-dark-03 text-white flex items-center justify-center
                                text-sm md:text-base rounded-lg"
                                    href="#"
                                >
                                    Ver Site
                                </a>

                                <a
                                    className="h-38 w-2/4 bg-bg-dark-03 text-white flex items-center justify-center
                                text-sm md:text-base rounded-lg"
                                    href="#"
                                >
                                    Ver Codigo
                                </a>
                            </div>
                        </div>

                        <div className="w-288 md:w-413">
                            <div className="w-full border-2 p-16 md:p-30 md:pt-12 border-solid border-bg-dark-03 rounded-lg">
                                <div className="flex items-center pb-[5px] justify-between">
                                    <h3 className="text-base md:text-2xl text-neutral">
                                        // Projeto 1
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <img src={ReactIcon} alt="React" />
                                    </div>
                                </div>
                                <div className="w-[256px] md:w-[353px] h-[118px] md:h-[166px] bg-[#575757]"></div>
                            </div>
                            <p className="pt-4 text-sm opacity-80 md:text-base font-saira text-white">
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>

                            <div className="flex items-center justify-center pt-12 gap-20">
                                <a
                                    className="h-38 w-2/4 bg-bg-dark-03 text-white flex items-center justify-center
                                text-sm md:text-base rounded-lg"
                                    href="#"
                                >
                                    Ver Site
                                </a>

                                <a
                                    className="h-38 w-2/4 bg-bg-dark-03 text-white flex items-center justify-center
                                text-sm md:text-base rounded-lg"
                                    href="#"
                                >
                                    Ver Codigo
                                </a>
                            </div>
                        </div>

                        <div className="w-288 md:w-413">
                            <div className="w-full border-2 p-16 md:p-30 md:pt-12 border-solid border-bg-dark-03 rounded-lg">
                                <div className="flex items-center pb-[5px] justify-between">
                                    <h3 className="text-base md:text-2xl text-neutral">
                                        // Projeto 1
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <img src={ReactIcon} alt="React" />
                                    </div>
                                </div>
                                <div className="w-[256px] md:w-[353px] h-[118px] md:h-[166px] bg-[#575757]"></div>
                            </div>
                            <p className="pt-4 text-sm opacity-80 md:text-base font-saira text-white">
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>

                            <div className="flex items-center justify-center pt-12 gap-20">
                                <a
                                    className="h-38 w-2/4 bg-bg-dark-03 text-white flex items-center justify-center
                                text-sm md:text-base rounded-lg"
                                    href="#"
                                >
                                    Ver Site
                                </a>

                                <a
                                    className="h-38 w-2/4 bg-bg-dark-03 text-white flex items-center justify-center
                                text-sm md:text-base rounded-lg"
                                    href="#"
                                >
                                    Ver Codigo
                                </a>
                            </div>
                        </div>

                        <div className="w-288 md:w-413">
                            <div className="w-full border-2 p-16 md:p-30 md:pt-12 border-solid border-bg-dark-03 rounded-lg">
                                <div className="flex items-center pb-[5px] justify-between">
                                    <h3 className="text-base md:text-2xl text-neutral">
                                        // Projeto 1
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <img src={ReactIcon} alt="React" />
                                    </div>
                                </div>
                                <div className="w-[256px] md:w-[353px] h-[118px] md:h-[166px] bg-[#575757]"></div>
                            </div>
                            <p className="pt-4 text-sm opacity-80 md:text-base font-saira text-white">
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>

                            <div className="flex items-center justify-center pt-12 gap-20">
                                <a
                                    className="h-38 w-2/4 bg-bg-dark-03 text-white flex items-center justify-center
                                text-sm md:text-base rounded-lg"
                                    href="#"
                                >
                                    Ver Site
                                </a>

                                <a
                                    className="h-38 w-2/4 bg-bg-dark-03 text-white flex items-center justify-center
                                text-sm md:text-base rounded-lg"
                                    href="#"
                                >
                                    Ver Codigo
                                </a>
                            </div>
                        </div>

                        <div className="w-288 md:w-413">
                            <div className="w-full border-2 p-16 md:p-30 md:pt-12 border-solid border-bg-dark-03 rounded-lg">
                                <div className="flex items-center pb-[5px] justify-between">
                                    <h3 className="text-base md:text-2xl text-neutral">
                                        // Projeto 1
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <img src={ReactIcon} alt="React" />
                                    </div>
                                </div>
                                <div className="w-[256px] md:w-[353px] h-[118px] md:h-[166px] bg-[#575757]"></div>
                            </div>
                            <p className="pt-4 text-sm opacity-80 md:text-base font-saira text-white">
                                Amet minim mollit non deserunt ullamco est sit
                                aliqua dolor do amet sint. Velit officia
                                consequat duis enim velit mollit. Exercitation
                                veniam consequat sunt nostrud amet.
                            </p>

                            <div className="flex items-center justify-center pt-12 gap-20">
                                <a
                                    className="h-38 w-2/4 bg-bg-dark-03 text-white flex items-center justify-center
                                text-sm md:text-base rounded-lg"
                                    href="#"
                                >
                                    Ver Site
                                </a>

                                <a
                                    className="h-38 w-2/4 bg-bg-dark-03 text-white flex items-center justify-center
                                text-sm md:text-base rounded-lg"
                                    href="#"
                                >
                                    Ver Codigo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
