import React, { useState } from "react";
import sendEmail from "../../data/hooks/useContact";
import TextField from "../../ui/components/surface/TextField/TextField";
import textfield from "../../assets/images/contact/textfield.svg";

const Contact = () => {
    const [name, setName] = useState(""),
        [email, setEmail] = useState(""),
        [desc, setDesc] = useState(""),
        [messageAlert, setMessageAlert] = useState({
            message: "",
            style: "",
        });

    const handleClear = (e) => {
        e.preventDefault();

        setName("");
        setEmail("");
        setDesc("");
    };

    const handleForm = (e) => {
        e.preventDefault();
        var emailRegex =
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

        var response = { message: "", style: "text-red-700" };

        if (name === "" || email === "" || desc === "") {
            response.message = "Por favor, preencha todos os campos.";
            setMessageAlert(response);
            return;
        }

        if (!emailRegex.test(email)) {
            response.message =
                "Certifique-se de inserir um endereço de e-mail válido.";
            setMessageAlert(response);
            return;
        }

        const send = sendEmail(name, email, desc);

        if (send) {
            response.message = "Mensagem enviada com sucesso!";
            response.style = "text-green-700";
            setMessageAlert(response);
        } else {
            response.message =
                "Infelizmente, não foi possível enviar o e-mail. Por favor, tente novamente mais tarde.";
            setMessageAlert(response);
        }

        handleClear();
    };

    return (
        <>
            <head>
                <title>João Manoel - Contato</title>
            </head>
            <div className="container-view h-[82vh] 2xl:h-[80vh] py-10 overflow-hidden w-[100%] bg-bg">
                <div className="centralizador-col-center md:flex-wrap md:flex-row gap-32 md:centralizador-row-between">
                    <div className="w-full md:hidden text-left">
                        <TextField Text={"DESENVOLVEDOR"} />
                    </div>

                    <div className="hidden md:flex items-baseline justify-end h-full ">
                        <img
                            className="w-full h-full"
                            src={textfield}
                            alt="textfield"
                        />
                    </div>

                    <div className="flex flex-col max-w-[400px] w-full md:w-2/4 items-center justify-center gap-16">
                        <h1 className="text-white text-4xl">Contato</h1>
                        {messageAlert.message !== "" && (
                            <p
                                className={`font-bold font-saira text-base ${messageAlert.style}`}
                            >
                                {messageAlert.message}
                            </p>
                        )}
                        <form
                            className="flex items-center w-full flex-col gap-12"
                            onSubmit={handleForm}
                        >
                            <input
                                className="w-full focus:outline-none bg-white px-16 h-48 rounded-lg text-base"
                                type="text"
                                name="name"
                                onChange={(v) => setName(v.target.value)}
                                id="name"
                                value={name}
                                placeholder="Nome: "
                            />

                            <input
                                className="w-full focus:outline-none bg-white px-16 h-48 rounded-lg text-base"
                                type="email"
                                name="email"
                                id="email"
                                onChange={(v) => setEmail(v.target.value)}
                                value={email}
                                placeholder="E-mail: "
                            />

                            <textarea
                                className="w-full focus:outline-none bg-white px-16 py-16 h-120 rounded-lg text-base"
                                name="message"
                                id="message"
                                cols="30"
                                rows="10"
                                onChange={(v) => setDesc(v.target.value)}
                                value={desc}
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
                                    onClick={handleClear}
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
