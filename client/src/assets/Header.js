// // src/components/Header.js

// import React, { useState } from 'react';
// import './Header.css';
// import { FaTh, FaPlus, FaBell, FaQuestionCircle } from 'react-icons/fa';

// // Sidebar Component
// const Sidebar = () => {
//     return (
//         <aside className="sidebar">
//             <div className="sidebar-header">Boards</div>
//             <div className="sidebar-content">
//                 <a href="#templates">Templates</a>
//                 <a href="#home">Home</a>
//                 <a href="#workspaces">Workspaces</a>

//                 <h3>Trello Workspace</h3>
//                 <ul>
//                     <li>Boards</li>
//                     <li>Highlights</li>
//                     <li>Views</li>
//                     <li>Members</li>
//                     <li>Settings</li>
//                 </ul>

//                 <div className="premium">
//                     <p>
//                         Try Trello Premium! Get unlimited boards, all the views, 
//                         unlimited automation, and more.
//                     </p>
//                     <button className="trial-button">Start free trial</button>
//                 </div>

//                 <h4>Most popular templates</h4>
//                 <ul>
//                     <li>Basic Board</li>
//                     <li>Kanban Template</li>
//                     <li>Daily Task Management</li>
//                     <li>Remote Team Hub</li>
//                 </ul>

//                 <h4>Recently Viewed</h4>
//                 <p>My Trello Board</p>

//                 <h4>Your Workspaces</h4>
//                 <ul>
//                     <li>Trello Workspace</li>
//                     <li>Boards</li>
//                     <li>Views</li>
//                     <li>Members (1)</li>
//                     <li>Settings</li>
//                 </ul>

//                 <button className="upgrade-button">Upgrade</button>
//                 <button className="create-board-button">Create new board</button>
//             </div>
//         </aside>
//     );
// };

// // Header Component
// const Header = () => {
//     const [isSidebarOpen, setSidebarOpen] = useState(false);

//     const toggleSidebar = () => {
//         setSidebarOpen(!isSidebarOpen);
//         console.log("Sidebar Open:", !isSidebarOpen); // Debugging line
//     };

//     return (
//         <div className="header-container">
//             {isSidebarOpen && <Sidebar />} {/* Show Sidebar if open */}
//             <header className="header">
//                 <div className="header-left">
//                     <FaTh className="icon grid-icon" onClick={toggleSidebar} />
//                     <h2 className="logo">Trello</h2>
//                     <nav className="nav-links">
//                         <a href="#workspaces">Workspaces <span className="dropdown-icon">▼</span></a>
//                         <a href="#recent">Recent <span className="dropdown-icon">▼</span></a>
//                         <a href="#starred">Starred <span className="dropdown-icon">▼</span></a>
//                         <a href="#more">More <span className="dropdown-icon">▼</span></a>
//                     </nav>
//                 </div>
//                 <div className="header-right">
//                     <button className="add-button"><FaPlus /></button>
//                     <input type="text" className="search-input" placeholder="Search" />
//                     <FaBell className="icon" />
//                     <FaQuestionCircle className="icon" />
//                     <div className="profile-icon">TK</div>
//                 </div>
//             </header>
//         </div>
//     );
// };

// export default Header;
// src/components/Header.js

import React, { useState } from 'react';
import './Header.css';
import { FaTh, FaPlus, FaBell, FaQuestionCircle } from 'react-icons/fa';

// Sidebar Component
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

// Header Component
const Header = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
        console.log("Sidebar Open:", !isSidebarOpen); // Debugging line
    };

    return (
        <div className="header-container">
            {isSidebarOpen && <Sidebar />} {/* Show Sidebar if open */}
            <header className="header">
                <div className="header-left">
                    <FaTh className="icon grid-icon" onClick={toggleSidebar} />
                    <h2 className="logo" onClick={toggleSidebar}>Trello</h2> {/* Added onClick to logo */}
                    <nav className="nav-links">
                        <a href="#workspaces">Workspaces <span className="dropdown-icon">▼</span></a>
                        <a href="#recent">Recent <span className="dropdown-icon">▼</span></a>
                        <a href="#starred">Starred <span className="dropdown-icon">▼</span></a>
                        <a href="#more">More <span className="dropdown-icon">▼</span></a>
                    </nav>
                </div>
                <div className="header-right">
                    <button className="add-button"><FaPlus /></button>
                    <input type="text" className="search-input" placeholder="Search" />
                    <FaBell className="icon" />
                    <FaQuestionCircle className="icon" />
                    <div className="profile-icon">TK</div>
                </div>
            </header>
        </div>
    );
};

export default Header;
