import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Temoignages from './components/Temoignages';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalNotices from './components/LegalNotices';

function App() {
    const [isLegalOpen, setIsLegalOpen] = useState(false);

    return (
        <div className="app">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Temoignages />
                <Contact />
            </main>
            <Footer onLegalClick={() => setIsLegalOpen(true)} />
            <LegalNotices isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
        </div>
    );
}

export default App;
