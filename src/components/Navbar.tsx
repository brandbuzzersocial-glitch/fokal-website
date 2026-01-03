import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="#" className="logo">
                    FOKAL
                    <span className="logo-accent">.</span>
                </a>

                <ul className="nav-links">
                    <li><a href="#about">About</a></li>
                    <li><a href="#industries">Industries</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#contact" className="btn btn-sm btn-outline">Contact Us</a></li>
                </ul>
            </div>
        </nav>
    );
}
