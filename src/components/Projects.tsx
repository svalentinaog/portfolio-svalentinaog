import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Pagination } from 'react-bootstrap';

export default function Projects() {
  const [lg] = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const projectsData = [
    {
      image: 'andretty',
      name: 'Colchones Andretty',
      description: lg("andretty"),
      technologies: "#WordPress",
      visit: "https://colchonesandretty.com/",
      secondaryImage: "andretty"
    },
    {
      image: 'italiandiesel',
      name: 'Italian Diesel',
      description: lg("italiandiesel"),
      technologies: "#WordPress",
      visit: "https://repuestositaliandiesel.com/",
      secondaryImage: "italiandiesel"
    },
    {
      image: 'pianguita',
      name: 'Hotel Villas de Pianguita',
      description: lg("pianguita"),
      technologies: "#WordPress",
      visit: "https://villasdepianguita.com/",
      secondaryImage: "pianguita"
    },
    {
      image: 'sianexus-web',
      name: 'Sian Exus S.A.S (Página corporativa)',
      description: lg("sianexus-web"),
      technologies: "#Angular, #TypeScript, #SASS, #Bootstrap",
      visit: "https://sianexus.com",
      secondaryImage: "sianexus-web"
    },
    {
      image: 'sianexus',
      name: 'Sian Exus S.A.S (Aplicación web)',
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
      image: 'vetpet',
      name: 'VetPet',
      description: lg("vetpet"),
      technologies: "#NextJS, #Redux Toolkit, #TypeScript, #Firebase, #Cloudinary, #SASS, #Material UI",
      visit: "https://app-vet-pet.vercel.app/",
      secondaryImage: "vetpet"
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
    {
      image: 'loginbee',
      name: 'Login Bee',
      description: lg("loginBee"),
      technologies: "#HTML, #CSS",
      visit: "https://login-bee.vercel.app/",
      secondaryImage: "loginbee"
    }
  ];

  // Calculate the current projects to display
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projectsData.slice(indexOfFirstProject, indexOfLastProject);

  // Change page
  const paginate = (pageNumber: React.SetStateAction<number>) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(projectsData.length / projectsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div id='section4' className='container-projects paddings'>
      <h1>{lg("projects1")}</h1>
      <div className='projects-pagination'>
        <div className='all-projects'>
          {currentProjects.map((project, index) => (
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
                  </h3>
                    <small>{project.description}</small>
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

        <div className="pagination-container">
          <Pagination>
            <Pagination.Prev 
              onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)} 
            />
            {pageNumbers.map(number => (
              <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
                {number}
              </Pagination.Item>
            ))}
            <Pagination.Next 
              onClick={() => setCurrentPage(currentPage < pageNumbers.length ? currentPage + 1 : pageNumbers.length)} 
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
}
