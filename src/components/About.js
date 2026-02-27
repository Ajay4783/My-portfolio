import React from 'react';
import Lottie from "lottie-react";
import rocketAnimation from "../Rocket.json";

const About = () => {
  return (
    <section id="about" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <h2 className="text-center fw-bold mb-5 text-light" data-aos="fade-up">About Me</h2>
          
          <div className="row align-items-center">
            
            <div className="col-md-7" data-aos="fade-right">
              <h4 className="fw-bold text-primary">Who am I?</h4>
              <p className="lead text-light mt-3">
                I am a passionate <strong>Full Stack Developer</strong> based in Tiruppur, Tamil Nadu. 
                I recently graduated with a <strong>B.Sc in Information Technology</strong> from Bharathiar University.
              </p>
              <p className="text-light">
                My journey in programming started with Python, and I have since expanded my skills to build 
                complete web applications using <strong>Django and React JS</strong>. 
                I love solving complex problems and turning ideas into reality through code.
              </p>
              <p className="text-light">
                Currently, I am focusing on building scalable web apps and looking for an opportunity 
                to start my professional career as a software developer.
              </p>
            </div>

            <div className="col-md-5 mt-5 mt-md-0 position-relative" data-aos="fade-left">
              
              
              <div style={{ 
                  position: 'absolute', 
                  top: '100px',  
                  right: '30px', 
                  width: '150px',
                  zIndex: 1 
              }}>
                <Lottie 
                    animationData={rocketAnimation} 
                    loop={true} 
                />
              </div>

              <div className="card shadow border-0 p-4">
                <h4 className="fw-bold text-light mb-3">Education & Details</h4>
                <ul className="list-unstyled">
                  <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-mortarboard-fill text-primary fs-4 me-3"></i>
                    <div>
                      <strong className="text-light">B.Sc Information Technology</strong><br/>
                      <small className="text-light opacity-75">Bharathiar University</small>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill text-primary fs-4 me-3"></i>
                    <div>
                      <strong className="text-light">Location</strong><br/>
                      <small className="text-light opacity-75">Tiruppur, India</small>
                    </div>
                  </li>
                  <li className="mb-3 d-flex align-items-center">
                    <i className="bi bi-translate text-primary fs-4 me-3"></i>
                    <div>
                      <strong className="text-light">Languages</strong><br/>
                      <small className="text-light opacity-75">Tamil, English</small>
                    </div>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;