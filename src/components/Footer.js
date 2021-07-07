import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="footer-basic">
            <footer>
                <div className="social" data-aos="fade-right" data-aos-offset="0">
                    <a href="https://github.com/kemaldemirgil" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                    <a href="https://www.linkedin.com/in/kemaldemirgil/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
                    <Link to="/contact" className="btn-footer-contact"><FontAwesomeIcon icon={faEnvelope}/></Link>
                </div>
                <p className="copyright">Created with ❤️ &amp; ☮️ by: Kemal Demirgil © 2021</p>
            </footer>
        </div>
    )
}

export default Footer