import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyle.css'
import {useSelector, useDispatch} from 'react-redux'
import {logout,reset} from '../features/auth/authSlice'


const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/')

    }

    //small window navbar icon

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return (
<div id='bg'>
        <div className={color ? 'header header-bg' : 'header'}>
          <Link to='/'><h1>DO - NATION</h1></Link> 
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   <Link to='/'>Home</Link>
               </li>
               <li>
                   <Link to='/pricing'>Pricing</Link>
               </li>
               {user ? (
                <li>
                <button className='btn' onClick={onLogout}>Log-Out</button>
            </li>
               ) : (<>
            <li>
                <Link to = '/register'>Register</Link>
            </li>
            <li>
                <Link to='/login'>Log-In</Link>
            </li>
                </>)}

           </ul>
           <div className='navicon' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
               
           </div>
        </div>
</div>
    )
}

export default Navbar
