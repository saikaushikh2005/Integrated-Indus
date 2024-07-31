import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Employee/EmployeeSidebar.css'; 
import LogoImg from '../../assets/logo.png'; 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><img src={LogoImg} alt="Indus Logo" className="logo-image" /></li>
          <li><NavLink to="/Employee/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/Employee/tasks">Deadlines</NavLink></li>
          <li><NavLink to="/Employee/apply-leave">Leave Application</NavLink></li>
          <li><NavLink to="/Employee/feedback">Feedback</NavLink></li>
          <li><NavLink to="/Employee/profile">Edit Personal Details</NavLink></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;