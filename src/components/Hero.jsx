import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: 'linear-gradient(135deg, var(--color-accent) 0%, #ffffff 100%)',
            paddingTop: '80px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '2rem',
                position: 'relative',
                zIndex: 2
            }}>

                <div style={{ maxWidth: '800px' }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        backgroundColor: 'rgba(117, 201, 183, 0.2)',
                        color: 'var(--color-primary)',
                        borderRadius: '50px',
                        marginBottom: '1.5rem',
                        fontWeight: '600',
                        fontSize: '0.9rem'
                    }}>
                        Réflexologie plantaire & Bien-être
                    </div>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        marginBottom: '1.5rem',
                        color: 'var(--color-primary)',
                        lineHeight: 1.1
                    }}>
                        Le miroir de <br /> <span style={{ color: 'var(--color-secondary)' }}>votre corps</span>
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-light)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        marginInline: 'auto'
                    }}>
                        Retrouvez l'équilibre naturel de votre organisme grâce à la réflexologie plantaire.
                        Soins personnalisés à domicile ou en cabinet dans le Finistère.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            Prendre rendez-vous <ArrowRight size={20} />
                        </a>
                        <a href="#services" className="btn btn-secondary">
                            Découvrir les bienfaits
                        </a>
                    </div>
                </div>

                {/* Logo Integration */}
                <div style={{
                    marginTop: '3rem',
                    position: 'relative',
                    width: '100%',
                    maxWidth: '400px',
                    animation: 'float 6s ease-in-out infinite'
                }}>
                    <style>{`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
              100% { transform: translateY(0px); }
            }
          `}</style>
                    <img
                        src="/assets/logo-full.png"
                        alt="Carpied Diem Illustration"
                        style={{
                            width: '100%',
                            height: 'auto',
                            filter: 'drop-shadow(0 20px 30px rgba(44, 85, 69, 0.15))'
                        }}
                    />
                </div>
            </div>

            {/* Background Leaves/Shapes Decoration */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-5%',
                width: '300px',
                height: '300px',
                background: 'var(--color-secondary)',
                opacity: 0.1,
                borderRadius: '50%',
                filter: 'blur(80px)',
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'var(--color-primary)',
                opacity: 0.05,
                borderRadius: '50%',
                filter: 'blur(80px)',
            }}></div>
        </section>
    );
};

export default Hero;
