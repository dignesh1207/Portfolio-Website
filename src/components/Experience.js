import React, { useState } from 'react';
import './Experience.css';

const experience = [
  {
    role: 'IT Support Client Services (Part-time)',
    company: 'University of Windsor',
    period: 'Jan 2026 — Present',
    location: 'Windsor, ON',
    description: [
      'Delivered IT support to students and library patrons, resolving printing problems, hardware malfunctions, and account access issues.',
      'Administered user accounts and password resets through Active Directory for library staff and patrons.',
      'Assisted with VM configuration, system upgrades, and documented technical procedures.',
    ],
  },
  {
    role: 'IT Support Client Services (Co-op)',
    company: 'University of Windsor',
    period: 'Apr 2025 — Dec 2025',
    location: 'Windsor, ON',
    description: [
      'Provided Tier-1 and Tier-2 technical support by troubleshooting hardware, software, peripherals, and network connectivity issues.',
      'Deployed and configured corporate laptops for new hires, including Windows setup, application installation, and Intune/Autopilot enrollment.',
      'Supported new-hire onboarding and user account management using Active Directory and Microsoft Entra ID.',
      'Created and maintained technical documentation, asset inventories, and ticket records using TeamDynamix.',
    ],
  },
];

function Experience() {
  const [active, setActive] = useState(0);
  const exp = experience[active];

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <p className="section__label">04 — Experience</p>
        <h2 className="section__title">Where I've worked</h2>

        <div className="experience__layout">
          <ul className="experience__tabs">
            {experience.map((item, i) => (
              <li key={i}>
                <button
                  className={`experience__tab ${active === i ? 'experience__tab--active' : ''}`}
                  onClick={() => setActive(i)}
                >
                  <span className="experience__tab-company">{item.role.split('(')[0].trim()}</span>
                  <span className="experience__tab-period">{item.period}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="experience__panel">
            <div className="experience__panel-header">
              <h3 className="experience__role">
                {exp.role.split('(')[0].trim()}
                <span className="experience__at"> @ </span>
                <span className="experience__company">{exp.company}</span>
                {exp.role.includes('(') && (
                  <span className="experience__type"> ({exp.role.match(/\(([^)]+)\)/)?.[1]})</span>
                )}
              </h3>
              <div className="experience__meta">
                <span>{exp.period}</span>
                <span className="experience__dot">·</span>
                <span>{exp.location}</span>
              </div>
            </div>
            <ul className="experience__bullets">
              {exp.description.map((item, i) => (
                <li key={i} className="experience__bullet">
                  <span className="experience__bullet-mark">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
