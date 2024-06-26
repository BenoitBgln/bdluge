"use client"

import { useState } from 'react';
import { gobold } from '@/libs/fonts';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
import Fall from '@/components/Fall';
import Script from 'next/script';
import styles from "./page.module.scss";


export default function Home() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div>
            <Script
                src="/scripts/snow3d.js"
                strategy="lazyOnload"
            />
            <Menu isOpen={menuIsOpen} currentPage="Espace admis" />
            <CustomCursor />
            <Fall />
            <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
            <div className="topFade" ></div>

            <section className="pageTitleContainer" >
                <h1 className={gobold.className + " " + styles.title}>Espace admis</h1>
                <h3 className={gobold.className + " " + styles.subTitle}>Disponible prochainement</h3>
            </section>
            <Footer />
        </div>
    );
}
