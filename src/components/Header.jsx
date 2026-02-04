import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(5px)' : 'none',
            padding: '1rem 0',
            zIndex: 1000,
            boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
            transition: 'all 0.3s ease'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img src="/assets/circle_without_back.png" alt="Carpied Diem Logo" style={{ height: '50px' }} />
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>Carpied Diem</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="desktop-nav" style={{ display: 'none' }}>
                    <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <li><a href="#hero" style={{ fontWeight: 500 }}>Accueil</a></li>
                        <li><a href="#about" style={{ fontWeight: 500 }}>À propos</a></li>
                        <li><a href="#services" style={{ fontWeight: 500 }}>Prestations</a></li>
                        <li><a href="#contact" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>Prendre RDV</a></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}>
                    {isMenuOpen ? <X size={28} color="var(--color-primary)" /> : <Menu size={28} color="var(--color-primary)" />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    backgroundColor: 'white',
                    padding: '2rem',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                    borderTop: '1px solid #eee'
                }}>
                    <a href="#hero" onClick={toggleMenu} style={{ fontSize: '1.1rem' }}>Accueil</a>
                    <a href="#about" onClick={toggleMenu} style={{ fontSize: '1.1rem' }}>À propos</a>
                    <a href="#services" onClick={toggleMenu} style={{ fontSize: '1.1rem' }}>Prestations</a>
                    <a href="#contact" onClick={toggleMenu} className="btn btn-primary" style={{ width: '100%', maxWidth: '200px', textAlign: 'center' }}>Prendre RDV</a>
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
        </header>
    );
};

export default Header;
