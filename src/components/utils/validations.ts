interface FormData {
    user_name: string;
    user_email: string;
    user_message: string;
}

interface ValidationTranslations {
    validationName1: string;
    validationName2: string;
    validationEmail1: string;
    validationEmail2: string;
    validationMessage: string;
}

export const validateForm = (data: FormData, translations: ValidationTranslations): Record<string, string> => {
    const { user_name, user_email, user_message } = data;
    const errors: Record<string, string> = {};

    if (!user_name || typeof user_name !== 'string' || !user_name.trim()) {
        errors.user_name = translations.validationName1; // "Tu nombre es requerido"
    }

    if (!user_name || typeof user_name !== 'string' || /[^a-zA-Z\s]/.test(user_name)) {
        errors.user_name = translations.validationName2; // "El nombre que ingresó contiene caracteres inválidos";
    }    

    if (!user_email || typeof user_email !== 'string' || !user_email.trim()) {
        errors.user_email = translations.validationEmail1; // "Tu e-mail es requerido";
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    
        if (!emailRegex.test(user_email)) {
            errors.user_email = translations.validationEmail2; // "La dirección de correo electrónico no es válida";
        }
    }    

    if (!user_message || typeof user_message !== 'string' || user_message.trim().length < 15 || user_message.trim().length > 500) {
        errors.user_message = translations.validationMessage; // "El mensaje debe tener entre 15 y 500 caracteres";
    }

    return errors;
};
