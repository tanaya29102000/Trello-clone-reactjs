import React, { useState, useEffect } from "react";
import "./Header.css";
import { FaTh, FaPlus, FaBell, FaQuestionCircle } from "react-icons/fa";


// Sidebar Component
const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-header">Boards</div>
    <div className="sidebar-content">
     <ul class="sidebar-menu">
        <li>
            <img src="/images/img.png" alt="Boards"/>
            <span>Boards</span>
        </li>
        <li>
            <img src="/images/template.png" alt="template"/>
            <span>Templates</span>
        </li>
        <li>
            <img src="/images/home.png" alt="home"/>
            <span>Home</span>
        </li>
     </ul>

      <div className="workspace-logo">T</div>
      <h3>Trello Workspace</h3>
      <ul class="sidebar-menu">
  <li>
    <img src="/images/img.png" alt="Boards" />
    <span>Boards</span>
  </li>
  <li>
    <img src="/images/heart.png" alt="Highlights" />
    <span>Highlights</span>
  </li>
  <li>
    <img src="/images/views.png" alt="Views" />
    <span>Views</span>
  </li>
  <li>
    <img src="/images/members.png" alt="Members" />
    <span>Members</span>
  </li>
  <li>
    <img src="/images/setting.png" alt="Settings" />
    <span>Settings</span>
  </li>
</ul>



      <div className="premium">
        <p>
          Try Trello Premium! Get unlimited boards, all the views, unlimited
          automation, and more.
        </p>
        <button className="trial-button">Start free trial</button>
      </div>
    </div>
  </aside>
);

// Account Sidebar Component with Theme Switcher
const AccountSidebar = ({ changeTheme }) => (
  <aside className="account-sidebar">
    <h3>Account</h3>
    <p>TANAYA KANERKAR</p>
    <p>tanayakanerkar@gmail.com</p>
    <a>Switch accounts</a>
    <br />
    <br />
    <a>Manage account</a>
    <hr />
    <h4>Trello</h4>
    <ul>
      <li>Profile and visibility</li>
      <li>Activity</li>
      <li>Cards</li>
      <li>Settings</li>
    </ul>
    <hr />
    <a>Create Workspace</a>
    <br />
    <hr />
    <a>Help</a>
    <br />
    <br />
    <a>Shortcuts</a>
    <hr />
    <h4>Theme</h4>
    <ul>
      <li onClick={() => changeTheme("light")}>Light</li>
      <li onClick={() => changeTheme("dark")}>Dark</li>
      <li onClick={() => changeTheme("system")}>Match System</li>
    </ul>
    <hr />
    <button>Log out</button>
  </aside>
);

// Header Component
const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isAccountSidebarOpen, setAccountSidebarOpen] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleAccountSidebar = () => setAccountSidebarOpen(!isAccountSidebarOpen);

  const handleBoardClick = (boardName) => setSelectedBoard(boardName);

  // Theme change handler
  const changeTheme = (theme) => {
    if (theme === "system") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  // Apply system theme on first render
  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }, []);

  return (
    <div className={`page-container ${isSidebarOpen ? "sidebar-open" : ""}`}>
      <header className="header">
        <div className="header-left">
          <FaTh className="icon grid-icon" onClick={toggleSidebar} />
          <h2 className="logo">Trello</h2>
          <nav className="nav-links">
            <a href="#workspaces">Workspaces <span className="dropdown-icon">▼</span></a>
            <a href="#recent">Recent <span className="dropdown-icon">▼</span></a>
            <a href="#starred">Starred <span className="dropdown-icon">▼</span></a>
            <a href="#more">More <span className="dropdown-icon">▼</span></a>
          </nav>
        </div>
        <div className="header-right">
          <button className="add-button">
            <FaPlus />
          </button>
          <input type="text" className="search-input" placeholder="Search" />
          <FaBell className="icon" />
          <FaQuestionCircle className="icon" />
          <div className="profile-icon" onClick={toggleAccountSidebar}>
            TK
          </div>
        </div>
      </header>

      <div className="content">
        {isSidebarOpen && <Sidebar />}
        {isAccountSidebarOpen && <AccountSidebar changeTheme={changeTheme} />}
        <div className="workspace-header">
          <div className="workspace-logo">T</div>
          <div className="workspace-info">
            <h3>Trello Workspace</h3>
            <p className="private-label">Private</p>
          </div>
        </div>

        <div className="cart-section">
          <div className="cart-content">
            <h4>Most popular templates</h4>
            <p>
              Get going faster with a template from the Trello community or
              <label htmlFor="category-select" className="category-label"></label>
              <select id="category-select" className="category-dropdown">
                <option value="popular">Choose category</option>
                <option value="popular">Popular</option>
                <option value="small-business">Small Business</option>
                <option value="design">Design</option>
                <option value="education">Education</option>
              </select>
            </p>

            <div className="template-cards">
              <div className="card">Basic Board</div>
              <div className="card">Kanban Template</div>
              <div className="card">Daily Task Management</div>
              <div className="card">Remote Team Hub</div>
            </div>

            <h4>Recently Viewed</h4>
            <div className="template-cards">
              <div className="card" onClick={() => handleBoardClick("My Trello Board")}>
                My Trello Board
              </div>
              <div className="card">Create new Board</div>
            </div>

            {selectedBoard && (
              <div className="selected-board">
                <h5>Selected Board: {selectedBoard}</h5>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
