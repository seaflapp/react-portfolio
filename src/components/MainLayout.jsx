import React, { useState, useEffect } from 'react';
import './../css/navBarlogo.css';
import { Link } from 'react-router-dom';

const SHAPE_SIZES = [110, 60, 30, 80, 70, 90, 80, 60, 40, 90]; // width/height in px for each shape

function getRandomPosition(idx) {
  const shapeSize = SHAPE_SIZES[idx];
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxLeft = Math.max(0, vw - shapeSize);
  const maxTop = Math.max(0, vh - shapeSize);
  const leftPx = Math.floor(Math.random() * maxLeft);
  const topPx = Math.floor(Math.random() * maxTop);
  const left = (leftPx / vw) * 100;
  const top = (topPx / vh) * 100;
  return { top: `${top}%`, left: `${left}%` };
}

const MainLayout = ({ children, pageTitle }) => {
  const [shapePositions, setShapePositions] = useState([]);

  useEffect(() => {
    const positions = Array.from({ length: 10 }, (_, idx) => getRandomPosition(idx));
    setShapePositions(positions);
  }, []);

  return (
    <div className="logo-colapseble-nav-bar main-glass-bg">
      {/* Animated Background Shapes */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={i}
          className={`floating-shape-${i + 1}`}
          style={shapePositions[i] || {}}
        ></div>
      ))}
      <div className="nav-bar">
        <div className="current-page-name">{pageTitle}</div>
      </div>
      <div className="nav-bar-logo">
        <div className="logo-frame-wrapper">
          <div className="logo-frame">
            <div className="wip" />
          </div>
        </div>
        <Link to="/" style={{ textDecoration: 'none', width: '100%' }}>
          <div className="home-wrapper">
            <div className="home">Home</div>
          </div>
        </Link>
        <Link to="/about" style={{ textDecoration: 'none', width: '100%' }}>
          <div className="home-wrapper">
            <div className="home">About Me</div>
          </div>
        </Link>
        <Link to="/skills" style={{ textDecoration: 'none', width: '100%' }}>
          <div className="home-wrapper">
            <div className="home">Skills</div>
          </div>
        </Link>
        <Link to="/projects" style={{ textDecoration: 'none', width: '100%' }}>
          <div className="home-wrapper">
            <div className="home">Projects</div>
          </div>
        </Link>
        <Link to="/contact" style={{ textDecoration: 'none', width: '100%' }}>
          <div className="contact-me-wrapper">
            <div className="home">Contact Me</div>
          </div>
        </Link>
        {/* GitHub Link at Bottom */}
        <div className="github-link-container">
          <a 
            href="https://github.com/seaflapp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="github-link"
          >
            <span className="github-icon">📝</span>
            <span className="github-text">GitHub</span>
          </a>
        </div>
      </div>
      <div className="main-content">
        <div className="info-card-welcome">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout; 