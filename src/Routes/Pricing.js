import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Heroimage from '../Components/Heroimage'
import PricingCards from '../Components/Pricing'

const Pricing = ()=>{
    return (
        <div>
            <Navbar/>
            <Heroimage heading='Tarif' text='Choisis ton voyage'/>
            <PricingCards/>
            <Footer/>
        </div>
    )
}

export default Pricing
