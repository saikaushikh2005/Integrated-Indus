import React, { useState } from 'react';
import '../../styles/Employee/Deadlines.css';
import Sidebar from './EmployeeSidebar';

const DeadlinesPage = () => {
    const [deadlines, setDeadlines] = useState([
        { id: 1, task: 'Finish project report', dueDate: '2024-07-30', isComplete: false },
        { id: 2, task: 'Submit expense reports', dueDate: '2024-08-05', isComplete: false },
        { id: 3, task: 'Complete code review', dueDate: '2024-08-10', isComplete: false },
    ]);

    const markAsComplete = (id) => {
        setDeadlines(deadlines.map(deadline =>
            deadline.id === id ? { ...deadline, isComplete: true } : deadline
        ));
    };

    return (
        <div className="dashboard-container">
            <Sidebar/>
            <div className="main-content">
                <header className="headerde">
                    <h1>Deadlines</h1>
                </header>
                <section className="deadlines-section" id="deadlines">
                    <h2>Your Deadlines</h2>
                    <ul className="deadlines-list">
                        {deadlines.map(deadline => (
                            <li key={deadline.id} className={`deadline-item ${deadline.isComplete ? 'completed' : ''}`}>
                                <div className="deadline-task">
                                    <strong>{deadline.task}</strong>
                                    <span className="deadline-date">Due: {deadline.dueDate}</span>
                                </div>
                                {!deadline.isComplete && (
                                    <button
                                        className="mark-complete-btn"
                                        onClick={() => markAsComplete(deadline.id)}
                                    >
                                        Mark as Complete
                                    </button>
                                )}
                                {deadline.isComplete && (
                                    <span className="status">Completed</span>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default DeadlinesPage;