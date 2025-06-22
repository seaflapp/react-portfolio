import React from 'react';
import MainLayout from './MainLayout';

const ContactPage = () => (
  <MainLayout pageTitle="Contact">
    <h1>Contact</h1>
    <p>You can reach me via email or phone.</p>
    <ul>
        <li>Email: <a href="mailto:martin.digitaletalenter@gmail.com">martin.digitaletalenter@gmail.com</a></li>
        <li>Phone: <a href="tel:+47 988 65 987">+47 988 65 987</a></li>
    </ul>

  </MainLayout>
);

export default ContactPage; 