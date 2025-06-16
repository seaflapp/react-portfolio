import React from 'react';
import '../css/navBarlogo.css';

const InfoCard = ({ title, children }) => {
    return (
        <div className="info-card">
            {title && <div className="title">{title}</div>}
            {children}
        </div>
    );
};

export default InfoCard; 