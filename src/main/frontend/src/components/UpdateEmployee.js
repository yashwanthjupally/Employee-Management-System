import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const UpdateEmployee = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const [Employee, setEmployee] = useState({ 
        id: id,
        firstName: "",
        lastName: "",
        emailId: ""
    });
    

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...Employee, [e.target.name]: value});
    };

    const updateEmployee = (e) => {
        e.preventDefault();
        console.log(Employee);
        EmployeeService.updateEmployee(Employee, id)
        .then((response) => {
            navigate("/EmployeeList");
        })
        .catch((error) => {
            console.log(error);
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
               const response = await EmployeeService.getEmployeeById(Employee.id);
               setEmployee(response.data); 
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    


    return (
        <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8'>
            <div className='text-3xl font-medium text-center tracking-wider'>
                <h1>Update Employee</h1>
            </div>

            <div className='items-center mt-10 justify-center h-16 w-full my-4'>
                <label className='block text-gray-800 font-medium text-lg'>First Name</label>
                <input 
                    type='text' 
                    name='firstName' 
                    value={Employee.firstName}
                    onChange={(e) => handleChange(e)}
                    className='h-10 w-96 border mt-2 p-2'>
                </input>
            </div>

            <div className='items-center justify-center h-16 w-full my-4'>
                <label className='block text-gray-800 font-medium text-lg '>Last Name</label>
                <input 
                    type='text' 
                    name='lastName' 
                    value={Employee.lastName}
                    onChange={(e) => handleChange(e)}
                    className='h-10 w-96 border mt-2 p-2'>
                </input>
            </div>

            <div className='items-center justify-center h-16 w-full my-4'>
                <label className='block text-gray-800 font-medium text-lg'>Email</label>
                <input 
                    type='email' 
                    name='emailId' 
                    value={Employee.emailId}
                    onChange={(e) => handleChange(e)}
                    className='h-10 w-96 border mt-2 p-2'>
                </input>
            </div>

            <div className='items-center justify-center h-16 w-full my-4 space-x-4 pt-4'>
                <button 
                    onClick={updateEmployee}
                    className='rounded px-6 py-2 text-white font-semibold bg-green-400 hover:bg-green-700'>     
                    Update
                </button>
                <button 
                    onClick={() => navigate("/EmployeeList")}
                    className='rounded px-6 py-2 text-white font-semibold bg-red-400 hover:bg-red-700'> 
                    Cancel
                </button>
            </div>
        </div>
        </div>
    )
}

export default UpdateEmployee;