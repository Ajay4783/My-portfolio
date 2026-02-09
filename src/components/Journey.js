import React from 'react';
import Lottie from "lottie-react"; 
import journeyAnimation from "../List.json"; 

const Journey = () => {
  return (
    <section id="journey" className="container py-5">
      
      {/* Heading (சாதாரணமாக நடுவில்) */}
      <h2 className="text-center fw-bold mb-5 text-light" data-aos="fade-down">My Journey</h2>
      
      <div className="row">
        
        {/* === Left Side: Timeline (Journey) === */}
        <div className="col-md-7">
          
          {/* Timeline Wrapper */}
          <div style={{ borderLeft: '3px solid #00d2ff', position: 'relative', marginLeft: '10px' }}>

            {/* 1. Job Seeker */}
            <div className="mb-5 ms-4 position-relative" data-aos="fade-up">
              <div className="bg-primary rounded-circle position-absolute top-0 start-0 translate-middle" 
                   style={{ width: '20px', height: '20px', left: '-22px', border: '4px solid #0f2027' }}></div>
              
              <div className="card shadow-sm border-0 p-4">
                <span className="badge bg-primary mb-2 w-25">2026 - Present</span>
                <h4 className="fw-bold text-light">Job Seeker & Freelancer</h4>
                <h5 className="text-info">Full Stack Developer</h5>
                <p className="mt-2 text-light opacity-75">
                  Actively looking for full-time opportunities. Building advanced projects in 
                  <strong> React JS, Django, and Python</strong> to showcase my skills.
                </p>
              </div>
            </div>

            {/* 2. Projects Phase */}
            <div className="mb-5 ms-4 position-relative" data-aos="fade-up">
              <div className="bg-success rounded-circle position-absolute top-0 start-0 translate-middle" 
                   style={{ width: '20px', height: '20px', left: '-22px', border: '4px solid #0f2027' }}></div>
              
              <div className="card shadow-sm border-0 p-4">
                <span className="badge bg-success mb-2 w-25">2025</span>
                <h4 className="fw-bold text-light">Freelance Projects</h4>
                <h5 className="text-info">Self-Paced Learning</h5>
                <p className="mt-2 text-light opacity-75">
                  Developed a <strong>Multi-Category E-Commerce Site</strong> and a <strong>Gold Price Prediction Model</strong>. 
                  Mastered frontend and backend integration.
                </p>
              </div>
            </div>

            {/* 3. Learning Phase */}
            <div className="mb-5 ms-4 position-relative" data-aos="fade-up">
              <div className="bg-warning rounded-circle position-absolute top-0 start-0 translate-middle" 
                   style={{ width: '20px', height: '20px', left: '-22px', border: '4px solid #0f2027' }}></div>
              
              <div className="card shadow-sm border-0 p-4">
                <span className="badge bg-warning text-dark mb-2 w-25">2024</span>
                <h4 className="fw-bold text-light">Python & Web Development</h4>
                <h5 className="text-info">Certification Course</h5>
                <p className="mt-2 text-light opacity-75">
                  Started my coding journey. Learned <strong>Python, HTML, CSS, Bootstrap</strong>, 
                  and database management fundamentals.
                </p>
              </div>
            </div>

            {/* 4. Graduation */}
            <div className="mb-5 ms-4 position-relative" data-aos="fade-up">
              <div className="bg-danger rounded-circle position-absolute top-0 start-0 translate-middle" 
                   style={{ width: '20px', height: '20px', left: '-22px', border: '4px solid #0f2027' }}></div>
              
              <div className="card shadow-sm border-0 p-4">
                <span className="badge bg-danger mb-2 w-25">2020 - 2023</span>
                <h4 className="fw-bold text-light">B.Sc Information Technology</h4>
                <h5 className="text-info">Bharathiar University</h5>
                <p className="mt-2 text-light opacity-75">
                  Graduated with <strong>74.6%</strong>. Learned core computer science concepts, 
                  C++, Java, and Software Engineering principles.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* === Right Side: Big Animation (Sticky) === */}
        <div className="col-md-5 d-none d-md-block"> {/* மொபைலில் மறைந்துவிடும், லேப்டாப்பில் தெரியும் */}
          <div style={{ position: 'sticky', top: '150px' }}>
             <Lottie 
                animationData={journeyAnimation} 
                loop={true} 
                style={{ width: '100%', maxWidth: '400px' }} // இப்போ பெருசா தெரியும்
             />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Journey;