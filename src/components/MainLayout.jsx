import './../css/navBarlogo.css';
import { Link } from 'react-router-dom';

const MainLayout = ({ children, pageTitle }) => (
  <div className="logo-colapseble-nav-bar">
    {/* Animated Background Shapes */}
    <div className="floating-shape-1"></div>
    <div className="floating-shape-2"></div>
    <div className="floating-shape-3"></div>
    <div className="floating-shape-4"></div>
    <div className="floating-shape-5"></div>
    <div className="floating-shape-6"></div>
    
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

export default MainLayout; 