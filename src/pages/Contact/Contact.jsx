import React from "react";

import TextField from "../../ui/components/surface/TextField/TextField";

const Contact = () => {
    return (
        <>
            <head>
                <title>Joao Manoel - Contato</title>
            </head>
            <div className="container-view h-full py-10 overflow-x-hidden w-[100%] bg-bg">
                <div className="centralizador-col-center md:flex-wrap md:flex-row gap-32 md:centralizador-row-between">
                    <div className="w-full md:hidden text-left">
                        <TextField Text={"DESENVOLVEDOR"} />
                    </div>

                    <div className="w-[58%] hidden md:flex">
                        <div className="text-left w-full">
                            <TextField Text={"DESENVOLVEDOR BACK-END"} />
                        </div>
                    </div>

                    <div className="flex flex-col max-w-[400px] w-2/4 items-center justify-center gap-16">
                        <h1 className="text-white text-4xl">Contato</h1>
                        <form className="flex items-center w-full flex-col gap-12">
                            <input
                                className="w-full focus:outline-none bg-white px-16 h-48 rounded-lg text-base"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nome: "
                            />

                            <input
                                className="w-full focus:outline-none bg-white px-16 h-48 rounded-lg text-base"
                                type="email"
                                name="email"
                                id="email"
                                placeholder="E-mail: "
                            />

                            <textarea
                                className="w-full focus:outline-none bg-white px-16 py-16 h-120 rounded-lg text-base"
                                name="message"
                                id="message"
                                cols="30"
                                rows="10"
                                placeholder="Sua mensagem:"
                            ></textarea>

                            <div className="flex gap-20">
                                <input
                                    type="Submit"
                                    value="Enviar"
                                    className="w-2/4 cursor-pointer h-48 px-16 py-8 bg-bg-dark-03 text-2xl rounded-lg text-white"
                                />

                                <input
                                    type="reset"
                                    value="Limpar"
                                    className="w-2/4 cursor-pointer h-48 px-16 py-8 bg-bg-dark-03 text-2xl rounded-lg text-white"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="md:hidden w-full text-right">
                        <TextField Text={"Back-end"} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
