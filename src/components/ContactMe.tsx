import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import { validateForm } from './utils/validations'; 

const ContactMe: React.FC = () => {
  const [lg] = useTranslation();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // const handleSubmit = async (e: any) => {
  //   setLoading(true);
  //   e.preventDefault();

  //   const data = {
  //     email: e.target?.user_email.value,
  //     subject: e.target?.user_name.value,
  //     data: e.target?.user_message.value,
  //   };

  //   try {
  //     const response = await axios.post('https://emails-portafolio.onrender.com/contact', data);

  //     if (response.status === 201) {
  //       console.log("Mensaje enviado.");
  //       setFormSubmitted(true);
  //       setTimeout((): void => {
  //         setFormSubmitted(false);
  //       }, 3000);
  //     } else {
  //       console.error("No se pudo enviar el mensaje.");
  //     }
  //   } catch (error: any) {
  //     console.error("Error al enviar el mensaje:", error.message);
  //   }
  //   setLoading(false);
  // };

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: any) => {
    setLoading(true);
    e.preventDefault();

    const formData = {
      user_name: e.target?.user_name.value,
      user_email: e.target?.user_email.value,
      user_message: e.target?.user_message.value,
    };

    // Validar el formulario
    const formErrors = validateForm(formData);
    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) {
      // Si hay errores, no enviar el formulario
      setLoading(false);
      return;
    }

    // Si no hay errores, continuar con el envío del formulario
    try {
      const response = await axios.post('https://emails-portafolio.onrender.com/contact', formData);

      if (response.status === 201) {
        console.log("Mensaje enviado.");
        setFormSubmitted(true);
        setTimeout((): void => {
          setFormSubmitted(false);
        }, 3000);
      } else {
        console.error("No se pudo enviar el mensaje.");
      }
    } catch (error: any) {
      console.error("Error al enviar el mensaje:", error.message);
    }
    setLoading(false);
  };
  
  return (
    <div id='section5' className='container-contactme paddings'>
      <div className="text-content-contactme">
        <h1>{lg("contact1")}</h1>
        <div>
          <p>{lg("contact2")}</p>
        </div>
        <div className='social-media-container'>
          <a href="https://github.com/svalentinaog">
            <div className="icon-github icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/svalentinaog">
            <div className="icon-linkedin icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className="container-formContact">
        <form
          className="form-wrapper custom-form-wrapper-contact"
          onSubmit={handleSubmit}
        >
          <label htmlFor="user_name">{lg("contact3")}</label>
          <InputGroup className="form-input-group">
            <InputGroup.Text id="basic-addon1" className="form-input-icon">
              <FontAwesomeIcon icon={faUser} />
            </InputGroup.Text>
            <Form.Control
              className="form-input"
              name="user_name"
              placeholder="Sasha Blouse"
              aria-label="nombre-completo"
              aria-describedby="basic-addon1"
              id="user_name"
            />
          </InputGroup>
          {errors.user_name && <p className="error-message">{errors.user_name}</p>}

          <label htmlFor="user_email">{lg("contact4")}</label>
          <InputGroup className="form-input-group">
            <InputGroup.Text id="basic-addon1" className="form-input-icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </InputGroup.Text>
            <Form.Control
              className="form-input"
              placeholder="sashablouse@gmail.com"
              name="user_email"
              aria-label="sashablouse@gmail.com"
              aria-describedby="basic-addon1"
              id="user_email"
            />
          </InputGroup>
          {errors.user_email && <p className="error-message">{errors.user_email}</p>}

          <label htmlFor="user_message">{lg("contact5")}</label>
          <InputGroup className="form-input-group">
            <Form.Control
              className="form-textarea"
              as="textarea"
              name="user_message"
              rows={3}
              placeholder={lg("contact6")}
              id="user_message"
            />
          </InputGroup>
          {errors.user_message && <p className="error-message">{errors.user_message}</p>}

          {loading && <p>{lg("loading")}</p>}

          {formSubmitted && (
            <p className='succesfully'>
                {lg("succesfully")}
            </p>
          )}

          <button type="submit" className="form-submit">
            {lg("contact7")}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
