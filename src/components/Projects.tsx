import React from 'react';
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [lg] = useTranslation();

  const projectsData = [
    {
      image: 'aquarium.jpg',
      name: 'EventoX',
      description: "Lorem ipsum...",
      technologies: "Next.js, Redux Toolkit, SCSS, Bootstrap, TypeScript, NestJS, Express.js, PostgreSQL, MySQL, Microservicios, Firebase, Mercado Pago."
    },

    {
      image: 'aquarium.jpg',
      name: 'Spoot Chat',
      description: "Lorem ipsum...",
      technologies: "React, Vite.js, Redux, CSS3, Tailwind CSS, Node.js, Express.js, MongoDB, PostgreSQL, Sequelize, Redis, Arquitectura MVC, Firebase, Mercado Pago."
    },
  ];

  return (
    <div id='section4' className='container-projects paddings'>

      <h1>{lg("projects1")}</h1>

      <div className='all-projects'>
        {projectsData.map((project, index) => (
          <div key={index} className='content-project'>
            <div className='image-project'>
              <img className='' src={`images/${project.image}`} alt="about" />
            </div>
            <h3>
              {project.name}
            </h3>
            <p>
              {project.description}
            </p>
            <span>
              {project.technologies}
            </span>
            <button>{lg("projects2")}</button>
          </div>
        ))}
      </div>

    </div>
  );
}


