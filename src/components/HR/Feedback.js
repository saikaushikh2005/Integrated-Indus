import React, { useState } from 'react';
import '../../styles/HR/HRFeedback.css'
import Sidebar from '../HR/HRSidebar';

const initialFeedbackData = [
  {
    id: 1,
    name: 'Naveen',
    message: 'The new project management tool is really helpful!',
  },
  {
    id: 2,
    name: 'Parthiban',
    message: 'I appreciate the flexible working hours.',
  },
  {
    id: 3,
    name: 'Thenarrasu',
    message: 'The recent team-building activity was great!',
  },
  {
    id: 4,
    name: 'Sai',
    message: 'The cafeteria could use more vegetarian options.',
  },
  {
    id: 5,
    name: 'Kaushik',
    message: 'The onboarding process for new employees needs improvement.',
  },
];

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState(initialFeedbackData);

  const markAsRead = (id) => {
    setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
  };

  return (
    <div className="feedback-container">
      <Sidebar />
      <div className="dashboard-content">
        <div className="feedback-list">
          <h1 className="feedback-list-header">Employee Feedback</h1>
          <div className="feedback-grid">
            {feedbacks.map(feedback => (
              <div key={feedback.id} className="feedback-card">
                <h2>{feedback.name}</h2>
                <p>{feedback.message}</p>
                <button onClick={() => markAsRead(feedback.id)} className="mark-read-button">
                  Mark as Read
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
