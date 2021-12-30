import React from 'react'
import {Link} from'react-router-dom'
import './Pricing.css'

function Pricing() {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>--Basic--</h3>
                    <span className='bar'></span>
                    <p className='btc'>15000€</p>
                    <p>3 jours</p>
                    <p>vue sur la planète terre</p>
                    <p>les options</p>
                    <p>Quartier privé</p>
                    <Link to='/contact' className='bnt'>Réserver</Link>
                </div>

                <div className='card'>
                    <h3>--Executive--</h3>
                    <span className='bar'></span>
                    <p className='btc'>25000€</p>
                    <p>5 jours</p>
                    <p>tour de la planète terre</p>
                    <p>les options</p>
                    <p>Quartier privé</p>
                    <Link to='/contact' className='bnt'>Réserver</Link>
                </div>

                <div className='card'>
                    <h3>--Luxueux--</h3>
                    <span className='bar'></span>
                    <p className='btc'>75000€</p>
                    <p>15 jours</p>
                    <p>voyage inédis et plongeons dans l'espacee</p>
                    <p>les options</p>
                    <p>Quartier privé</p>
                    <Link to='/contact' className='bnt'>Réserver</Link>
                </div>

            </div>
        </div>
    )
}

export default Pricing
