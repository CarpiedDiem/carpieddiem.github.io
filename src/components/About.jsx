import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
    const sectionRef = useScrollAnimation();

    return (
        <section ref={sectionRef} id="about" className="section-padding fade-in-section" style={{ backgroundColor: 'var(--color-white)' }}>
            <div className="container" style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4rem'
            }}>

                {/* En-tête À propos avec photo */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        {/* TODO: Remplacer par la vraie photo de Clément */}
                        <div style={{
                            width: '140px',
                            height: '140px',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            border: '3px solid var(--color-secondary)',
                            boxShadow: '0 8px 20px rgba(44, 85, 69, 0.15)',
                            backgroundColor: 'var(--color-accent)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto'
                        }}>
                            <img
                                src="/assets/photo-clement.jpeg"
                                alt="Clément - Praticien en réflexologie plantaire"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.parentElement.innerHTML = '<span style="font-size: 3rem; color: var(--color-secondary);">👤</span>';
                                }}
                            />
                        </div>
                        <p style={{
                            marginTop: '0.75rem',
                            fontWeight: '600',
                            color: 'var(--color-primary)',
                            fontSize: '1.1rem'
                        }}>Clément</p>
                    </div>
                    <h2 className="section-title" style={{ marginBottom: 0 }}>À propos</h2>
                </div>

                <div className="content" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <div style={{
                        fontSize: '1.1rem',
                        color: 'var(--color-text-light)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}>
                        <blockquote style={{
                            fontStyle: 'italic',
                            fontSize: '1.2rem',
                            color: 'var(--color-primary)',
                            borderLeft: '4px solid var(--color-secondary)',
                            paddingLeft: '1.5rem',
                            margin: '0 auto',
                            maxWidth: '600px',
                            textAlign: 'left'
                        }}>
                            « Les yeux sont le miroir de l'âme, les pieds le miroir du corps. »
                        </blockquote>
                        <p>
                            Praticien certifié en réflexologie plantaire, je vous accompagne vers un mieux-être global en
                            stimulant les capacités d'autorégulation de votre corps.
                        </p>
                        <p>
                            Equipé d'une table de massage pliante mais très confortable, j'interviens principalement à domicile
                            dans un secteur de 35 km autour de Guipavas, vous permettant de profiter des bienfaits de la séance
                            dans le confort de votre foyer, (autres distances et lieux, me contacter préalablement pour un
                            accord). Je reçois également à Guipavas.
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
                        { title: "Détente Profonde", desc: "Libère du stress et des tensions nerveuses accumulées." },
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

                {/* Parcours de Clément */}
                <div className="content" style={{
                    maxWidth: '800px',
                    textAlign: 'left',
                    fontSize: '1.1rem',
                    color: 'var(--color-text-light)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                }}>
                    <p>
                        Mon parcours de plus de 30 années dans la marine nationale m'a permis de m'ouvrir à d'autres
                        cultures, et a développé mon sens de l'écoute et mon empathie.
                    </p>
                    <p>
                        Après avoir suivi une formation en réflexologie plantaire et aussi pratiqué durant plus d'une année
                        afin de préciser ma technique, je vous propose cette pratique bien être à base d'acupressions et
                        touchers spécifiques sur les parties des pieds qui ont toutes une correspondance avec un organe ou
                        une partie du corps.
                    </p>
                    <p>
                        Cette pratique holistique et non intrusive et utilisée depuis des millénaires dans le cadre de la
                        médecine traditionnelle chinoise.
                    </p>
                    <p>
                        Chaque séance vous placera dans une bulle de réconfort et permettra à votre corps de s'autoréguler,
                        (homéostasie). Bien entendu, la réflexologie plantaire n'a pas pour but de poser un diagnostic
                        médical et ne saurait se substituer à la médecine conventionnelle ou allopathique mais doit être
                        considérée comme une voie complémentaire qui permettra d'optimiser les effets de cette dernière.
                    </p>
                    <p>
                        Elle ne doit en aucun cas être le prétexte à interrompre un traitement médical sans avis préalable
                        d'un médecin conventionnel.
                    </p>
                    <p>
                        <strong>Carpied Diem</strong> est né d'une simple évidence : nos pieds sont les organes les plus complexes de notre
                        corps. Ils sont le lien direct de connexion entre l'être humain et notre belle planète.
                    </p>
                    <p>
                        Ils savent parfaitement exprimer une multitude d'émotions telles que, (l'anxiété, le stress, la peur, le
                        courage, la nervosité, le bonheur, la joie, la peine, la prudence, l'ennui, la paresse, la
                        fatigue, la pudeur, la vitalité, la confiance, la maladresse, la timidité, l'humilité, la dépression, la
                        colère, la soumission, la séduction, la sensualité...etc).
                    </p>
                    <p>
                        De plus, ils supportent 2,5 fois le poids de notre corps à chaque pas et durant notre vie auront
                        transporté en moyenne plus de 5500 wagons de marchandises durant les 4 tours du monde qu'il
                        nous auront permis de parcourir.
                    </p>
                    <p>
                        Prendre précieusement soin de ces merveilleux compagnons de vie, c'est s'assurer le plus beau et
                        plus sûr des voyages.
                    </p>
                    <p style={{ fontStyle: 'italic', color: 'var(--color-primary)', fontWeight: '500' }}>
                        Osez découvrir ou redécouvrir ce que vos pieds peuvent vous raconter et vous accorder une
                        inoubliable pause bien être.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
