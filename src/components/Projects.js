import React, { useState } from 'react';
import './Projects.css';

const projects = [
  
  {
    id: 1,
    title: 'This Portfolio',
    description: 'The portfolio you are looking at right now! Built with React, featuring separate component and CSS architecture, smooth animations, and a responsive design with a dark gold aesthetic.',
    tags: ['React', 'CSS', 'JavaScript'],
    github: 'https://github.com/dignesh1207',
    live: null,
    featured: true,
    year: '2026',
  },
  
  {
    id: 2,
    title: 'Fiscal',
    description: 'Hackathon 2026 project — a responsive personal finance web app with real-time expense tracking, budget management, OSAP calculator, and tax estimator. Built client-side with full data privacy.',
    tags: ['Next.js', 'React', 'TypeScript'],
    github: 'https://github.com/dignesh1207',
    live: null,
    featured: true,
    year: '2026',
  },
  
  {
    id: 3,
    title: 'Haunted Library',
    description: 'A 3D game built in Java for COMP 2800 (Software Development). Implemented core game logic, player movement, and object interactions using OOP principles. Handled 3D transformations, lighting, collision detection, and performance optimization. Deployed and managed using Microsoft Azure.',
    tags: ['Java', 'Java 3D', 'OOP', 'Azure', 'Game Dev'],
    github: 'https://github.com/dignesh1207',
    live: null,
    featured: true,
    year: '2024',
  },
  
  {
    id: 4,
    title: 'ExpenseNest',
    description: 'A desktop expense tracker built with Java Swing. Add expenses with a description, amount, and category — then display a full summary with a running total. Features input validation and a clean OOP design with a separate Expense data model.',
    tags: ['Java', 'Java Swing', 'OOP', 'GridLayout'],
    github: 'https://github.com/dignesh1207',
    live: null,
    featured: false,
    year: '2024',
  },
  
  {
    id: 5,
    title: 'Notepad Clone',
    description: 'A desktop text editor built with Java Swing, replicating core Notepad functionality. Supports opening and saving .txt files, and includes a Find & Replace dialog to search and replace text across the document.',
    tags: ['Java', 'Java Swing', 'File I/O'],
    github: 'https://github.com/dignesh1207',
    live: null,
    featured: false,
    year: '2025',
  },
  
  {
    id: 6,
    title: 'Flask Todo App',
    description: 'A clean Todo List web app built with Flask and SQLite. Add tasks with due dates, toggle completion, and delete — all persisted in a local database via SQLAlchemy.',
    tags: ['Python', 'Flask', 'SQLite', 'SQLAlchemy'],
    github: 'https://github.com/dignesh1207',
    live: null,
    featured: false,
    year: '2025',
  },
  
  {
    id: 7,
    title: 'Weather App',
    description: 'A desktop weather app built with Python and PyQt5. Search any city for real-time weather data via OpenWeatherMap API, with temperature display, weather emojis, and robust error handling.',
    tags: ['Python', 'PyQt5', 'OpenWeatherMap API'],
    github: 'https://github.com/dignesh1207',
    live: null,
    featured: false,
    year: '2025',
  },
  
  {
    id: 8,
    title: 'Tic Tac Toe',
    description: 'A Java implementation of Tic Tac Toe with clean OOP design. Tracks X and O moves in separate lists, evaluates all 8 winning combinations, detects draws, and supports full game reset — all driven by a turn-based state machine.',
    tags: ['Java', 'OOP', 'Game Logic', 'ArrayList'],
    github: 'https://github.com/dignesh1207',
    live: null,
    featured: false,
    year: '2024',
  },
  {
    id: 9,
    title: 'Work Hours Tracker',
    description: 'Track work hours by person, workplace, and week with local storage persistence. A clean utility app for logging and reviewing weekly work schedules.',
    tags: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
    github: 'https://github.com/dignesh1207',
    live: null,
    featured: false,
    year: '2025',
  },
];

function ProjectCard({ project }) {
  return (
    <div className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
      <div className="project-card__header">
        <div className="project-card__meta">
          <span className="project-card__year">{project.year}</span>
          {project.featured && (
            <span className="project-card__badge">Featured</span>
          )}
        </div>
        <div className="project-card__links">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live site">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
              </svg>
            </a>
          )}
        </div>
      </div>
      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>
      <div className="project-card__tags">
        {project.tags.map(tag => (
          <span key={tag} className="project-card__tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <div className="projects__header">
          <div>
            <p className="section__label">03 — Projects</p>
            <h2 className="section__title">Things I've built</h2>
          </div>
          <a
            href="https://github.com/dignesh1207"
            target="_blank"
            rel="noopener noreferrer"
            className="projects__github-link"
          >
            All projects on GitHub →
          </a>
        </div>

        <div className="projects__grid">
          {visible.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {projects.length > 3 && (
          <div className="projects__more">
            <button
              className="projects__more-btn"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show less ↑' : `Show ${projects.length - 3} more ↓`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
