import React from 'react';
import { useTranslation } from "react-i18next";

export default function Projects() {
  const [lg] = useTranslation();

  const projectsData = [
    {
      image: 'vetpet',
      name: 'VetPet',
      description: lg("vetpet"),
      technologies: "#NextJS, #Redux Toolkit, #TypeScript, #Firebase, #Cloudinary, #SASS, #Material UI",
      visit: "https://app-vet-pet.vercel.app/",
      secondaryImage: "vetpet"
    },
    {
      image: 'sianexus',
      name: 'Sian Exus',
      description: lg("sianexus"),
      technologies: "#Angular, #TypeScript, #SASS, #Bootstrap",
      visit: "https://app.sianexus.co/auth/login",
     secondaryImage: "sianexus"
    },
    {
      image: 'frenitek',
      name: 'Frenitek S.A.S',
      description: lg("frenitek"),
      technologies: "#Angular, #TypeScript, #CSS, #Tailwind CSS",
      visit: "https://frenitek.com/",
     secondaryImage: "frenitek"
    },
    {
      image: 'liveedu',
      name: 'Liveedu',
      description: lg("liveedu"),
      technologies: "#NextJS, #Redux Toolkit, #TypeScript, #SASS, #Material UI",
      visit: "https://liveedu.vercel.app/",
     secondaryImage: "liveedu"
    },
    {
      image: 'adoptpet',
      name: 'Adopt Pet',
      description: lg("adoptpet"),
      technologies: "#HTML, #SASS, #JavaScript, #JSON Server, #Webpapck, #Babel",
      visit: "https://adoptpet-app.vercel.app",
     secondaryImage: "adoptpet"
    },
    {
      image: 'eventox',
      name: 'EventoX',
      description: lg("eventox"),
      technologies: "#Next.js, #Redux Toolkit, #SASS, #Bootstrap, #TypeScript, #NestJS, #Express.js, #PostgreSQL, #MySQL, Microservicios, #Firebase, #Mercado Pago.",
      visit: "https://eventox-client-peach.vercel.app/",
     secondaryImage: "eventox"
    },
    {
      image: 'spootchat',
      name: 'SpootChat',
      description: lg("spootchat"),
      technologies: "#React, #Vite.js, #Redux, #CSS, #Tailwind CSS, #Node.js, #Express.js, #MongoDB, #PostgreSQL, #Sequelize, #Redis, #Arquitectura MVC, #Firebase, #Mercado Pago.",
      visit: "https://spoot-front.vercel.app/",
     secondaryImage: "spootchat"
    },
    {
      image: 'countries',
      name: 'Countries',
      description: lg("countries"),
      technologies: "#React, #Vite.js, #Redux Toolkit, #CSS, #Node.js, #Express.js, #Sequelize, #PostgreSQL",
      repository: "https://github.com/svalentinaog/Countries",
     secondaryImage: "countries"
    },
    {
      image: 'inbuild',
      name: 'Inbuild',
      description: lg("inbuild"),
      technologies: "#HTML, #CSS, #JavaScript",
      visit: "https://inbuild.vercel.app/",
     secondaryImage: "inbuild"
    },
    {
      image: 'postpandemic',
      name: 'Post Pandemic',
      description: lg("postpandemic"),
      technologies: "#HTML, #CSS, #JavaScript, #Bootstrap, #Animate.css",
      visit: "https://post-pandemic.vercel.app/ ",
     secondaryImage: "postpandemic"
    },
  ];

  return (
    <div id='section4' className='container-projects paddings'>
      <h1>{lg("projects1")}</h1>
      <div className='all-projects'>
        {projectsData.map((project, index) => (
          <div key={index} className='content-project'>
            <div className='info-project'>
                <div className='image-project'>
                  <div className='image-container'>
                    <img className='image-primary' src={`images/projects/${project.image}.jpg`} alt={`${project.name} primary`} />
                    <img className='image-secondary' src={`images/projects/mockups/${project.secondaryImage}.jpg`} alt={`${project.name} mockup`} />
                  </div>
                </div>
                <h3>
                  {project.name}
                  <small> - {project.description}</small>
                </h3>
                <p>
                  {project.technologies}
                </p>
            </div>
             {project.visit && (
              <a href={project.visit} target="_blank" rel="noopener noreferrer">
                <button className='toVisit'>
                  <span>{lg("to-visit")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </button>
              </a>
            )}

            {project.repository && (
              <a href={project.repository} target="_blank" rel="noopener noreferrer">
                <button className='repository'>
                  <span>{lg("repository")}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                  </svg>
                </button>
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


