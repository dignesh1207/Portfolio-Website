import React from 'react';
import './Education.css';

const education = [
  {
    degree: 'BSc Honours Computer Science — Software Engineering Co-op',
    school: 'University of Windsor',
    period: 'Jan 2024 — May 2027',
    detail: 'GPA: 3.7 / 4.0',
    location: 'Windsor, ON',
  },
  {
    degree: 'Certificate, Project Management Foundation',
    school: 'University of Toronto Mississauga',
    period: 'Sep 2023 — Dec 2023',
    detail: '',
    location: 'Mississauga, ON',
  },
  {
    degree: 'Diploma, Computer Systems Technician',
    school: 'Loyalist College',
    period: 'Sep 2019 — Apr 2021',
    detail: 'GPA: 3.3 / 4.0',
    location: 'Belleville, ON',
  },
];

function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <p className="section__label">05 — Education</p>
        <h2 className="section__title">Where I've studied</h2>

        <div className="education__list">
          {education.map((edu, i) => (
            <div key={i} className="education__card">
              <div className="education__card-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <div className="education__card-left">
                <h3 className="education__degree">{edu.degree}</h3>
                <p className="education__school">{edu.school}</p>
                <p className="education__location">{edu.location}</p>
              </div>
              <div className="education__card-right">
                <span className="education__period">{edu.period}</span>
                {edu.detail && <span className="education__detail">{edu.detail}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
