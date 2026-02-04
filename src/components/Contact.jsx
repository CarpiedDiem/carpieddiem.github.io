import React from 'react';
import { Mail, Phone, Instagram, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
            <div className="container">
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '2rem',
                    padding: 'clamp(2rem, 5vw, 4rem)',
                    color: 'var(--color-text)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 className="section-title" style={{ marginTop: 0 }}>Prendre Rendez-vous</h2>
                        <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
                            N'hésitez pas à me contacter pour toute question ou pour réserver votre séance.
                            Je vous réponds dans les plus brefs délais.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '3rem'
                    }}>
                        {/* Contact Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ padding: '1rem', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}>
                                    <Mail color="var(--color-primary)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email</h3>
                                    <a href="mailto:carpied-diem@outlook.com" style={{ color: 'var(--color-text-light)', textDecoration: 'underline' }}>
                                        carpied-diem@outlook.com
                                    </a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ padding: '1rem', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}>
                                    <MapPin color="var(--color-primary)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Zone d'intervention</h3>
                                    <p style={{ color: 'var(--color-text-light)' }}>
                                        Déplacements à domicile :<br />
                                        Brest, Le Relecq-Kerhuon, Guipavas,<br />
                                        Plabennec, Saint-Renan, Landerneau
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ padding: '1rem', backgroundColor: 'var(--color-accent)', borderRadius: '50%' }}>
                                    <Instagram color="var(--color-primary)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Réseaux Sociaux</h3>
                                    <a href="https://www.facebook.com/profile.php?id=61570327333295" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-light)' }}>
                                        Suivez Carpied Diem sur Facebook
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Simple Form (Visual Only for now) */}
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input type="text" placeholder="Nom" style={inputStyle} />
                                <input type="text" placeholder="Prénom" style={inputStyle} />
                            </div>
                            <input type="email" placeholder="Votre email" style={inputStyle} />
                            <input type="tel" placeholder="Téléphone" style={inputStyle} />
                            <textarea placeholder="Votre message ou demande de RDV..." style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}></textarea>
                            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                                Envoyer ma demande
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

const inputStyle = {
    width: '100%',
    padding: '1rem',
    border: '1px solid #e5e7eb',
    borderRadius: '0.75rem',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'inherit'
};

export default Contact;
