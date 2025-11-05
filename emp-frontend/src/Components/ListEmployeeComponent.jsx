import React from 'react'
import { useState, useEffect } from 'react'
import { listEmployees, deleteEmployee } from '../Services/EmployeeService'
import { useNavigate } from 'react-router-dom'


const ListEmployeeComponent = () => {

    const [employees, setEmployees] = useState([])

    const navigate = useNavigate();

    useEffect(()=>{
        getAllEmployees();
           
    },[])

    function getAllEmployees(){
       listEmployees().then((response) => {
            setEmployees(response.data);
            console.log(response.data);
           }).catch(error => {
            console.log(error);
           })
    }


    function addNewEmployee(){
        navigate('/add-employee');
    }


    function updateEmployee(id){

        navigate(`/update-employee/${id}`);
    }


    function removeEmployee(id){
      console.log(id);
         deleteEmployee(id).then((response) => {
            getAllEmployees();
            useNavigate('/employees');    

         }).catch(error => {
            console.log(error);
           });
         
        
    }


  return (
    <div className='container'>
      <h2 className='text-center'>List of Employees</h2>  
      <button className='btn btn-primary mb-2' onClick={addNewEmployee}>
       Add Employee
      </button>
      <table className='table table-bordered table-striped'>
        <thead> 
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
                employees.map(employee => (
                    <tr key={employee.id}>
                        <td>{employee.id}</td>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                          <button className='btn btn-info' onClick={()=> updateEmployee(employee.id)}   >Update</button></td>
                          <td>
                          <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}>Delete</button>
                          </td>
                    </tr>
                ))
            }
        </tbody>
      </table>
        
       </div>
  )
}

export default ListEmployeeComponent