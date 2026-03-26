import React, { useState } from 'react';
import { Mail, Instagram, MapPin } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Contact = () => {
    const [form, setForm] = useState({ nom: '', prenom: '', email: '', tel: '', message: '' });
    const sectionRef = useScrollAnimation();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Demande de RDV - ${form.prenom} ${form.nom}`);
        const body = encodeURIComponent(
            `${form.message}\n\n---\nNom : ${form.nom}\nPrénom : ${form.prenom}\nEmail : ${form.email}\nTéléphone : ${form.tel}`
        );
        window.location.href = `mailto:carpied-diem@outlook.com?subject=${subject}&body=${body}`;
    };

    return (
        <section ref={sectionRef} id="contact" className="section-padding fade-in-section" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
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

                        {/* Formulaire mailto */}
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleSubmit}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <div>
                                    <label htmlFor="contact-nom" className="sr-only">Nom</label>
                                    <input id="contact-nom" type="text" name="nom" placeholder="Nom" value={form.nom} onChange={handleChange} style={inputStyle} />
                                </div>
                                <div>
                                    <label htmlFor="contact-prenom" className="sr-only">Prénom</label>
                                    <input id="contact-prenom" type="text" name="prenom" placeholder="Prénom" value={form.prenom} onChange={handleChange} style={inputStyle} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="sr-only">Email</label>
                                <input id="contact-email" type="email" name="email" placeholder="Votre email" value={form.email} onChange={handleChange} style={inputStyle} />
                            </div>
                            <div>
                                <label htmlFor="contact-tel" className="sr-only">Téléphone</label>
                                <input id="contact-tel" type="tel" name="tel" placeholder="Téléphone" value={form.tel} onChange={handleChange} style={inputStyle} />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="sr-only">Message</label>
                                <textarea id="contact-message" name="message" placeholder="Votre message ou demande de RDV..." value={form.message} onChange={handleChange} style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>
                                Envoyer ma demande
                            </button>
                        </form>
                    </div>

                    {/* Carte Google Maps */}
                    <div style={{ marginTop: '3rem' }}>
                        <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', textAlign: 'center', color: 'var(--color-primary)' }}>
                            Zone d'intervention
                        </h3>
                        <div style={{
                            borderRadius: '1rem',
                            overflow: 'hidden',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                            border: '1px solid #e5e7eb'
                        }}>
                            <iframe
                                title="Zone d'intervention Carpied Diem - Guipavas et environs"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d84956.5!2d-4.45!3d48.43!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4816bbe1d6e4b4e5%3A0x40ca5cd36e56db0!2sGuipavas!5e0!3m2!1sfr!2sfr!4v1"
                                width="100%"
                                height="300"
                                style={{ border: 0, display: 'block' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
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
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    fontFamily: 'inherit'
};

export default Contact;
