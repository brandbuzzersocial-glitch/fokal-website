import './About.css';

export default function About() {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <div className="about-content">
                    <div className="badge-glow">National Award Winner</div>
                    <h2 className="section-title">Decades of Indigenous Innovation</h2>
                    <p className="about-text">
                        Since 1984, Mithabhi Lamps Pvt. Ltd. has been at the forefront of high-precision lighting.
                        Operating under the brand <strong>FOKAL</strong>, we have achieved <span className="highlight">100% indigenization</span>
                        of critical lighting components for Defense, Aerospace, and Railways, eliminating dependency on imports.
                    </p>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <span className="stat-number">40+</span>
                            <span className="stat-label">Years of Excellence</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">100%</span>
                            <span className="stat-label">Indigenously Mfg.</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">ISO</span>
                            <span className="stat-label">Certified Quality</span>
                        </div>
                    </div>
                </div>
                <div className="about-visual">
                    <div className="visual-card-glass">
                        <div className="award-icon">🏆</div>
                        <h3>Recognized by the President of India</h3>
                        <p>For outstanding contribution to Import Substitution.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
