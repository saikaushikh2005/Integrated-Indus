import React, { useState } from 'react';
import '../../styles/Employee/EmpFeedback.css';
import Sidebar from '../Employee/EmployeeSidebar';

const FeedbackPage = () => {
    const [newFeedback, setNewFeedback] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleFeedbackChange = (e) => {
        setNewFeedback(e.target.value);
    };

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        if (newFeedback.trim() === '') {
            setError('Feedback cannot be empty');
            return;
        }

        // Simulate sending feedback
        setTimeout(() => {
            setSuccessMessage('Feedback submitted successfully!');
            setNewFeedback('');
            setError('');
            setShowPopup(true); // Show popup on success
        }, 500);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="dashboard-container">
            <Sidebar/>
            <div className="main-content">
                <header className="headerfeed">
                    <h1>Feedback</h1>
                </header>
                <section className="send-feedback-section">
                    <h2 className="send-feedback-heading">Send Feedback</h2>
                    <form className="send-feedback-form" onSubmit={handleFeedbackSubmit}>
                        <textarea
                            value={newFeedback}
                            onChange={handleFeedbackChange}
                            placeholder="Write your feedback here..."
                            rows="6"
                        />
                        {error && <span className="error">{error}</span>}
                        {successMessage && <span className="success">{successMessage}</span>}
                        <button type="submit" className="send-feedback-button">Submit Feedback</button>
                    </form>
                </section>
            </div>
            {showPopup && (
                <div className="popup">
                    <h3>Feedback Submitted</h3>
                    <p>Thank you for your feedback!</p>
                    <button onClick={closePopup}>Close</button>
                </div>
            )}
        </div>
    );
};

export default FeedbackPage;
    