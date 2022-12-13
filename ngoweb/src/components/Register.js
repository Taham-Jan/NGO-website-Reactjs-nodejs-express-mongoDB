import React, { useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-toastify'
import { register,reset } from '../features/auth/authSlice'
import Spinner from './Spinner'
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

    if(password !== password2){
        toast.error('Password Do Not Match')
    }
    else{
        const userData = {
            name,
            email,
            number,
            password,
        }
        dispatch(register(userData))
    }
}
if(isLoading)
{
    return<Spinner/>
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
            <button className='btnSub' type='submit'>Register</button>
            <h1>or</h1>
            <Link to='/login'><div className="btnSub" >Login</div></Link>
        </form>
        </section >
             <br/>
            <br/>
            <br/>
        </center>
    )
}

export default Register