import React, { useState } from 'react';
import '../../styles/HR/Employee.css';
import Sidebar from '../HR/HRSidebar';

const initialEmployeeData = [
  {
    id: 1,
    name: 'Thenarrasu',
    email: 'thenarrasu@indusit.com',
    phone: '123-456-7890',
    role: 'FrontEnd Developer',
    department: 'IT',
  },
  {
    id: 2,
    name: 'Parthiban',
    email: 'parthiban2004@indusit.com',
    phone: '098-765-4321',
    role: 'BackEnd Developer',
    department: 'IT',
  },
  {
    id: 3,
    name: 'Sai Kaushik',
    email: 'saik@indusit.com',
    phone: '567-890-1234',
    role: 'Full Stack Developer',
    department: 'IT',
  },
];

const EmployeeList = () => {
  const [employees, setEmployees] = useState(initialEmployeeData);
  const [isEditing, setIsEditing] = useState(null);
  const [editFormData, setEditFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    department: '',
  });

  const handleDelete = (id) => {
    const updatedEmployees = employees.filter(employee => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  const handleEdit = (id) => {
    const employee = employees.find(emp => emp.id === id);
    setIsEditing(id);
    setEditFormData(employee);
  };

  const handleSave = () => {
    const updatedEmployees = employees.map(employee =>
      employee.id === isEditing ? editFormData : employee
    );
    setEmployees(updatedEmployees);
    setIsEditing(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleCancel = () => {
    setIsEditing(null);
  };

  return (
    <div className="employee-list-container">
      <div className="dashboard-content">
        <Sidebar />
        <div className="employee-list">
          
            <h1 className='heades'>EMPLOYEE LIST</h1>
          
          <div className="employee-cards">
            {employees.map(employee => (
              <div key={employee.id} className="employee-card">
                {isEditing === employee.id ? (
                  <>
                    <input
                      type="text"
                      name="name"
                      value={editFormData.name}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      value={editFormData.email}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="phone"
                      value={editFormData.phone}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="role"
                      value={editFormData.role}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="department"
                      value={editFormData.department}
                      onChange={handleChange}
                    />
                    <button onClick={handleSave} className="save-button">Save</button>
                    <button onClick={handleCancel} className="cancel-button">Cancel</button>
                  </>
                ) : (
                  <>
                    <h2>{employee.name}</h2>
                    <p><strong>Email:</strong> {employee.email}</p>
                    <p><strong>Phone:</strong> {employee.phone}</p>
                    <p><strong>Role:</strong> {employee.role}</p>
                    <p><strong>Department:</strong> {employee.department}</p>
                    <button onClick={() => handleEdit(employee.id)}>Edit</button>
                    <button onClick={() => handleDelete(employee.id)}>Delete</button>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
