import React from 'react';
import MainLayout from './MainLayout';
import InfoCard from './InfoCard';

const SkillsPage = () => (
  <MainLayout pageTitle="Skills">
    <div className="skills-grid-container">
      <div className="skills-top-row">
        <InfoCard title="Frontend">
          <ul>
            <li><span className="skill-icon">⚛️</span>React</li>
            <li><span className="skill-icon">🟨</span>JavaScript</li>
            <li><span className="skill-icon">🎨</span>CSS</li>
            <li><span className="skill-icon">🌐</span>HTML</li>
            <li><span className="skill-icon">🔷</span>TypeScript</li>
            <li><span className="skill-icon">🎯</span>Bootstrap</li>
            <li><span className="skill-icon">📱</span>Responsive Design</li>
          </ul>
        </InfoCard>
        
        <InfoCard title="Backend">
          <ul>
            <li><span className="skill-icon">🟢</span>Node.js</li>
            <li><span className="skill-icon">🚀</span>Express.js</li>
            <li><span className="skill-icon">🗄️</span>SQL</li>
            <li><span className="skill-icon">🍃</span>MongoDB</li>
            <li><span className="skill-icon">🔗</span>REST APIs</li>
            <li><span className="skill-icon">🔐</span>Authentication</li>
            <li><span className="skill-icon">💾</span>Database Design</li>
          </ul>
        </InfoCard>
      </div>
      
      <div className="skills-bottom-row">
        <InfoCard title="Others">
          <ul>
            <li><span className="skill-icon">📝</span>Git</li>
            <li><span className="skill-icon">🐧</span>Linux</li>
            <li><span className="skill-icon">🪟</span>Windows</li>
            <li><span className="skill-icon">💻</span>VSCode</li>
            <li><span className="skill-icon">✏️</span>Cursor</li>
            <li><span className="skill-icon">🐳</span>Docker</li>
            <li><span className="skill-icon">🔄</span>Agile/Scrum</li>
          </ul>
        </InfoCard>
      </div>
    </div>
  </MainLayout>
);

export default SkillsPage; 