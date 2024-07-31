import React from 'react';
import Sidebar from '../HR/HRSidebar';
import '../../styles/HR/HRDashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <Sidebar />
        <main className="dashboard-main-content">
        <h1 className='heades'>HR DASHBOARD</h1>
          <div className="flex-item">
            <h2>Employee Overview</h2>
            <p>Get a comprehensive view of all employees, their roles, and departments. Monitor performance metrics and stay updated on the latest employee statistics.</p>
            <blockquote>
              "To win in the marketplace you must first win in the workplace." – Doug Conant
            </blockquote>
          </div>
          <div className="flex-item">
            <h2>Leave Requests</h2>
            <p>You are responsible for approving or rejecting leave requests. Ensure that the workforce is well-balanced by managing the leave schedule effectively.</p>
            <blockquote>
              "Take rest; a field that has rested gives a bountiful crop." – Ovid
            </blockquote>
          </div>
          <div className="flex-item">
            <h2>Create New Employee</h2>
            <p>Add new members to the team seamlessly. Fill in the necessary details and integrate them into the workforce quickly and efficiently.</p>
            <blockquote>
              "The strength of the team is each individual member. The strength of each member is the team." – Phil Jackson
            </blockquote>
          </div>
          <div className="flex-item">
            <h2>Employee Feedback</h2>
            <p>Read and manage feedback from various employees. Use the insights to improve workplace environment and boost employee satisfaction.</p>
            <blockquote>
              "Feedback is the breakfast of champions." – Ken Blanchard
            </blockquote>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
