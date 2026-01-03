import './Products.css';

export default function Products() {
    const products = [
        {
            category: 'Aerospace Lighting',
            items: ['Wingtip Navigation Lights', 'Cockpit Panel Illumination', 'Landing Gear Lights'],
            specs: 'MIL-STD-810G Compliant',
            icon: '✈️'
        },
        {
            category: 'Defense Systems',
            items: ['Tactical Searchlights', 'Convoy IR Lights', 'Armored Vehicle Interior'],
            specs: 'Shock & Vibration Resistant',
            icon: '🛡️'
        },
        {
            category: 'Railway Signaling',
            items: ['Locomotive Headlights', 'Trackside Signals', 'Coach Lighting'],
            specs: 'High Lumen Efficiency',
            icon: '🚆'
        }
    ];

    return (
        <section id="products" className="products-section">
            <div className="container">
                <h2 className="section-title">High-Performance Solutions</h2>
                <p className="section-subtitle">Engineered for extreme environments and critical applications.</p>

                <div className="products-grid">
                    {products.map((prod, index) => (
                        <div key={index} className="product-card">
                            <div className="product-icon">{prod.icon}</div>
                            <h3 className="product-category">{prod.category}</h3>
                            <ul className="product-list">
                                {prod.items.map((item, idx) => (
                                    <li key={idx}>{item}</li>
                                ))}
                            </ul>
                            <div className="product-specs">
                                <span className="spec-label">Spec:</span> {prod.specs}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="catalog-cta">
                    <button className="btn btn-primary">Download Full Catalog</button>
                </div>
            </div>
        </section>
    );
}
