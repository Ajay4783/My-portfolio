import React from 'react';
import Tilt from 'react-parallax-tilt'; // 3D Tilt Effect
import Lottie from "lottie-react"; // 1. Lottie Import
import robotAnimation from "../Project.json"; // 2. Robot Animation Import

const Projects = () => {
  return (
    <section id="projects" className="container py-5">
      
      {/* --- Heading Area with Robot Animation --- */}
      <div className="d-flex justify-content-center align-items-center mb-5" data-aos="fade-down">
        
        {/* Title */}
        <h2 className="fw-bold text-light m-0">My Projects</h2>
        
        {/* Animated Robot Icon */}
        <div style={{ width: '70px', marginLeft: '15px' }}> 
          <Lottie 
            animationData={robotAnimation} 
            loop={true} 
          />
        </div>
      
      </div>
      
      <div className="row justify-content-center">
        
        {/* Project 1: Django E-Commerce */}
        <div className="col-md-6 mb-4" data-aos="fade-up">
          <Tilt perspective={1000} scale={1.05} transitionSpeed={1000} className="h-100">
            <div className="card shadow-lg border-0 h-100" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(5px)' }}>
              <img 
                src="/Ecommerce.png" 
                className="card-img-top" 
                alt="E-commerce Project"
                style={{ height: '250px', objectFit: 'cover' }} 
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold text-light">Multi-Category E-Commerce Site</h4>
                <p className="card-text text-light opacity-75">
                  A fully functional e-commerce platform built with <strong>Django</strong>. 
                  Features include user authentication, product search, shopping cart, 
                  and payment integration.
                </p>
                
                <div className="mb-4">
                  <span className="badge bg-primary me-2">Python</span>
                  <span className="badge bg-success me-2">Django</span>
                  <span className="badge bg-info me-2">Bootstrap</span>
                  <span className="badge bg-warning text-dark me-2">MySQL</span>
                </div>

                {/* E-Commerce Buttons */}
                <div className="d-flex gap-2 mt-auto">
                  <a href="Ajay4783.pythonanywhere.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Live Demo
                  </a>
                  <a href="https://github.com/Ajay4783/Flipkart-Ecommerce" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                    GitHub Code
                  </a>
                </div>
              </div>
            </div>
          </Tilt>
        </div>

        {/* Project 2: Gold Price Prediction */}
        <div className="col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
          <Tilt perspective={1000} scale={1.05} transitionSpeed={1000} className="h-100">
            <div className="card shadow-lg border-0 h-100" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(5px)' }}>
              <img 
                src="Gold Prediction.png" 
                className="card-img-top" 
                alt="Gold Price Prediction" 
                style={{ height: '250px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h4 className="card-title fw-bold text-light">Gold Price Prediction Model</h4>
                <p className="card-text text-light opacity-75">
                  A Machine Learning model to predict gold prices based on historical data. 
                  Developed using <strong>Python</strong> and <strong>Scikit-Learn</strong> to analyze trends 
                  and provide accurate price forecasting.
                </p>
                
                <div className="mb-4">
                  <span className="badge bg-primary me-2">Python</span>
                  <span className="badge bg-warning text-dark me-2">ML</span>
                  <span className="badge bg-secondary me-2">Pandas</span>
                  <span className="badge bg-dark border border-light me-2">Scikit-Learn</span>
                </div>

                {/* Gold Project Buttons */}
                <div className="d-flex gap-2 mt-auto">
                  <a href="https://ajay-gold-price-tracker.streamlit.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Live Demo
                  </a>
                  <a href="https://github.com/Ajay4783/ajay-gold-bot" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm">
                    GitHub Code
                  </a>
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