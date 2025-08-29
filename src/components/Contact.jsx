import React from 'react'
import './Contact.css'
import Footer from './Footer'

const Contact = () => {
    return (
        <div>
            <div className="head">
                <a href="/dashboard">Home</a>
            </div>
            <div className="first">
                <p>Deputy Director General</p>
            </div>
            <div className="second">
                <p>
                    DIID, East Block-10, R K Puram,<br />
                    New Delhi-110066 <br />
                    Phone: 011-26107267 <br />
                </p>
            </div>
            <div className="third">
                <p>
                    Email: webunit.diid@mospi.gov.in
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
