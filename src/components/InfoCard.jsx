import React from 'react';
import '../css/navBarlogo.css';

const InfoCard = ({ title, children, className = '' }) => {
    return (
        <div className={`info-card ${className}`}>
            {title && <div className="title">{title}</div>}
            {children}
        </div>
    );
};

export default InfoCard; 