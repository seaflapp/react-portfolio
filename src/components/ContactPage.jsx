import React from 'react';
import MainLayout from './MainLayout';
import InfoCard from './InfoCard';

const ContactPage = () => (
  <MainLayout pageTitle="Contact">
    <InfoCard title="Contact" className="about-info-card">
      <h1>Contact</h1>
      <p>You can reach me via email or phone.</p>
      <ul>
          <li>Email: <a href="mailto:Martin.960@hotmail.com ">Martin.960@hotmail.com </a></li>
          <li>Phone: <a href="tel:+47 988 65 987">+47 988 65 987</a></li>
      </ul>
    </InfoCard>
  </MainLayout>
);

export default ContactPage; 