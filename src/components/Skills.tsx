import React from 'react';
import { useTranslation } from "react-i18next";

export default function SKills() {
  const [lg] = useTranslation();

  const skillsData = [
    { name: 'HTML5', image: 'html-5.png' },
    { name: 'CSS3', image: 'css-3.png' },
    { name: 'Sass', image: 'sass.png' },
    { name: 'Bootstrap', image: 'bootstrap.png' },
    { name: 'Tailwind CSS', image: 'tailwindcss.png' },
    { name: 'JavaScript', image: 'js.png' },
    { name: 'TypeScript', image: 'ts.png' },
    { name: 'React', image: 'reactjs.png' },
    { name: 'NextJS', image: 'nextjs.png' },
    { name: 'Redux Toolkit', image: 'redux.png' },
    { name: 'Material UI', image: 'materialui.png' },
    { name: 'Node', image: 'nodejs.png' },
    { name: 'Express', image: 'expressjs.png' },
    { name: 'Sequelize', image: 'sequelize.png' },
    { name: 'PostgreSQL', image: 'postgresql.png' },
  ];

  return (
    <div id='section3' className='container-skills'>
      <h1>{lg("skills1")}</h1>
      <p>{lg("skills2")}</p>
      <div className='all-skills'>
        {skillsData.map((skill, index) => (
          <p key={index}>
            <span className='icon-skill'>
              <img className='' src={`images/${skill.image}`} alt="about" />
            </span>
            {/* {skill.name} */}
          </p>
        ))}
      </div>
    </div>
  );
}

// return (
//   <div className='container-skills'>
//     <div id='section3' className='sub-container-skills'>
//       <div className="section-skills">
//         <h1>{lg("skills1")}</h1>
//         <h1>{lg("frontend1")}</h1>
//         <p>{lg("frontend2")}</p>
//       </div>
//       <div className='skills-frontend'>
//         <div className='skills-front-right'>
//           <div className='skill-right'>
//             <img className='custom-skill anime-top' src="images/html-5.png" alt="about" />
//             <img className='custom-skill anime-bottom' src="images/css-3.png" alt="about" />
//           </div>
//           <div className='skill-left'>
//             <img className='custom-skill anime-bottom' src="images/tailwindcss.png" alt="about" />
//             <img className='custom-skill anime-top' src="images/sass.png" alt="about" />
//             <img className='custom-skill anime-bottom' src="images/bootstrap.png" alt="about" />
//           </div>
//           <div className='skill-right'>
//             <img className='custom-skill anime-bottom' src="images/js.png" alt="about" />
//             <img className='custom-skill anime-top' src="images/ts.png" alt="about" />
//           </div>
//           <div className='skill-left'>
//             <img className='custom-skill anime-top' src="images/redux.png" alt="about" />
//             <img className='custom-skill anime-bottom' src="images/reactjs.png" alt="about" />
//             <img className='custom-skill anime-top' src="images/nextjs.png" alt="about" />
//           </div>
//           <div className='skill-right'>
//             <img className='custom-skill anime-top' src="images/vite.svg" alt="about" />
//             <img className='custom-skill anime-bottom' src="images/materialui.png" alt="about" />
//           </div>
//           <div className='skill-left'>
//             <img className='custom-skill anime-bottom' src="images/sql.png" alt="about" />
//             <img className='custom-skill anime-top' src="images/postgresql.png" alt="about" />
//             <img className='custom-skill anime-bottom' src="images/sequelize.png" alt="about" />
//           </div>
//           <div className='skill-right'>
//             <img className='custom-skill anime-top' src="images/nodejs.png" alt="about" />
//             <img className='custom-skill anime-bottom' src="images/expressjs.png" alt="about" />
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );


