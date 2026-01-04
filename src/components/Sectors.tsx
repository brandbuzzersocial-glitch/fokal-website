import './Sectors.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faPlane, faTrain } from '@fortawesome/free-solid-svg-icons';

const Sectors = () => {
    const sectors = [
        {
            id: 'defense',
            title: 'Defense Systems',
            description: 'Mission-critical lighting solutions for military vehicles, naval vessels, and defense installations.',
            icon: faShieldHalved
        },
        {
            id: 'aerospace',
            title: 'Aerospace',
            description: 'High-performance cockpit and external lighting systems for aircraft and aerospace applications.',
            icon: faPlane
        },
        {
            id: 'railway',
            title: 'Railways',
            description: 'Robust and reliable lighting for locomotives, coaches, and railway infrastructure.',
            icon: faTrain
        }
    ];

    return (
        <section id="sectors" className="sectors-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">WHAT WE OFFER</span>
                    <h2 className="section-title">Our Core Capabilities</h2>
                    <p className="section-description">
                        Specialized engineering for the most demanding environments.
                    </p>
                </div>

                <div className="sectors-grid">
                    {sectors.map((sector, index) => (
                        <div key={sector.id} className="service-card" data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="service-icon">
                                <FontAwesomeIcon icon={sector.icon} />
                            </div>
                            <h3 className="service-title">{sector.title}</h3>
                            <p className="service-description">{sector.description}</p>
                            <a href={`#${sector.id}`} className="service-link">
                                Learn More <span>&rarr;</span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sectors;
