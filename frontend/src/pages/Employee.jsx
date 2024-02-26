import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

const Employee = () => {

    const [emp, setEmp] = useState([])

    useEffect(() => {
        const fetchAllEmp = async () => {
            try {
                const res = await axios.get("https://employee-management-system-backend-sk6j.onrender.com/")
                setEmp(res.data)
            } catch (err) {
                console.log(err)
                setEmp([]) // Set emp to an empty array in case of error
            }
        }
        fetchAllEmp()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete("https://employee-management-system-backend-sk6j.onrender.com/" + id)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='final'>
            <h1>Employee Details</h1>
            <table className="emptab">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Dob</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Ph.No</th>
                        <th>Dept</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.isArray(emp) && emp.length > 0 ? (
                        emp.map(emps => (
                            <tr key={emps.id}>
                                <td>{emps.id}</td>
                                <td>{emps.name}</td>
                                <td>{emps.gender}</td>
                                <td>{emps.dob}</td>
                                <td>{emps.age}</td>
                                <td>{emps.email}</td>
                                <td>{emps.salary}</td>
                                <td>{emps.phno}</td>
                                <td>{emps.dept}</td>
                                <td><button className="deleteemp" onClick={() => handleDelete(emps.id)}>Delete</button></td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10">No employees found</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <button className="addemp"><Link to="/add">Add Employee </Link></button>
        </div>
    )
}

export default Employee
