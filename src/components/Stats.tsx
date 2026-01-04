import './Stats.css';

const Stats = () => {
    return (
        <section className="stats-section">
            <div className="container stats-grid">
                <div className="stats-item" data-aos="flip-up">
                    <span className="stats-number">40+</span>
                    <span className="stats-label">Years Experience</span>
                </div>
                <div className="stats-item" data-aos="flip-up" data-aos-delay="100">
                    <span className="stats-number">500+</span>
                    <span className="stats-label">Projects Completed</span>
                </div>
                <div className="stats-item" data-aos="flip-up" data-aos-delay="200">
                    <span className="stats-number">100%</span>
                    <span className="stats-label">Indigenisation</span>
                </div>
                <div className="stats-item" data-aos="flip-up" data-aos-delay="300">
                    <span className="stats-number">24/7</span>
                    <span className="stats-label">Support Team</span>
                </div>
            </div>
        </section>
    );
};

export default Stats;
