import React, { useState, useEffect } from 'react'
import './Register.css'
import {Link} from 'react-router-dom'
const Register = () => {

const [formData,setFormData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    password2:''
})

const {name,email,number,password,password2} = formData
const onChange = (e) => {
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}
const onSubmit = (e) => {
    e.preventDefault()
}
    return (
        
        <center>
            <br/>
            <br/>
            <br/>
        <section className="form-box">
            <h1>REGISTRATION</h1>
        <p>Please Create An Account </p>
        <form onSubmit={onSubmit}>
            <input type="text" className='form-control' id='name' name="name" value={name} placeholder="Enter Your Name" onChange={ onChange }></input>
            <input type="text" className='form-control' id='email' name="email" value={email} placeholder="Enter Your email" onChange={ onChange }></input>
            <input type="number" className='form-control' id='number' name="number" value={number} placeholder="Enter Your Contact Number" onChange={ onChange }></input>
            <input type="password" className='form-control' id='password' name="password" value={password} placeholder="Enter Your password" onChange={ onChange }></input>
            <input type="password" className='form-control' id='password2' name="password2" value={password2} placeholder="Re-enter Your Password" onChange={ onChange }></input>
            <div className="button">Register</div>
            <h1>or</h1>
            <Link to='/login'><div className="button" >Login</div></Link>
        </form>
        </section >
             <br/>
            <br/>
            <br/>
        </center>
    )
}

export default Register