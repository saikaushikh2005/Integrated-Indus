import React from 'react';
import '../../styles/Employee/Employee.css';
import Sidebar from './EmployeeSidebar';;

const EmployeeDashboard = () => {
    const employee = {
        name: 'John Doe',
        role: 'Software Engineer',
        completedTasks: 18,
        totalTasks: 25,
    };

    const completedPercentage = (employee.completedTasks / employee.totalTasks) * 100;
    const notCompletedTasks = employee.totalTasks - employee.completedTasks;

    return (
        <div className="dashboard-container">
            <Sidebar/>
            <div className="main-content">
                <header className="headeremp">
                    <h1>Employee Dashboard</h1>
                </header>
                <section className="employee-info" id="dashboard">
                    <h2>Welcome, {employee.name}</h2>
                    <p className="employee-role">Role: {employee.role}</p>
                </section>
                <section className="tasks-info" id="deadlines">
                    <h2>Task Completion</h2>
                    <div className="task-stats">
                        <div className="task-stat">
                            <span className="task-completed">{employee.completedTasks}</span>
                            <span className="task-label">Completed Tasks</span>
                        </div>
                        <div className="task-stat">
                            <span className="task-count">{notCompletedTasks}</span>
                            <span className="task-label">Not Completed Tasks</span>
                        </div>
                    </div>
                </section>
                <section className="performance-info" id="performance">
                    <h2>Overall Performance</h2>
                    <div className="performance-bar">
                        <div
                            className="performance-progress"
                            style={{ width: `${completedPercentage}%` }}
                        ></div>
                    </div>
                    <p>{completedPercentage.toFixed(2)}% of tasks completed</p>
                </section>
            </div>
        </div>
    );
};

export default EmployeeDashboard;