import React, { useState, useEffect } from 'react'
import './Login.css'
import {useSelector, useDispatch} from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { login,reset } from '../features/auth/authSlice'
import Spinner from './Spinner'

const Login = () => {

const [formData,setFormData] = useState({
    email: '',
    password: ''

})

const {email,password} = formData

const navigate = useNavigate()
const dispatch = useDispatch()

const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if(isError){
        toast.error(message)
    }
    if(isSuccess || user)
    {
        navigate('/')
    }
    dispatch(reset())
    
    },[user,isError,isSuccess, message, navigate, dispatch])

const onChange = (e) => {
    setFormData((prevState)=>({
        ...prevState,
        [e.target.name]: e.target.value
    }))
}
const onSubmit = (e) => {
    e.preventDefault()
    const userData={
        email,
        password
    }
    dispatch(login(userData))
}

if(isLoading){
    return <Spinner/>
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
            <button className='btnSub' type='submit'>Login</button>
            <h1>or</h1>
            <Link to='/register'><div className="btnSub" >Register</div></Link>
        </form>
        </section >
             <br/>
            <br/>
            <br/>
        </center>
    )
}

export default Login