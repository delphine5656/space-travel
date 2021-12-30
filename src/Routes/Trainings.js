import React from 'react';
import Footer from '../Components/Footer';
import Heroimage from '../Components/Heroimage';
import Navbar from '../Components/Navbar';
import TrainingSection from '../Components/Training'


function Trainings() {
    return (
        <div>
            <Navbar/>
            <Heroimage heading='Training' text='Pre-Flight'/>
            <TrainingSection/>
            <Footer/>
        </div>
    )
}

export default Trainings
