import './Hero.css';
import heroBg from '../assets/hero-bg.png';

export default function Hero() {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <div className="hero-text-wrapper">
                    <span className="hero-label">EST. 1984 &mdash; MITHABHI LAMPS PVT. LTD.</span>
                    <h1 className="hero-title">
                        Illuminating <br />
                        <span className="text-gradient">Critical Missions</span>
                    </h1>
                    <p className="hero-subtitle">
                        Premier high-precision lighting solutions for Defense, Aerospace, and Railway sectors.
                        Indigenously designed for extreme reliability.
                    </p>
                    <div className="hero-actions">
                        <a href="#products" className="btn btn-primary">Explore Products</a>
                        <a href="#about" className="btn btn-outline">Our Legacy</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
