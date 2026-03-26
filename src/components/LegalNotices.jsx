import React, { useState } from 'react';
import { X } from 'lucide-react';

const LegalNotices = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                zIndex: 2000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    backgroundColor: 'white',
                    borderRadius: '1.5rem',
                    maxWidth: '700px',
                    width: '100%',
                    maxHeight: '85vh',
                    overflowY: 'auto',
                    padding: 'clamp(1.5rem, 4vw, 3rem)',
                    position: 'relative',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Fermer les mentions légales"
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0.5rem'
                    }}
                >
                    <X size={24} color="var(--color-text-light)" />
                </button>

                <h2 style={{ color: 'var(--color-primary)', marginBottom: '2rem', fontSize: '1.8rem' }}>
                    Mentions Légales
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', color: 'var(--color-text-light)', lineHeight: 1.7 }}>
                    <div>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Éditeur du site</h3>
                        <p>
                            <strong>Carpied Diem</strong><br />
                            Clément Grava — Praticien en réflexologie plantaire<br />
                            SIRET : [À COMPLÉTER]<br />
                            Email : <a href="mailto:carpied-diem@outlook.com" style={{ color: 'var(--color-secondary)' }}>carpied-diem@outlook.com</a>
                        </p>
                    </div>

                    <div>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Responsable de la publication</h3>
                        <p>Clément Grava</p>
                    </div>

                    <div>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Hébergement</h3>
                        <p>
                            GitHub Pages — GitHub, Inc.<br />
                            88 Colin P. Kelly Jr Street<br />
                            San Francisco, CA 94107, États-Unis<br />
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-secondary)' }}>github.com</a>
                        </p>
                    </div>

                    <div>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Avertissement santé</h3>
                        <p>
                            La réflexologie plantaire est une technique de bien-être et ne constitue en aucun cas
                            un acte médical. Elle ne se substitue pas à un traitement médical prescrit par un
                            professionnel de santé. En aucun cas, les séances proposées ne doivent être un
                            prétexte pour interrompre ou modifier un traitement médical en cours sans l'avis
                            préalable de votre médecin.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Propriété intellectuelle</h3>
                        <p>
                            L'ensemble du contenu de ce site (textes, images, logo, éléments graphiques) est la
                            propriété exclusive de Carpied Diem — Clément Grava, sauf mention contraire. Toute
                            reproduction, même partielle, est interdite sans autorisation préalable.
                        </p>
                    </div>

                    <div>
                        <h3 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Protection des données personnelles</h3>
                        <p>
                            Ce site ne collecte aucune donnée personnelle de manière automatique. Les
                            informations transmises via le formulaire de contact sont uniquement utilisées
                            pour répondre à votre demande et ne sont en aucun cas transmises à des tiers.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LegalNotices;
