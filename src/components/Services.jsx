import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Services = () => {
    const sectionRef = useScrollAnimation();
    const services = [
        {
            title: "Séance Complète",
            duration: "1h à 1h30",
            price: "45€",
            priceNote: "Tarif libre à partir de",
            features: [
                "Bilan réflexologique",
                "Détente et relaxation",
                "Travail ciblé sur les zones de tension",
                "Rééquilibrage global",
                "Profond sentiment d'ancrage",
                "Amélioration de votre sommeil"
            ]
        },
        {
            title: "Séance Découverte",
            duration: "30 min",
            price: "20€",
            features: [
                "Découverte de la pratique",
                "Relaxation immédiate",
                "Soulagement des jambes lourdes",
                "Idéal pour une première approche",
                "Régulation du système lymphatique"
            ]
        },
        {
            title: "Forfait Bien-être",
            duration: "5 séances de 1h à 1h30",
            price: "200€",
            features: [
                "Suivi personnalisé",
                "Travail en profondeur",
                "Persistance des bienfaits dans la durée",
                "Tarif préférentiel"
            ]
        }
    ];

    return (
        <section ref={sectionRef} id="services" className="section-padding fade-in-section" style={{ backgroundColor: '#f9fafb' }}>
            <div className="container">
                <h2 className="section-title">Mes Prestations</h2>

                <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--color-text-light)' }}>
                    Chaque séance est unique et adaptée à vos besoins du moment.
                    Le déplacement est inclus dans un rayon de 35 km autour de Guipavas (me consulter pour les détails).
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {services.map((service, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            borderRadius: '1.5rem',
                            padding: '2.5rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            position: 'relative',
                            overflow: 'hidden',
                            border: index === 0 ? '2px solid var(--color-secondary)' : '1px solid #eee'
                        }}>
                            {index === 0 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    backgroundColor: 'var(--color-secondary)',
                                    color: 'white',
                                    fontSize: '0.8rem',
                                    fontWeight: 'bold',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '1rem'
                                }}>
                                    Recommandé
                                </div>
                            )}

                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                            {service.priceNote && (
                                <p style={{ color: 'var(--color-secondary)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.25rem' }}>
                                    {service.priceNote}
                                </p>
                            )}
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '2rem' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>{service.price}</span>
                                <span style={{ color: 'var(--color-text-light)' }}>/ {service.duration}</span>
                            </div>

                            <ul style={{ marginBottom: '2rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                {service.features.map((feature, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-text-light)' }}>
                                        <CheckCircle2 size={18} color="var(--color-secondary)" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className={index === 0 ? "btn btn-primary" : "btn btn-secondary"} style={{ textAlign: 'center' }}>
                                Réserver
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
