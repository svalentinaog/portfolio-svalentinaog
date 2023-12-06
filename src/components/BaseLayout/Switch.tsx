import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

function Switch() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      // Obtener el valor del modo oscuro almacenado en localStorage o establecerlo en modo claro (light) por defecto
      const storedMode = localStorage.getItem('darkMode');
      return storedMode === 'dark' ? 1 : 0;
    }
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Almacenar el estado actual del modo oscuro en localStorage
      const text = darkMode === 0 ? 'light' : 'dark';
      localStorage.setItem('darkMode', text);

      // Actualizar la clase en el elemento HTML
      const html = document.querySelector('html')!;
      html.setAttribute('data-bs-theme', text);
    }
  }, [darkMode]);

  const onChange = () => {
    // Cambiar el estado del modo oscuro
    setDarkMode(darkMode === 0 ? 1 : 0);
  };

  return (
    <div className="switch-items">
      {/* <div className="d-inline-block ml-3">
        <Form.Label className={darkMode === 0 ? 'dark-label' : 'light-label'}>
          Claro
        </Form.Label>
      </div> */}
      <div className="d-inline-block">
        <Form.Check
          type="switch"
          id="custom-switch"
          onChange={onChange}
          checked={darkMode === 1}
        />
      </div>
      {/* <div className="d-inline-block mr-3">
        <Form.Label className={darkMode === 1 ? 'dark-label' : 'light-label'}>
          Oscuro
        </Form.Label>
      </div> */}
    </div>
  );
}

export default Switch;
