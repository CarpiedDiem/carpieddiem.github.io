import React from 'react';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4rem'
            }}>

                <div className="content" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <h2 className="section-title">À propos</h2>

                    <div style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-light)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}>
                        <p>
                            <strong>Carpied Diem</strong> naît d'une conviction profonde : nos pieds sont le socle de notre équilibre.
                            Praticien certifié en réflexologie plantaire, je vous accompagne vers un mieux-être global en stimulant
                            les capacités d'autorégulation de votre corps.
                        </p>
                        <p>
                            La réflexologie est une technique manuelle ancestrale qui repose sur l'existence de zones réflexes
                            au niveau des pieds, correspondant à chaque organe et partie du corps humain.
                        </p>
                        <blockquote style={{
                            fontStyle: 'italic',
                            fontSize: '1.2rem',
                            color: 'var(--color-primary)',
                            borderLeft: '4px solid var(--color-secondary)',
                            paddingLeft: '1.5rem',
                            margin: '2rem auto',
                            maxWidth: '600px'
                        }}>
                            "Les yeux sont le miroir de l'âme, les pieds le miroir du corps."
                        </blockquote>
                        <p>
                            J'interviens principalement à domicile dans le secteur de <strong>Brest</strong> et ses environs
                            (Le Relecq-Kerhuon, Guipavas, Plabennec, Saint-Renan, Landerneau...), vous permettant de profiter
                            des bienfaits de la séance dans le confort de votre foyer.
                        </p>
                    </div>
                </div>

                {/* Feature Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    width: '100%'
                }}>
                    {[
                        { title: "Détente Profonde", desc: "Libère le stress et les tensions nerveuses accumulées." },
                        { title: "Circulation", desc: "Améliore la circulation sanguine et lymphatique." },
                        { title: "Équilibre", desc: "Favorise l'homéostasie et le fonctionnement naturel des organes." }
                    ].map((item, index) => (
                        <div key={index} style={{
                            padding: '2rem',
                            backgroundColor: 'var(--color-accent)',
                            borderRadius: '1rem',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease',
                            cursor: 'default'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary)' }}>{item.title}</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
