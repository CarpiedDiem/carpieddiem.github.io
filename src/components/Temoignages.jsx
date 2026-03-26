import React from 'react';
import { Star, MessageCircle } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Temoignages = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} id="temoignages" className="section-padding fade-in-section" style={{ backgroundColor: 'var(--color-accent)' }}>
            <div className="container">
                <h2 className="section-title">Témoignages</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    marginBottom: '3rem'
                }}>
                    {/* Avis 1 : Sophie (Mars 2025) */}
                    <div style={{
                        padding: '2rem',
                        backgroundColor: 'white',
                        borderRadius: '1.5rem',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        position: 'relative'
                    }}>
                        <MessageCircle size={32} color="var(--color-accent)" style={{ position: 'absolute', top: '2rem', right: '2rem', opacity: 0.5 }} />
                        <div style={{ display: 'flex', gap: '0.25rem' }}>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={18} color="var(--color-secondary)" fill="var(--color-secondary)" />
                            ))}
                        </div>
                        <p style={{
                            color: 'var(--color-text-light)',
                            fontSize: '1rem',
                            fontStyle: 'italic',
                            lineHeight: 1.6,
                            flex: 1
                        }}>
                            "séance avec Clément Il y a quelques jours apaisée sereine ancrée détente et bien être assuré"
                        </p>
                        <div>
                            <p style={{ fontWeight: '600', color: 'var(--color-primary)' }}>Sophie</p>
                            <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>2 mars 2025</p>
                        </div>
                    </div>

                    {/* Avis 2 : Sophie (Suite) */}
                    <div style={{
                        padding: '2rem',
                        backgroundColor: 'white',
                        borderRadius: '1.5rem',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        position: 'relative'
                    }}>
                        <MessageCircle size={32} color="var(--color-accent)" style={{ position: 'absolute', top: '2rem', right: '2rem', opacity: 0.5 }} />
                        <div style={{ display: 'flex', gap: '0.25rem' }}>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={18} color="var(--color-secondary)" fill="var(--color-secondary)" />
                            ))}
                        </div>
                        <p style={{
                            color: 'var(--color-text-light)',
                            fontSize: '1rem',
                            fontStyle: 'italic',
                            lineHeight: 1.6,
                            flex: 1
                        }}>
                            "Encore une belle séance et un bel échange, comme dans un cocoon. A bientôt"
                        </p>
                        <div>
                            <p style={{ fontWeight: '600', color: 'var(--color-primary)' }}>Sophie</p>
                            <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Juillet 2025</p>
                        </div>
                    </div>

                    {/* Avis 3 : Valérie */}
                    <div style={{
                        padding: '2rem',
                        backgroundColor: 'white',
                        borderRadius: '1.5rem',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        position: 'relative'
                    }}>
                        <MessageCircle size={32} color="var(--color-accent)" style={{ position: 'absolute', top: '2rem', right: '2rem', opacity: 0.5 }} />
                        <div style={{ display: 'flex', gap: '0.25rem' }}>
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={18} color="var(--color-secondary)" fill="var(--color-secondary)" />
                            ))}
                        </div>
                        <p style={{
                            color: 'var(--color-text-light)',
                            fontSize: '1rem',
                            fontStyle: 'italic',
                            lineHeight: 1.6,
                            flex: 1
                        }}>
                            "Je te remercie pour les 3 séances, c'est magique et ça fait un bien fou. A découvrir absolument."
                        </p>
                        <div>
                            <p style={{ fontWeight: '600', color: 'var(--color-primary)' }}>Valérie</p>
                            <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Mars 2025</p>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <a
                        href="https://www.facebook.com/profile.php?id=61570327333295"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        Facebook
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Temoignages;
