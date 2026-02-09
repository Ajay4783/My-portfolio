import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from "lottie-react"; // Import Lottie
import codingAnimation from "../space_boy_developer.json"; // Import Animation File

const Hero = () => {
  return (
    <section id="home" className="container py-5 mt-5">
      <div className="row align-items-center">
        <div className="col-md-6" data-aos="fade-right">

          <h4 className="text-light">Hello, I'm</h4>

          <h1 className="display-3 fw-bold">
            <span className="text-primary">Ajay S.</span>
          </h1>

          <h3 className="mb-4 text-light">
            I am a{' '}
            <span style={{ color: '#00d2ff', fontWeight: 'bold' }}>
              <Typewriter
                words={['Full Stack Developer', 'Python Enthusiast', 'React Developer']}
                loop={true}
                cursor
                cursorStyle='|'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>

          <p className="lead text-light">
            Specializing in <strong>Python, Django, and React JS</strong>.
            I build scalable web applications and e-commerce solutions.
          </p>

          <div className="mt-4">
            <a href="#contact" className="btn btn-primary btn-lg me-3 shadow">Hire Me</a>
            <a href="Ajay_Resume.pdf" download="Ajay_Resume.pdf" className="btn btn-outline-light btn-lg shadow"> Download Resume <i className="bi bi-download ms-2"></i></a>
          </div>
        </div>

        {/* Right Side: Animation with Transparent Background */}
        <div className="col-md-6 text-center mt-4 mt-md-0" data-aos="fade-left">
            <Lottie
                animationData={codingAnimation}
                loop={true}
                className="img-fluid"
                style={{ height: '400px', background: 'transparent' }} // ✅ பின்னணி நீக்கப்பட்டது
            />
        </div>

      </div>
    </section>
  );
};

export default Hero;