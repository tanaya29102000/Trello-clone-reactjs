// src/components/JiraSection.js
import React from 'react';
import './JiraSection.css';

const jiraTemplates = [
    "Project Management",
    "Scrum",
    "Bug Tracking",
    "Web Design Process"
];

const JiraSection = () => {
    return (
        <div className="jira-section">
            <h2>Jira</h2>
            <p>Start with a template and let Jira handle the rest with customizable workflows</p>
            <div className="jira-templates">
                {jiraTemplates.map((template, index) => (
                    <div className="jira-card" key={index}>
                        {template}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JiraSection;
