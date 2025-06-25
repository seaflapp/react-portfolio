import React from 'react';
import MainLayout from './MainLayout';
import InfoCard from './InfoCard';

const ProjectsPage = () => (
  <MainLayout pageTitle="Projects">
    <InfoCard title="Projects" className="about-info-card">
      <h1>Here are some of my projects</h1>
      <p>Here are some of my projects with more details.</p>
    </InfoCard>
  </MainLayout>
);

export default ProjectsPage; 