import './Hero.css';
/* Helper for AOS if not global */

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-overlay"></div>
            <div className="container" data-aos="fade-up">
                <div className="hero-content">
                    <span className="hero-label">WELCOME TO FOKAL</span>
                    <h1 className="hero-title">
                        40 Years of Precision<br />Engineering Excellence
                    </h1>
                    <div className="hero-text-wrapper">
                        <p className="hero-description">
                            National Award-winning manufacturer of mission-critical lighting
                            solutions for defense, aerospace, and railway sectors.
                        </p>
                    </div>
                    <div className="hero-actions">
                        <a href="#products" className="btn btn-primary">Explore Products</a>
                        <a href="#about" className="btn btn-outline">Download Catalog</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
