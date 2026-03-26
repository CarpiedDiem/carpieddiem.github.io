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
                    maxWidth: '600px',
                    margin: '0 auto',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem'
                }}>
                    {/* Étoiles décoratives */}
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                        {[1, 2, 3, 4, 5].map((i) => (
                            <Star key={i} size={28} color="var(--color-secondary)" fill="var(--color-secondary)" style={{ opacity: 0.3 }} />
                        ))}
                    </div>

                    <div style={{
                        padding: '2.5rem',
                        backgroundColor: 'white',
                        borderRadius: '1.5rem',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                        width: '100%'
                    }}>
                        <MessageCircle size={40} color="var(--color-secondary)" style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                        <p style={{
                            color: 'var(--color-text-light)',
                            fontSize: '1.15rem',
                            fontStyle: 'italic',
                            marginBottom: '1.5rem',
                            lineHeight: 1.7
                        }}>
                            Les avis de mes clients arrivent bientôt !<br />
                            Votre retour d'expérience compte beaucoup pour moi.
                        </p>
                        <a
                            href="https://www.facebook.com/profile.php?id=61570327333295"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            Laisser un avis sur Facebook
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Temoignages;
