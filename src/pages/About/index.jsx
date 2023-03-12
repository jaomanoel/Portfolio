import React from "react";

import SocialMedia from "../../ui/components/navigation/SocialMedia/SocialMedia";
import TextField from "../../ui/components/surface/TextField/TextField";

function About() {
    return (
        <>
            <head>
                <title>Joao Manoel - Sobre</title>
            </head>
            <div className="container-view bg-bg mt-30 px-16 h-full">
                <div className="centralizador-col-between md:items-center md:centralizador-row-between md:flex-row h-full">
                    <div className="w-2/4 flex h-full flex-col gap-30">
                        <div className="flex flex-col gap-16 md:flex-row md:justify-between w-full">
                            <h1 className="font-bold text-3xl text-white">
                                Sobre
                            </h1>
                            <SocialMedia />
                        </div>

                        <div className="flex items-center w-[90vw] md:w-full h-full gap-12 md:gap-24">
                            <div className="flex flex-col h-full justify-between">
                                <span className="font-bold text-5xl text-neutral">
                                    /*
                                </span>
                                <span className="font-bold text-5xl text-neutral">
                                    *\
                                </span>
                            </div>

                            <div className="flex flex-col items-center gap-12">
                                <p className="text-neutral md:text-xl text-base">
                                    Tenho 16 anos atualmente, estou no segundo
                                    ano do novo Ensino Médio e sou um entusiasta
                                    da área de Tecnologia da Informação (TI).
                                    Desde criança, sempre tive interesse em
                                    entender como os sistemas funcionam e como a
                                    tecnologia pode ajudar as pessoas.
                                </p>

                                <p className="text-neutral md:text-xl text-base">
                                    Há cerca de 1 ano e 6 meses, comecei meus
                                    estudos em programação e desenvolvimento de
                                    software. Atualmente, atuo como freelancer,
                                    desenvolvendo pequenos projetos e ampliando
                                    meus conhecimentos em linguagens de
                                    programação como Java, TypeScript e
                                    JavaScript.
                                </p>

                                <p className="text-neutral md:text-xl text-base">
                                    Tenho muita vontade de aprender mais e me
                                    manter atualizado com as novas tendências e
                                    tecnologias do mercado. Acredito que o
                                    aprendizado contínuo é fundamental para o
                                    sucesso na área de TI e estou sempre
                                    buscando novas oportunidades de aprendizado
                                    e desafios.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden w-2/4 md:flex items-end justify-center h-full -rotate-90 ">
                        <TextField Text={"Desenvolvedor front-end"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
