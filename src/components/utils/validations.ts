import { useTranslation } from "react-i18next";

export const validateForm = (data: { user_name: string; user_email: string; user_message: string }): Record<string, string> => {
    const [lg] = useTranslation();

    const { user_name, user_email, user_message } = data;
    const errors: Record<string, string> = {};

    if (!user_name || !user_name.trim()) {
        errors.user_name = lg("validationName1"); // "Tu nombre es requerido"
    } else if (/[^a-zA-Z\s]/.test(user_name)) {
        errors.user_name = lg("validationName2"); // "El nombre que ingresó contiene caracteres inválidos";
    }

    if (!user_email || !user_email.trim()) {
        errors.user_email = lg("validationEmail1"); // "Tu e-mail es requerido";
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(user_email)) {
            errors.user_email = lg("validationEmail2"); // "La dirección de correo electrónico no es válida";
        }
    }

    if (!user_message || user_message.trim().length < 15 || user_message.trim().length > 500) {
        errors.user_message = lg("validationMessage"); // "El mensaje debe tener entre 15 y 500 caracteres";
    }

    return errors;
};
