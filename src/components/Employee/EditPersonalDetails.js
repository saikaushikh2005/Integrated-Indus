import React, { useState } from 'react';
import '../../styles/Employee/EditPersonalDetails.css';
import Sidebar from '../Employee/EmployeeSidebar';

const EditPersonalDetailsPage = () => {
    const [details, setDetails] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        username: 'johndoe',
        password: '',
        phoneNumber: '123-456-7890',
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDetails({ ...details, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Updated details:', details);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="dashboard-container">
            <Sidebar/>
            <div className="main-content">
                <header className="headerreq">
                    <h1>Edit Personal Details</h1>
                </header>
                <section className="edit-details-section" id="edit-details">
                    <h2 className="edit-details-heading">Update Your Information</h2>
                    <form className="edit-details-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={details.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={details.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={details.username}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={details.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="submit-btn">Request Edit</button>
                    </form>
                </section>
                {isModalOpen && (
                    <div className="modal">
                        <div className="modal-content">
                            <span className="close-btn" onClick={closeModal}>&times;</span>
                            <p>Your request has been submitted!</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EditPersonalDetailsPage;