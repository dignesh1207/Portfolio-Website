import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript', 'SQL'],
  },
  {
    title: 'Frameworks & Tools',
    skills: ['React', 'Next.js', 'Node.js', 'Spring Boot', 'FastAPI', 'Flask'],
  },
  {
    title: 'Databases & Cloud',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'REST APIs', 'JWT Auth', 'Git'],
  },
  {
    title: 'IT & Systems',
    skills: ['Active Directory', 'Microsoft Entra ID', 'Intune / Autopilot', 'Windows Server', 'Linux / UNIX', 'TeamDynamix'],
  },
];

function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <p className="section__label">02 — Skills</p>
        <h2 className="section__title">What I work with</h2>

        <div className="skills__grid">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skills__card">
              <h3 className="skills__card-title">{cat.title}</h3>
              <ul className="skills__list">
                {cat.skills.map((skill) => (
                  <li key={skill} className="skills__item">
                    <span className="skills__item-dot" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
