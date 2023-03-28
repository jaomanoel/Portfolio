import React from "react";

import SocialMedia from "../../ui/components/navigation/SocialMedia/SocialMedia";
import TextField from "../../ui/components/surface/TextField/TextField";

import bgHome from "../../assets/images/home/home-desktop.png";

function Home() {
    return (
        <>
            <head>
                <title>Joao Manoel - Home</title>
            </head>
            <div className="container-view bg-bg mt-40 pb-30 md:pb-0 md:mt-30 h-full 2xl:h-[80vh] relative mx-12 md:mx-0">
                <div className="centralizador-col-center justify-end">
                    <div className="centralizador-col-center md:flex-row-reverse md:centralizador-row-between justify-end md:justify-between">
                        <div className="content-img-home bg-transparent md:-mt-10 2xl:-mt-20 md:w-[620px] md:h-[415px] 2xl:w-[633px] 2xl:h-[422px]">
                            <div className="md:hidden w-full h-full absolute bg-gradient-to-b from-transparent to-black"></div>
                            {/*
                                <picture>
                                    <source
                                        className="w-full h-full md:w-[540px] md:h-[340px] 2xl:w-[633px] 2xl:h-[422px]"
                                        media="(min-width: 768px)"
                                        srcset={ImgDesktop}
                                        type="image/jpg"
                                    />
                                    <img
                                        className="w-full h-full md:w-[540px] md:h-[340px] 2xl:w-[633px] 2xl:h-[422px]"
                                        src={ImgMobile}
                                        alt=""
                                    />
                                </picture>
                            */}

                            <img
                                className="md:w-[540px] md:h-[340px] 2xl:w-[700px] 2xl:h-[500px]"
                                src={bgHome}
                                alt="Joao Manoel"
                            />
                        </div>

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
                                <a
                                    href="https://wa.me/message/3RBRQY4FYXPKB1"
                                    target={"_blank"}
                                    className="flex items-center justify-center w-full h-48 bg-bg-dark-02 rounded-lg hover:bg-blue"
                                >
                                    <p className="text-white text-xl">
                                        Contratar
                                    </p>
                                </a>
                                
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
