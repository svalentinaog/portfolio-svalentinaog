import React from 'react';
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [lg] = useTranslation();

  const projectsData = [
    {
      image: 'eventox.png',
      name: 'EventoX',
      description: lg("eventox"),
      technologies: "#Next.js, #Redux Toolkit, #SCSS, #Bootstrap, #TypeScript, #NestJS, #Express.js, #PostgreSQL, #MySQL, Microservicios, #Firebase, #Mercado Pago.",
      visit: "https://eventox-client-peach.vercel.app/"
    },

    {
      image: 'spootchat.png',
      name: 'SpootChat',
      description: lg("spootchat"),
      technologies: "#React, #Vite.js, #Redux, #CSS3, #Tailwind CSS, #Node.js, #Express.js, #MongoDB, #PostgreSQL, #Sequelize, #Redis, #Arquitectura MVC, #Firebase, #Mercado Pago.",
      visit: "https://spoot-front.vercel.app/"
    },
  ];

  return (
    <div id='section4' className='container-projects paddings'>
      <h1>{lg("projects1")}</h1>
      <div className='all-projects'>
        {projectsData.map((project, index) => (
          <div key={index} className='content-project'>
            <div className='image-project'>
              <img className='' src={`images/projects/${project.image}`} alt="about" />
            </div>
            <h3>
              {project.name}
              <small> - {project.description}</small>
            </h3>
            <p>
              {project.technologies}
            </p>
            <a href={project.visit} target="_blank">
              <button>
                <span>{lg("to-visit")}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}


