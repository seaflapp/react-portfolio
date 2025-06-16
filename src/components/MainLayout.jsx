import './../css/navBarlogo.css';
import { Link } from 'react-router-dom';

const MainLayout = ({ children, pageTitle }) => (
  <div className="logo-colapseble-nav-bar">
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
    </div>
    <div className="main-content">
      <div className="info-card-welcome">
        {children}
      </div>
    </div>
  </div>
);

export default MainLayout; 