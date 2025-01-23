import React from 'react';
import { useTranslation } from "react-i18next";

export default function SKills() {
  const [lg] = useTranslation();

  const skillsData = [
    { name: 'HTML5', image: 'html-5.png' },
    { name: 'CSS3', image: 'css-3.png' },
    { name: 'JavaScript', image: 'js.png' },
    { name: 'TypeScript', image: 'ts.png' },
    { name: 'React.js', image: 'reactjs.png' },
    { name: 'Redux Toolkit', image: 'redux.png' },
    { name: 'NextJS', image: 'nextjs.png' },
    { name: 'Angular', image: 'angular.png' },
    { name: 'Sass', image: 'sass.png' },
    { name: 'Bootstrap', image: 'bootstrap.png' },
    { name: 'Tailwind CSS', image: 'tailwindcss.png' },
    { name: 'Material UI', image: 'materialui.png' },
    { name: 'Firebase', image: 'firebase.png' },
    { name: 'Node.js', image: 'nodejs.png' },
    { name: 'Express.js', image: 'expressjs.png' },
    // { name: 'SQL', image: 'sql.png' },
    { name: 'Sequelize', image: 'sequelize.png' },
    { name: 'PostgreSQL', image: 'postgresql.png' },
    { name: 'Git', image: 'git.png' },
    // { name: 'GitHub', image: 'github.png' },
    { name: 'WordPress', image: 'wordpress.png' },
    { name: 'Figma', image: 'figma.png' },
    // { name: 'Font Awesome', image: 'font-awesome.png' },
    // { name: 'Postman', image: 'postman.svg' },
    // { name: 'Adobe Xd', image: 'xd.png' },
    { name: 'Adobe Illustrator', image: 'illustrator.png' },
    { name: 'Adobe Photoshop', image: 'photoshop.png' },
  ];

  return (
    <div id='section3' className='container-skills paddings'>
      <h1>{lg("skills1")}</h1>
      <p>{lg("skills2")}</p>
      <div className='all-skills'>
        {skillsData.map((skill, index) => (
          <div key={index} className='content-skill'>
            <div className='icon-skill'>
              <img src={`images/skills/${skill.image}`} alt="about" />
            </div>
            <span>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}


