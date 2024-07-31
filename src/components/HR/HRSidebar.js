import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/HR/HRSidebar.css'; 
import logo from '../../assets/logo.png'; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><img src={logo} alt="Indus Logo" className="logo-image" /></li>
          <li><NavLink to="/hr/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/hr/leave-approval">Leave Approval</NavLink></li>
          <li><NavLink to="/hr/employee-list">Employee List</NavLink></li>
          <li><NavLink to="/hr/create-user">Create Employee</NavLink></li>
          <li><NavLink to="/hr/feedback">Feedback</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;