import React from "react";

import SocialMedia from "../../ui/components/navigation/SocialMedia/SocialMedia";
import textfield from "../../assets/images/about/textfield.svg";

function About() {
    return (
        <>
            <head>
                <title>Joao Manoel - Sobre</title>
            </head>
            <div className="container-view bg-bg mt-30 pl-16 h-[77vh] 2xl:h-[80vh]">
                <div className="centralizador-col-between md:items-center m-0 md:centralizador-row-between md:flex-row">
                    <div className="w-2/4 flex h-full flex-col gap-30">
                        <div className="flex flex-col gap-16 md:flex-row md:justify-between w-full">
                            <h1 className="font-bold text-3xl text-white">
                                Sobre
                            </h1>
                            <SocialMedia />
                        </div>

                        <div className="flex items-center w-[90vw] md:w-600 h-fit gap-12 md:gap-24">
                            <div className="flex flex-col h-full justify-between">
                                <span className="font-bold text-5xl text-neutral">
                                    /*
                                </span>
                                <span className="font-bold text-5xl text-neutral">
                                    *\
                                </span>
                            </div>

                            <div className="flex flex-col w-full py-60 items-center gap-12">
                                <p className="text-neutral md:text-xl w-full text-base">
                                    Olá, eu sou João Manoel, um jovem de 17 anos
                                    apaixonado por Tecnologia da Informação (TI)
                                    e em busca constante de conhecimento para
                                    aprimorar minhas habilidades. Atualmente,
                                    estou cursando o terceiro ano do novo Ensino
                                    Médio.
                                </p>

                                <p className="text-neutral md:text-xl w-full text-base">
                                    Há aproximadamente dois anos, iniciei minha
                                    jornada no mundo da programação e
                                    desenvolvimento de software, um caminho que
                                    tem se revelado incrivelmente empolgante.
                                    Neste momento, faço parte da equipe de
                                    desenvolvedores da Digital Business, onde
                                    tenho a oportunidade de trabalhar em
                                    projetos desafiadores e aprimorar minhas
                                    habilidades em linguagens como Java,
                                    TypeScript e JavaScript. Essa experiência
                                    tem sido fundamental para o meu crescimento
                                    profissional, proporcionando um ambiente
                                    dinâmico e repleto de aprendizado prático.
                                </p>

                                <p className="text-neutral md:text-xl w-full text-base">
                                    Acredito firmemente na importância do
                                    aprendizado contínuo na área de TI. Busco
                                    incessantemente por novas oportunidades que
                                    me permitam expandir meus horizontes, ficar
                                    atualizado com as últimas tendências e
                                    abraçar os desafios que impulsionam o meu
                                    crescimento profissional.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:flex items-baseline justify-end h-full ">
                        <img
                            className="w-200 md:h-600 2xl:h-[75rem]"
                            src={textfield}
                            alt="textfield"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
