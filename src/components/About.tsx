import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                {/* Left Side: Images */}
                <div className="about-images" data-aos="fade-right">
                    <div className="main-img"></div>
                    <div className="overlay-img"></div>
                    <div className="stats-badge">
                        <span className="count">40+</span>
                        <span className="label">Years of<br />Excellence</span>
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="about-content" data-aos="fade-left">
                    <span className="section-subtitle">ABOUT FOKAL</span>
                    <h2 className="section-title">National Award-Winning Indigenization</h2>
                    <p className="about-text">
                        Mithabhi Lamps Pvt. Ltd. has been at the forefront of high-precision lighting
                        manufacturing for over four decades. We specialize in localized production
                        for strategic sectors.
                    </p>

                    <ul className="about-features">
                        <li><FontAwesomeIcon icon={faCheckCircle} /> 100% Indigenized Production</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Defense & Aerospace Certified</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Advanced R&D Facility</li>
                        <li><FontAwesomeIcon icon={faCheckCircle} /> Trusted by DRDO & Indian Railways</li>
                    </ul>

                    <a href="#contact" className="btn btn-primary">Learn More About Us</a>
                </div>
            </div>
        </section>
    );
};

export default About;
