import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react";
import robotAnimation from "../Project.json";

const Projects = () => {
  return (
    <section id="projects" className="container-fluid px-4 px-md-5 py-5">
      
      <div className="d-flex justify-content-center align-items-center mb-5" data-aos="fade-down">
        <h2 className="fw-bold text-light m-0">My Projects</h2>
        <div style={{ width: '70px', marginLeft: '15px' }}> 
          <Lottie animationData={robotAnimation} loop={true} />
        </div>
      </div>
      
      <div className="row justify-content-center mx-auto" style={{ maxWidth: '1400px' }}>
        
        {/* 3. col-12 சேர்க்கப்பட்டுள்ளது (மொபைல் டிஸ்ப்ளேக்காக) */}
        <div className="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up">
          <Tilt perspective={1000} scale={1.05} transitionSpeed={1000} className="h-100">
            <div className="card shadow-lg border-0 h-100" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(5px)' }}>
              <img src="/Ecommerce.png" className="card-img-top" alt="E-commerce Project" style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-light">Multi-Category E-Commerce</h5>
                <p className="card-text text-light opacity-75 small">
                  A fully functional e-commerce platform built with <strong>Django</strong>. Features include user authentication, product search, shopping cart, and payment integration.
                </p>
                <div className="mb-4">
                  <span className="badge bg-primary me-1">Python</span>
                  <span className="badge bg-success me-1">Django</span>
                  <span className="badge bg-info me-1">Bootstrap</span>
                  <span className="badge bg-warning text-dark me-1">MySQL</span>
                </div>
                <div className="d-flex gap-2 mt-auto">
                  <a href="https://Ajay4783.pythonanywhere.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm w-50">Live Demo</a>
                  <a href="https://github.com/Ajay4783/Flipkart-Ecommerce" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm w-50">GitHub Code</a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="100">
          <Tilt perspective={1000} scale={1.05} transitionSpeed={1000} className="h-100">
            <div className="card shadow-lg border-0 h-100" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(5px)' }}>
              <img src="Gold Prediction.png" className="card-img-top" alt="Gold Price Prediction" style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-light">Gold Price Prediction Model</h5>
                <p className="card-text text-light opacity-75 small">
                  A Machine Learning model to predict gold prices based on historical data. Developed using <strong>Python</strong> and <strong>Scikit-Learn</strong> to analyze trends.
                </p>
                <div className="mb-4">
                  <span className="badge bg-primary me-1">Python</span>
                  <span className="badge bg-warning text-dark me-1">ML</span>
                  <span className="badge bg-secondary me-1">Pandas</span>
                  <span className="badge bg-dark border border-light me-1">Scikit-Learn</span>
                </div>
                <div className="d-flex gap-2 mt-auto">
                  <a href="https://ajay-gold-price-tracker.streamlit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm w-50">Live Demo</a>
                  <a href="https://github.com/Ajay4783/ajay-gold-bot" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm w-50">GitHub Code</a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        <div className="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up" data-aos-delay="200">
          <Tilt perspective={1000} scale={1.05} transitionSpeed={1000} className="h-100">
            <div className="card shadow-lg border-0 h-100" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(5px)' }}>
              <img src="/AI_Image.png" className="card-img-top" alt="AI Interviewer" style={{ height: '220px', objectFit: 'cover' }} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-bold text-light">AI Interviewer Pro</h5>
                <p className="card-text text-light opacity-75 small">
                  An intelligent mock interview platform designed to help candidates practice and improve their skills with real-time AI feedback.
                </p>
                <div className="mb-4">
                  <span className="badge bg-info text-dark me-1">React.js</span>
                  <span className="badge bg-dark border border-light me-1">AI / API</span>
                  <span className="badge bg-light text-dark me-1">Vercel</span>
                </div>
                <div className="d-flex gap-2 mt-auto">
                  <a href="https://ai-interviewer-pro-seven.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm w-50">Live Demo</a>
                  <a href="YOUR_AI_GITHUB_LINK_HERE" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm w-50">GitHub Code</a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default Projects;