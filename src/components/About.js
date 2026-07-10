import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__layout">
          <div className="about__left">
            <p className="section__label">01 — About</p>
            <h2 className="section__title">The person<br /><em>behind the code</em></h2>
          </div>
          <div className="about__right">
            <p className="about__text">
              I'm a Computer Science student at the <strong>University of Windsor</strong> specializing in
              Software Engineering, with a strong GPA of <strong>3.7/4.0</strong> and a passion for building
              real-world applications.
            </p>
            <p className="about__text">
              Currently working as an <strong>IT Support Co-op</strong> at UWindsor, I've gained hands-on
              experience with enterprise systems, Active Directory, Intune/Autopilot, and end-to-end
              device deployment — while continuing to sharpen my dev skills on the side.
            </p>
            <p className="about__text">
              I enjoy crafting full-stack projects, from RESTful APIs to responsive web apps, and I'm
              always looking for opportunities to learn and build things that matter.
            </p>
            <div className="about__details">
              <div className="about__detail">
                <span className="about__detail-key">Location</span>
                <span className="about__detail-val">Windsor, ON, Canada</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-key">Email</span>
                <span className="about__detail-val">solank86@uwindsor.ca</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-key">Status</span>
                <span className="about__detail-val about__detail-val--green">Open to opportunities</span>
              </div>
            </div>
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="about__resume-link"
            >
              <span>View Full Resume</span>
              <span className="about__resume-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
