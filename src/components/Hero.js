import React, { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const lineRef = useRef(null);

  useEffect(() => {
    const el = lineRef.current;
    if (el) {
      setTimeout(() => el.classList.add('hero__line--visible'), 800);
    }
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero__noise" />
      <div className="hero__grid" />
      <div className="hero__inner">
        <p className="hero__greeting">Hello, I'm</p>
        <h1 className="hero__name">
          <span className="hero__name-first">Dignesh</span>
          <br />
          <span className="hero__name-last">Solanki</span>
          <span className="hero__name-dot">.</span>
        </h1>
        <div className="hero__line" ref={lineRef} />
        <p className="hero__role">
          CS Student &amp; Full Stack Developer
        </p>
        <p className="hero__tagline">
          I build clean, functional web apps and love solving problems at the intersection of design and engineering.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="hero__btn hero__btn--primary">View My Work</a>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__btn hero__btn--secondary"
          >
            Download Resume ↓
          </a>
        </div>
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>scroll</span>
        </div>
      </div>
      <div className="hero__counter">
        <div className="hero__counter-item">
          <span className="hero__counter-num">3.7</span>
          <span className="hero__counter-label">GPA</span>
        </div>
        <div className="hero__counter-divider" />
        <div className="hero__counter-item">
          <span className="hero__counter-num">4+</span>
          <span className="hero__counter-label">Projects</span>
        </div>
        <div className="hero__counter-divider" />
        <div className="hero__counter-item">
          <span className="hero__counter-num">2+</span>
          <span className="hero__counter-label">Yrs Exp.</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
