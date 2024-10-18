import React from 'react';
import './Sidebar.css'; // CSS for sidebar styling

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">Boards</div>
            <div className="sidebar-content">
                <a href="#templates">Templates</a>
                <a href="#home">Home</a>
                <a href="#workspaces">Workspaces</a>

                <h3>Trello Workspace</h3>
                <ul>
                    <li>Boards</li>
                    <li>Highlights</li>
                    <li>Views</li>
                    <li>Members</li>
                    <li>Settings</li>
                </ul>

                <div className="premium">
                    <p>
                        Try Trello Premium! Get unlimited boards, all the views, 
                        unlimited automation, and more.
                    </p>
                    <button className="trial-button">Start free trial</button>
                </div>

                <h4>Most popular templates</h4>
                <ul>
                    <li>Basic Board</li>
                    <li>Kanban Template</li>
                    <li>Daily Task Management</li>
                    <li>Remote Team Hub</li>
                </ul>

                <h4>Recently Viewed</h4>
                <p>My Trello Board</p>

                <h4>Your Workspaces</h4>
                <ul>
                    <li>Trello Workspace</li>
                    <li>Boards</li>
                    <li>Views</li>
                    <li>Members (1)</li>
                    <li>Settings</li>
                </ul>

                <button className="upgrade-button">Upgrade</button>
                <button className="create-board-button">Create new board</button>
            </div>
        </aside>
    );
};

export default Sidebar;
