import React from 'react'
import { Link } from 'react-router-dom'
import './Video.css'
import spaceVideo from '../../src/Assets/video.mp4'

function Video() {
    return (
        <div className='hero'>
            
            <video autoPlay loop muted id='video'>
                <source src={spaceVideo} type='video/mp4'/> 
            </video>

            <div className='content'>
                <h1>Space travel</h1>
                <p>Tentez l'expérience incroyable de voyager dans l'espace.</p>
            
            <div>
                <div className='lien'>
                <Link to='/training' className='btn'>Information</Link>
                <Link to='/contact' className='btn btn-light'>contact</Link>
                </div>
            
            </div>
            </div>

        </div>
    )
}

export default Video
