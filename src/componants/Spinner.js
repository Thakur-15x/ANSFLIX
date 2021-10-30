import React from 'react'
import gif from './gif.gif'
import "./spinner.css"

function Spinner() {
    return (
        <div className="loader">
            <img src={gif} alt="loading..." />
        </div>
    )
}

export default Spinner
