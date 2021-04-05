import React from 'react'
import ErrorSign from '../assets/error-sign.png'

import './Error.css';

const Error = ({ error }) => {
    return (
        <div className="error-msg">
            <img src={ErrorSign} alt="error"/>
            <h5>{error}</h5>
        </div>
    )
}

export default Error
