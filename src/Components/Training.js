import React from 'react'
import './Training.css'
import { Link } from 'react-router-dom'
import Pod from '../Assets/pod.jpg'
import Moon from '../Assets/moon.jpg'

function Training() {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Training</h1>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.</p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                    Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam</p>
                <Link to='/contact'><button className='btn'>Contact</button></Link>
            </div>

            <div className='right'>
                <div className='img-container'>
                   <div className='image-stack top'>
                       <img src={Moon} className='img1' alt=''/>
                    </div> 

                    <div className='image-stack bottom'>
                       <img src={Pod} className='img2' alt=''/>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Training
