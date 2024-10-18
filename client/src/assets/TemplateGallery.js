// src/components/TemplateGallery.js
import React from 'react';
import './TemplateGallery.css';

const templates = [
    "Basic Board",
    "Kanban Template",
    "Daily Task Management...",
    "Remote Team Hub"
];

const TemplateGallery = () => {
    return (
        <div className="template-gallery">
            {templates.map((template, index) => (
                <div className="template-card" key={index}>
                    {template}
                </div>
            ))}
        </div>
    );
};

export default TemplateGallery;
