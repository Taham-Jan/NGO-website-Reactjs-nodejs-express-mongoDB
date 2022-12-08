import React, { useState, useEffect } from 'react'
import './Login.css'

const Login = () => {

const [formData,setFormData] = useState({
    email: '',
    password: ''

})

const {email,password} = formData
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
            <h1>LOGIN</h1>
        <p>Sign In To Your Account </p>
        <form onSubmit={onSubmit}>         
            <input type="text" className='form-control' id='email' name="email" value={email} placeholder="Enter Your email" onChange={ onChange }></input>
            <input type="password" className='form-control' id='password' name="password" value={password} placeholder="Enter Your password" onChange={ onChange }></input>
            <div className="button">Login</div>
            <h1>or</h1>
            {/* <div className="button" onClick={() => history.push("/Login")}>Login</div> */}
        </form>
        </section >
             <br/>
            <br/>
            <br/>
        </center>
    )
}

export default Login