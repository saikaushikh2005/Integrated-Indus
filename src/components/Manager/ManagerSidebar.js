import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Manager/ManagerSidebar.css'
import logo from '../../assets/logo.png'
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><img src={logo} alt="Indus Logo" className="logo-image" /></li>
          <li><NavLink to="/Manager/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/Manager/leave-approval">Leave Approval</NavLink></li>
          <li><NavLink to="/Manager/leave-application">Leave Request</NavLink></li>
          <li><NavLink to="/Manager/team-list">Team List</NavLink></li>
          <li><NavLink to="/Manager/feedback">Feedback</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;