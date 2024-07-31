import React from 'react';
import '../../styles/Manager/ManagerDashboard.css';

const ManagerDashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <header className="dashboard-header">
          <h1>Manager Dashboard</h1>
        </header>
        <main>
          <section className="welcome">
            <h2>Welcome, Manager!</h2>
          </section>
          <section className="motivational-quote">
            <p>"The strength of the team is each individual member. The strength of each member is the team." - Phil Jackson</p>
          </section>
          <section className="functionalities">
            <div className="functionality">
              <h3>Approve or deny leave requests</h3>
              <p>Manage leave requests from your team. Approve or deny requests and ensure proper documentation of leaves.</p>
            </div>
            <div className="functionality">
              <h3>View Team information</h3>
              <p>Access detailed information about your team members, including their roles, responsibilities, and performance metrics.</p>
            </div>
            <div className="functionality">
              <h3>Provide feedback to employees</h3>
              <p>Give constructive feedback to your team members. Help them grow by recognizing their strengths and identifying areas for improvement.</p>
            </div>
            <div className="functionality">
              <h3>Monitor overall team performance</h3>
              <p>Track the performance of your team with detailed reports and analytics. Identify trends and make informed decisions to drive success.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ManagerDashboard;