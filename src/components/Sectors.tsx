import './Sectors.css';
import aerospaceImg from '../assets/sector-aerospace.png';

export default function Sectors() {
    const sectors = [
        {
            id: 'defense',
            title: 'Defense',
            desc: 'Ruggedized lighting for tactical vehicles and field operations.',
            bgClass: 'bg-defense', // Fallback gradient
        },
        {
            id: 'aerospace',
            title: 'Aerospace',
            desc: 'High-precision avionics lighting and cockpit indicators.',
            image: aerospaceImg,
        },
        {
            id: 'railway',
            title: 'Railway',
            desc: 'Signal and interior lighting for high-speed transit systems.',
            bgClass: 'bg-railway', // Fallback gradient
        },
    ];

    return (
        <section id="industries" className="sectors-section">
            <div className="container">
                <h2 className="section-title">Industries We Serve</h2>
                <div className="sectors-grid">
                    {sectors.map((sector) => (
                        <div key={sector.id} className="sector-card">
                            <div
                                className="sector-bg"
                                style={sector.image ? { backgroundImage: `url(${sector.image})` } : {}}
                            >
                                {!sector.image && <div className={`sector-fallback ${sector.bgClass}`}></div>}
                            </div>
                            <div className="sector-content">
                                <h3 className="sector-title">{sector.title}</h3>
                                <p className="sector-desc">{sector.desc}</p>
                                <div className="sector-icon-arrow">→</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
