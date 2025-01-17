import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({employee, deleteEmployee}) => {

    const navigate = useNavigate();
    const editEmployee = (e, id) => {
        e.preventDefault();
        navigate(`/editEmployee/${id}`);  
    };

  return (
    <tr key={employee.id}>
        <td className='text-left text-xl font-medium px-6 py-4 whitespace-nowrap'>
        <div className='text-gray-500'>{employee.firstName}</div></td>

        <td className='text-left text-xl font-medium px-6 py-4 whitespace-nowrap'>
        <div className='text-gray-500'>{employee.lastName}</div></td>

        <td className='text-left text-xl font-medium px-6 py-4 whitespace-nowrap'>
        <div className='text-gray-500'>{employee.emailId}</div></td>

        <td className='text-center text-xl font-medium whitespace-nowrap'>
        <a 
            onClick={(e,id) => editEmployee(e, employee.id)}
            className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Edit</a>
        <a 
            onClick={(e,id) => deleteEmployee(e, employee.id)}
            className='text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer'>Delete</a>
        </td>
    </tr>
  )
}

export default Employee;