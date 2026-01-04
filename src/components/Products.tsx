import './Products.css';

const Products = () => {
    return (
        <section id="products" className="products-section">
            <div className="container">
                <div className="section-header" data-aos="fade-up">
                    <span className="section-subtitle">OUR SOLUTIONS</span>
                    <h2 className="section-title">Product Categories</h2>
                </div>

                <div className="products-grid">
                    {/* Product 1 */}
                    <div className="product-card" data-aos="fade-up">
                        <div className="product-image-container">
                            <div className="product-overlay">
                                <h3>Headlights</h3>
                                <span className="category-label">DEFENSE</span>
                                <button className="btn-view">View Details</button>
                            </div>
                            {/* Placeholder for actual image */}
                            <div className="placeholder-img"></div>
                        </div>
                        <div className="product-info">
                            <h3>LED Headlights</h3>
                            <p>High-intensity illumination for armored vehicles.</p>
                        </div>
                    </div>

                    {/* Product 2 */}
                    <div className="product-card" data-aos="fade-up" data-aos-delay="100">
                        <div className="product-image-container">
                            <div className="product-overlay">
                                <h3>Cabin Lights</h3>
                                <span className="category-label">AEROSPACE</span>
                                <button className="btn-view">View Details</button>
                            </div>
                            <div className="placeholder-img"></div>
                        </div>
                        <div className="product-info">
                            <h3>Cockpit Lighting</h3>
                            <p>NVG compatible lighting systems.</p>
                        </div>
                    </div>

                    {/* Product 3 */}
                    <div className="product-card" data-aos="fade-up" data-aos-delay="200">
                        <div className="product-image-container">
                            <div className="product-overlay">
                                <h3>Signal Lights</h3>
                                <span className="category-label">RAILWAY</span>
                                <button className="btn-view">View Details</button>
                            </div>
                            <div className="placeholder-img"></div>
                        </div>
                        <div className="product-info">
                            <h3>Signal Lamps</h3>
                            <p>All-weather signaling solutions.</p>
                        </div>
                    </div>
                </div>

                <div className="cta-banner" data-aos="fade-up">
                    <h2>Need Custom Lighting Solutions?</h2>
                    <p>Our engineers are ready to help you specific requirements.</p>
                    <a href="#contact" className="btn btn-secondary">Contact Engineering</a>
                </div>
            </div>
        </section>
    );
};

export default Products;
