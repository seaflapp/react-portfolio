import React from 'react';
import MainLayout from './MainLayout';
import InfoCard from './InfoCard';

const AboutPage = () => (
  <MainLayout pageTitle="About Me">
    <InfoCard title="About Me" className="about-info-card">
      <h1>My name is Martin Dørmænen</h1>
      <p>This is the About Me page with more details about the developer.</p>
      <p>this is a test</p>
    </InfoCard>
  </MainLayout>
);

export default AboutPage; 