import emailjs from "@emailjs/browser";

export default async function sendEmail(name, email, desc) {
    const templateParams = {
        from_name: name,
        message: desc,
        email: email,
    };

    let sucess = false;

    try {
        await emailjs.send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            templateParams,
            "Nzp7f022sFI9V8nzU"
        );

        sucess = true;
    } catch (error) {
        sucess = false;
    }

    return sucess;
}
