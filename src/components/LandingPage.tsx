import React from 'react'
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <>
            <nav className='landingNav'>
                <Link to="/ticket" className='landingNav__ticket'>Ticket</Link>
                <Link to="/dashboard">Widgets</Link>
            </nav>
        </>
    )
}

export default LandingPage
