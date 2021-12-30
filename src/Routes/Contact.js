import React from 'react'
import Navbar from '../Components/Navbar';
import Heroimage from '../Components/Heroimage';
import Footer from '../Components/Footer';
import Form from '../Components/Form'

function Contact() {
    return (
        <div>
            <Navbar/>
            <Heroimage heading='Contact' text='Contacter Space Travel'/> 
            <Form/>
            <Footer/>
            
        </div>
    )
}

export default Contact
