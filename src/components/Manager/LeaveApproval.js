import React, { useState } from 'react';
import '../../styles/Manager/LeaveApproval.css';
import Sidebar from '../Manager/ManagerSidebar';

const LeaveApproval = () => {
  const [leaveRequests, setLeaveRequests] = useState([
    { 
      id: 1, 
      employeeName: 'John Doe', 
      position: 'Software Engineer', 
      department: 'IT', 
      leaveType: 'Annual Leave', 
      startDate: '2024-07-30', 
      endDate: '2024-08-02', 
      reason: 'Family vacation' 
    },
    { 
      id: 2, 
      employeeName: 'Jane Smith', 
      position: 'Product Manager', 
      department: 'Product', 
      leaveType: 'Sick Leave', 
      startDate: '2024-08-01', 
      endDate: '2024-08-05', 
      reason: 'Medical reasons' 
    }
  ]);

  const acceptLeave = (id) => {
    setLeaveRequests(leaveRequests.filter(request => request.id !== id));
  };

  const deleteLeave = (id) => {
    setLeaveRequests(leaveRequests.filter(request => request.id !== id));
  };

  return (
    <div className="leave-approval-container">
      <Sidebar />
      <main className="leave-main-content">
        <h1 className="headd">LEAVE APPROVAL</h1>
        <div className="leave-requests">
          {leaveRequests.map(request => (
            <div key={request.id} className="leave-request">
              <div className="request-details">
                <p>Employee Name: {request.employeeName}</p>
                <p>Position: {request.position}</p>
                <p>Start Date: {request.startDate}</p>
                <p>End Date: {request.endDate}</p>
                <p>Reason: {request.reason}</p>
              </div>
              <div className="request-actions">
                <button onClick={() => acceptLeave(request.id)} className="accept-button">Accept and Pass</button>
                <button onClick={() => deleteLeave(request.id)} className="delete-button">Deny</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LeaveApproval;