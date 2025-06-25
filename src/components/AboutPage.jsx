import React from 'react';
import MainLayout from './MainLayout';
import InfoCard from './InfoCard';

const AboutPage = () => (
  <MainLayout pageTitle="About Me">
    <InfoCard title="About Me" className="about-info-card">
      <h1>My name is Martin Dørmænen</h1>
      <p>And I am a student at Digitale Talenter in Norway, where i am currently learning frontend development and a bit of backend development. my short term goal is to become a fullstack developer that i want to turn into a career as a ethical hacker.<br></br></p>
      <p>I am a very curious person that likes to learn new things, and i am always looking for new challenges and opportunities to grow as a person and as a developer. I really enjoy learning how code works so i can understand it and puting the work into practice.</p>
      <p>During my free time i like to play games mostly (co-op, survival, horror, etc), make food since i am a picky eater and its a good way to find new foods i like, hang out with my friends online and offline, and take short walks to clear my mind and get fresh air just for the trip and after working on my personal projects.</p>
    </InfoCard>
  </MainLayout>
);

export default AboutPage; 