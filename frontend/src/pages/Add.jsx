import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment';


const Add = () => {

    const [emps, setEmp] = useState({
        id: "",
        name: "",
        gender: "",
        dob: "",
        age: "",
        email: "",
        salary: "",
        phno: "",
        dept: ""
    })

    const navi = useNavigate()

    const handleChange = (e) => {
        setEmp(prev => ({ ...prev, [e.target.name]: e.target.value }))
    };

    const handleClick = async (e) => {
        e.preventDefault()
        try {
            await axios.post("https://employee-management-system-backend-sk6j.onrender.com/employee", emps)
            navi("/")
        } catch (err) {
            console.log(err)
        }
    }

    const currentDate = new Date().toISOString().split('T')[0]; 
    const formattedDate = moment(val.date).format('YYYY-MM-DD');


    return (
        <div className='form'>
            <h1 className='head'>Add Employee</h1>
            <input type="text" placeholder='Id' onChange={handleChange} name='id' />
            <input type="text" placeholder='Name' onChange={handleChange} name='name' />
            <input type="text" placeholder='Gender (M or F)' onChange={handleChange} name='gender' />
            <input type="date" placeholder='Dob' onChange={handleChange} name='dob' max={currentDate} />
            <input type="number" placeholder='age' onChange={handleChange} name='age' />
            <input type="email" placeholder='Email' onChange={handleChange} name='email' />
            <input type="number" placeholder='Salary' onChange={handleChange} name='salary' />
            <input type="number" placeholder='Phone Number' onChange={handleChange} name='phno' />
            <input type="text" placeholder='Department' onChange={handleChange} name='dept' />
            <button onClick={handleClick} className='doo'>Add</button>
        </div>
    )
}

export default Add
