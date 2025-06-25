import './../css/navBarlogo.css';
import InfoCard from './InfoCard';
import { Link } from 'react-router-dom';

const LogoColapsebleNavBar = () => {
    return (
        <div className="logo-colapseble-nav-bar main-glass-bg">
            {/* Animated Background Shapes */}
            <div className="floating-shape-1"></div>
            <div className="floating-shape-2"></div>
            <div className="floating-shape-3"></div>
            <div className="floating-shape-4"></div>
            <div className="floating-shape-5"></div>
            <div className="floating-shape-6"></div>
            <div className="floating-shape-7"></div>
            <div className="floating-shape-8"></div>
            <div className="floating-shape-9"></div>
            <div className="floating-shape-10"></div>
            
            <div className="nav-bar">
                <div className="current-page-name">Home</div>
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
                    <InfoCard title="Welcome">
                        <p>Welcome to my portfolio!</p>
                    </InfoCard>
                </div>
                <div className="info-card-grid">
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                        <InfoCard title="About Me">
                            <p>My name is Martin Dørmænen and I am a frontend developer. My goal is to become a fullstack developer with a focus on cybersecurity and ethical hacking.</p>
                        </InfoCard>
                    </Link>
                    <Link to="/skills" style={{ textDecoration: 'none' }}>
                        <InfoCard title="Skills">
                            <ul>
                                <li>React</li>
                                <li>JavaScript</li>
                                <li>CSS</li>
                            </ul>
                        </InfoCard>
                    </Link>
                    <Link to="/projects" style={{ textDecoration: 'none' }}>
                        <InfoCard title="Projects">
                            <p>here are some examples of my work</p>
                        </InfoCard>
                    </Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                        <InfoCard title="Contact">
                            <p>Get in touch with me here:</p>
                            <ul>
                                <li>Email: Martin.960@hotmail.com </li>
                                <li>Phone: +47 988 65 987</li>
                            </ul>
                        </InfoCard>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LogoColapsebleNavBar;