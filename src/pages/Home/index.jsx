import React from "react";

import SocialMedia from "../../ui/components/navigation/SocialMedia/SocialMedia";
import TextField from "../../ui/components/surface/TextField/TextField";

import bgHome from "../../assets/images/home/joao.svg";

function Home() {
    return (
        <>
            <head>
                <title>Joao Manoel - Home</title>
            </head>
            <div className="container-view bg-bg mt-40 flex-row-reverse overflow-hidden md:mt-0 pb-30 md:pb-0 h-full relative mx-12 mr-0 md:mx-0">
                <img
                    className="absolute right-0 md:top-0 w-fit h-[63%] bottom-0 md:w-[667px] md:h-[1111px] lg:w-[625px] lg:h-[845px] 2xl:w-[783px] 2xl:h-[1025px]"
                    src={bgHome}
                    alt="Joao Manoel"
                />
                <div className="centralizador-col-center justify-end xl:pt-74">
                    <div className="centralizador-col-center md:flex-row md:centralizador-row-between justify-start md:justify-between">
                        <div className="z-10 flex flex-col gap-20">
                            <div>
                                <p className="text-xl text-white font-normal">
                                    Oi, eu sou
                                </p>
                                <h1 className="text-5xl 2xl:text-7xl text-blue leading-40px font-bold">
                                    João Manoel
                                </h1>
                                <p className="text-white font-bold text-2xl 2xl:text-3xl">
                                    Desenvolvedor full-stack
                                </p>
                            </div>

                            <div className="flex flex-col gap-12">
                                <div>
                                    <SocialMedia />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <TextField Text={"DESENVOLVEDOR WEB"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
