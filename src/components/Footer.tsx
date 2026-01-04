import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-col">
                        <div className="logo" style={{ color: '#fff' }}>
                            FOKAL<span style={{ color: 'var(--primary-orange)' }}>.</span>
                        </div>
                        <p className="footer-desc">
                            40 Years of Excellence in Indigenized Lighting Solutions for Defense, Aerospace, and Railways.
                        </p>
                        <div className="social-icons" style={{ marginTop: '20px' }}>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        </div>
                    </div>

                    <div className="footer-col">
                        <h3>Quick Links</h3>
                        <ul className="footer-links">
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#sectors">industries</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Our Services</h3>
                        <ul className="footer-links">
                            <li><a href="#">Defense Lighting</a></li>
                            <li><a href="#">Aerospace Systems</a></li>
                            <li><a href="#">Railway Solutions</a></li>
                            <li><a href="#">Custom Engineering</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h3>Contact Us</h3>
                        <ul className="contact-list">
                            <li>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span>Mithabhi Lamps Pvt. Ltd.<br />Industrial Area, Faridabad, India</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} />
                                <span>+91 123 456 7890</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>info@fokal.in</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <span>© 2026 FOKAL. All Rights Reserved.</span>
                    <span>Privacy Policy | Terms of Service</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
