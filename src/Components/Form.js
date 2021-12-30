import React from 'react'
import './Form.css'

function Form() {
    return (
        <div className='form'>
            <form>
                <label>Votre nom</label>
                <input type='text'></input>
                <label>Votre email</label>
                <input type='email'></input>
                <label>Votre message</label>
                <input type='Sujet'></input>
                <label>Votre message</label>
                <text rows='6' placeholder='Votre message...'/>
                <button className='btn'>Envoyer</button>
            </form> 
        </div>
    )
}

export default Form
