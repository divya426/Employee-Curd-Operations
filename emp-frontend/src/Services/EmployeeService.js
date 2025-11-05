import React from 'react'
import axios from 'axios'
import AddEmployee from '../Components/AddEmployee';

const REST_API_URL = "http://localhost:8085/api/employees";
export const listEmployees = () => axios.get(REST_API_URL + "/all"); 
export const createEmployee = (employee) => axios.post(REST_API_URL + "/create", employee);
export const getEmployeeById = (id) => axios.get(REST_API_URL + '/' + id);

export const updateEmployee = (id, employee) => axios.put(`${REST_API_URL}/update/${id}`, employee);
export const deleteEmployee = (id) => axios.delete(REST_API_URL + "/delete/" + id);
  


