import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-text)', color: 'white', padding: '3rem 0', textAlign: 'center' }}>
            <div className="container">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Carpied Diem</span>
                    </div>
                    <p style={{ color: '#9ca3af', maxWidth: '400px' }}>
                        La réflexologie plantaire au service de votre équilibre.
                    </p>
                    <div style={{ width: '100%', height: '1px', backgroundColor: '#374151', margin: '1rem 0' }}></div>
                    <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>
                        © {new Date().getFullYear()} Carpied Diem - Clément Grava. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
