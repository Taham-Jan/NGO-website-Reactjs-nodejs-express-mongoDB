import React from 'react'
import { Link } from 'react-router-dom'
import './BackgroundStyle.css'
import ngo from '../assets/bgvideo.mp4'
const Background = () => {

  return (
    <div className='vid_div'>
    <video autoPlay loop muted id='video'>
        <source src={ngo} type='video/mp4' />
    </video>
    <div className='txt_div'>
        <h1>Galaxy. Travel.</h1>
        <div id="quotes">BE THE CHANGE YOU WANT TO SEE IN THE WORLD !</div>
        <div>
            <Link to='/training' className='btn'>Training</Link>
            <Link to='/contact' className='btn btn-light'>Launch</Link>
        </div>
    </div>
</div>

  )
}




export default Background
