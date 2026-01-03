import './Footer.css';

export default function Footer() {
    return (
        <footer id="contact" className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h2 className="footer-logo">FOKAL</h2>
                        <p className="footer-tagline">Precision Lighting. Indigenous Engineering.</p>
                    </div>

                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <address>
                            <p><strong>Mithabhi Lamps Pvt. Ltd.</strong></p>
                            <p>62 Km Stone, Delhi Mathura Road,</p>
                            <p>Palwal - 121102, Haryana, India</p>
                        </address>
                        <div className="contact-info">
                            <p>Email: <a href="mailto:info@fokallamps.com">info@fokallamps.com</a></p>
                            <p>Phone: +91-123-456-7890</p>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#industries">Industries</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Mithabhi Lamps Pvt. Ltd. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
