import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';

const EmployeeList = () => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await EmployeeService.getAllEmployees();
                setEmployees(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    const deleteEmployee = (e, id) => {
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then((res) => {
            if (employees) {
                setEmployees((prevElement) => {
                    return prevElement.filter((employee) => employee.id !== id);
                });
            }
        });
    };

    return (
        <div className='container mx-auto my-8 '>
            <div className='h-12 my-10'>
                <button
                    onClick={() => navigate("/addEmployee")}
                    className='rounded text-white text-2xl bg-slate-900 px-8 py-4'>Add Employee</button>
            </div>
            <div className='flex shadow border-b'>
                <table className='min-w-full'>
                    <thead className='bg-pink-300'>
                        <tr>
                            <th className='text-left text-xl font-medium uppercase tracking-wider py-3 px-6'>
                                First Name
                            </th>
                            <th className='text-left text-xl font-medium uppercase tracking-wider py-3 px-6'>
                                Last Name
                            </th>
                            <th className='text-left text-xl font-medium uppercase tracking-wider py-3 px-6'>
                                Email Id
                            </th>
                            <th className='text-center text-xl font-medium uppercase tracking-wider py-3 px-6'>
                                Status
                            </th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody>
                            {employees.map((employee) => (
                                <Employee
                                    employee={employee}
                                    deleteEmployee={deleteEmployee}
                                    key={employee.id}>
                                </Employee>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
}

export default EmployeeList;