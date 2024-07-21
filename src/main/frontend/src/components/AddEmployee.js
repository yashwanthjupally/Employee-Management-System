import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {

    const [Employee, setEmployee] = useState({
        id: "",
        firstName: "",
        lastName: "",
        emailId: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...Employee, [e.target.name]: value});
    };

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(Employee)
            .then((response) => {
                console.log(response);
                navigate("/employeeList")
            })
            .catch((error) => {
                console.log(error);
            })
    };

    const reset = (e) => {
        e.preventDefault();
        setEmployee({
            id: "",
            firstName: "",
            lastName: "",
            emailId: ""
        });
    };


    return (
        <div className='flex max-w-2xl mx-auto shadow border-b'>
            <div className='px-8 py-8'>
                <div className='text-3xl font-medium text-center tracking-wider'>
                    <h1>Add New Employee</h1>
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
                        onClick={saveEmployee}
                        className='rounded px-6 py-2 text-white font-semibold bg-green-400 hover:bg-green-700'>     
                        Save
                    </button>
                    <button 
                        onClick={reset}
                        className='rounded px-6 py-2 text-white font-semibold bg-red-400 hover:bg-red-700'> 
                        Clear
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddEmployee