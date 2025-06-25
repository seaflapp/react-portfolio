import React from 'react';
import MainLayout from './MainLayout';
import InfoCard from './InfoCard';

const SkillsPage = () => (
  <MainLayout pageTitle="Skills">
    <div className="skills-grid-container">
      <div className="skills-top-row">
        <InfoCard title="Frontend" className="about-info-card">
          <ul>
            <li><span className="skill-icon">⚛️</span>React</li>
            <li><span className="skill-icon">🟨</span>JavaScript</li>
            <li><span className="skill-icon">🎨</span>CSS</li>
            <li><span className="skill-icon">🌐</span>HTML</li>
          </ul>
        </InfoCard>
        
        <InfoCard title="Backend" className="about-info-card">
          <ul>
            <li><span className="skill-icon">🟢</span>Node.js</li>
            <li><span className="skill-icon">🗄️</span>SQL</li>
          </ul>
        </InfoCard>
      </div>
      
      <div className="skills-bottom-row">
        <InfoCard title="Others" className="about-info-card">
          <ul>
            <li><span className="skill-icon">📝</span>Git</li>
            <li><span className="skill-icon">🐧</span>Linux</li>
            <li><span className="skill-icon">🪟</span>Windows</li>
            <li><span className="skill-icon">💻</span>VSCode</li>
            <li><span className="skill-icon">✏️</span>Cursor</li>
            <li><span className="skill-icon">✏️</span>Figma</li>
          </ul>
        </InfoCard>
      </div>
    </div>
  </MainLayout>
);

export default SkillsPage; 