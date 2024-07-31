import React, { useState } from 'react';
import '../../styles/Manager/LeaveRequest.css';
import Sidebar from '../Manager/ManagerSidebar';

const ApplyLeave = () => {
    const [formData, setFormData] = useState({
        reason: '',
        startDate: '',
        endDate: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsModalOpen(true); 
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="dashboard-container">
            <Sidebar />

            <div className="main-content">
                <header className="headerle">
                    <h1>Leave Application</h1>
                </header>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="reason">Reason</label>
                            <textarea
                                id="reason"
                                name="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                rows="4"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startDate">Start Date</label>
                            <input
                                id="startDate"
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="endDate">End Date</label>
                            <input
                                id="endDate"
                                type="date"
                                name="endDate"
                                value={formData.endDate}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit">Submit Leave Request</button>
                    </form>
                </div>
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-btn" onClick={closeModal}>&times;</span>
                            <p>Leave application submitted successfully!</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplyLeave;