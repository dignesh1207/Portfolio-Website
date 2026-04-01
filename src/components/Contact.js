import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Replace with your form endpoint (Formspree, EmailJS, etc.)
    // await fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form) })
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__layout">
          <div className="contact__left">
            <p className="section__label">06 — Contact</p>
            <h2 className="section__title">Let's work<br /><em>together</em></h2>
            <p className="contact__text">
              Open to co-op roles, freelance projects, and full-time opportunities.
              Drop me a message and I'll get back to you soon!
            </p>
            <div className="contact__links">
              <a href="mailto:solank86@uwindsor.ca" className="contact__link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                solank86@uwindsor.ca
              </a>
              <a href="https://linkedin.com/in/dsolanki127" target="_blank" rel="noopener noreferrer" className="contact__link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                </svg>
                linkedin.com/in/dsolanki127
              </a>
              <a href="https://github.com/dignesh1207" target="_blank" rel="noopener noreferrer" className="contact__link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                github.com/dignesh1207
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell me about your project or opportunity…" rows={5} value={form.message} onChange={handleChange} required />
            </div>
            <button
              type="submit"
              className={`contact__submit ${status === 'sending' ? 'contact__submit--loading' : ''} ${status === 'sent' ? 'contact__submit--sent' : ''}`}
              disabled={status === 'sending' || status === 'sent'}
            >
              {status === 'idle' && 'Send Message →'}
              {status === 'sending' && 'Sending…'}
              {status === 'sent' && '✓ Message Sent!'}
              {status === 'error' && 'Error — Try Again'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
