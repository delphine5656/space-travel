import React, {Component} from 'react'
import './Heroimage.css'

export class Heroimage extends Component {
    render() {
        return (
            <div className='hero-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.heading}</p>
                </div>
            </div>
        )
    }
}

export default Heroimage
