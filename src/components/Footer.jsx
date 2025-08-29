import React from 'react'
import './Footer.css'
import facebookLogo from '../assets/fbLogo.svg'
import xLogo from '../assets/twitterLogo.svg'
import youtubeLogo from '../assets/youtubeLogo.svg'
import instagramLogo from '../assets/instagramLogo.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="logo-control">
                <div className="footer-links">
                    < a href="https://mospi.gov.in/" target="_blank" rel="noreferrer">
                        MoSPI Website
                    </a>
                    < a href="https://esankhyiki.mospi.gov.in/" target="_blank" rel="noreferrer">
                        eSankhyiki Website
                    </a>
                    <a href="#" target="_blank" rel="noreferrer">
                        Disclaimer
                    </a>
                </div>

                <div className="footer-icons">
                    <a href="https://www.facebook.com/GoIStats/?modal=admin_todo_tour">
                        <i className="fa fa-facebook">
                            <img src={facebookLogo} alt="facebook" />
                        </i>
                    </a>

                    <a href="https://x.com/GoIStats">
                        <i className="fa fa-twitter">
                            <img src={xLogo} alt="X" />
                        </i>
                    </a>

                    <a href="https://www.youtube.com/@GoIStats">
                        <i className="fa fa-youtube">
                            <img src={youtubeLogo} alt="youtube" />
                        </i>
                    </a>

                    <a href="https://www.instagram.com/goistats/?igshid=1ea2ccd5gsb85">
                        <i className="fa fa-instagram">
                            <img src={instagramLogo} alt="instagram" />
                        </i>
                    </a>
                </div>
            </div>
            <div className='para'>
                <p>Powered by NADA 5.4</p>
            </div>
        </footer>
    )
}

export default Footer
