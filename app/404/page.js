"use client"

import { useState } from 'react';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
import Fall from '@/components/Fall';
import Script from 'next/script';
import Link from "next/link";
import styles from "./page.module.scss";
import { gobold, berlingskeSerif, delaGothicOne } from '@/libs/fonts';


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
                <h1 className={gobold.className + " " + styles.title}>404</h1>
                <h3 className={gobold.className + " " + styles.subTitle}>La luge du yéti a déraillé !</h3>
            </section>
            <section class="section">
                <p className={"section__text " + berlingskeSerif.className}>
                    Vous avez l&apos;air perdu(e) comme un yéti sans sa luge ! Nous avons cherché dans les recoins les plus reculés de notre site, mais cette page semble aussi introuvable qu&apos;un bonhomme de neige en été.
                    <br/>
                    Peut-être pourriez-vous essayer de suivre <Link href="/" style={{backgroundColor: "#c5d8ec"}}>les empreintes du yéti</Link> pour retrouver votre chemin ?
                </p>
            </section>
            <Footer />
        </div>
    );
}
