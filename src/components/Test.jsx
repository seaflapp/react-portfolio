import './../css/navBarlogo.css';
import InfoCard from './InfoCard';

const LogoColapsebleNavBar = () => {
    return (
        <div className="logo-colapseble-nav-bar">
            <div className="nav-bar">
                <div className="current-page-name">Current page name</div>
            </div>
            <div className="nav-bar-logo">
                <div className="logo-frame-wrapper">
                    <div className="logo-frame">
                        <div className="wip" />
                    </div>
                </div>
                <div className="home-wrapper">
                    <div className="home">Home</div>
                </div>
                <div className="home-wrapper">
                    <div className="home">About Me
                    </div>
                </div>
                <div className="home-wrapper">
                    <div className="home">Skills</div>
                </div>
                <div className="home-wrapper">
                    <div className="home">Projects</div>
                </div>
                <div className="contact-me-wrapper">
                    <div className="home">Contact Me</div>
                </div>
            </div>
            <div className="main-content">
                <div className="info-card-welcome">
                    <InfoCard title="Welcome">
                        <p>Welcome to my portfolio!</p>
                    </InfoCard>
                </div>
                <div className="info-card-grid">
                    <InfoCard title="About Me">
                        <p>I am a passionate developer...</p>
                    </InfoCard>
                    <InfoCard title="Skills">
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>CSS</li>
                        </ul>
                    </InfoCard>
                    <InfoCard title="Projects">
                        <p>Check out my latest projects...</p>
                    </InfoCard>
                    <InfoCard title="Contact">
                        <p>Get in touch with me here:</p>
                        <ul>
                            <li>Email:</li>
                            <li>Phone:</li>
                        </ul>
                    </InfoCard>
                </div>
            </div>
        </div>
    );
};

export default LogoColapsebleNavBar;