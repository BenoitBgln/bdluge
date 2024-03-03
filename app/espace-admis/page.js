"use client"

import { useState } from 'react';
import { gobold } from '@/libs/fonts';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
import Fall from '@/components/Fall';


export default function Home() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div>
            <Menu isOpen={menuIsOpen} currentPage="Espace admis" />
            <CustomCursor />
            <Fall />
            <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            <section style={{display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", flexDirection: "column", fontSize: "8.3333333333vh", letterSpacing: "2px", textTransform: "uppercase"}}>
                <h1 className={gobold.className}>Espace admis</h1>
                <h3 className={gobold.className}>Disponible prochainement...</h3>
            </section>
            <Footer />
        </div>
    );
}
