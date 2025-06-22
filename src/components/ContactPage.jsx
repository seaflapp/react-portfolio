import React from 'react';
import MainLayout from './MainLayout';

const ContactPage = () => (
  <MainLayout pageTitle="Contact">
    <h1>Contact</h1>
    <p>You can reach me via email or phone.</p>
    <ul>
        <li>Email: <a href="mailto:contact@example.com">contact@example.com</a></li>
        <li>Phone: <a href="tel:+1234567890">+1234567890</a></li>
    </ul>

  </MainLayout>
);

export default ContactPage; 