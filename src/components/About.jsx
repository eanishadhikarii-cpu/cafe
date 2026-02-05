import React from 'react';
import '../styles/about.css';
import aboutImage from '../assets/images/WhatsApp Image 2026-01-06 at 7.33.29 PM.jpeg';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Our Unique Experience</h2>
        <div className="about-content">
          <div className="about-layout">
            <div className="about-text">
              
              <p>
                Clay and Cuisine Cafe is a quiet and comfortable place where people can enjoy food and drinks in a relaxed environment. The cafe is known for its simple concept that combines eating with creativity, especially working with clay and art. People visit to spend time with friends, relax after a busy day, or just enjoy a peaceful moment with coffee. The atmosphere is calm and friendly, making it a nice place to sit, talk, and enjoy simple food without any rush.
              </p>
            </div>
            <div className="about-photo">
              <div className="photo-card">
                <img src={aboutImage} alt="Elegant café interior with clay art displays" loading="lazy" />
              </div>
            </div>
          </div>
          <div className="about-bottom">
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;