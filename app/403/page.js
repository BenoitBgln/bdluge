"use client"

import { useState } from 'react';
import { gobold, berlingskeSerif } from '@/libs/fonts';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
import Fall from '@/components/Fall';
import Script from 'next/script';
import Link from "next/link";
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
                <h1 className={gobold.className + " " + styles.title}>403</h1>
                <h3 className={gobold.className + " " + styles.subTitle}>Le Yéti a barré la Route !</h3>
            </section>
            <section class="section">
                <p className={"section__text " + berlingskeSerif.className}>
                    Accès refusé ! Même les yétis n&apos;ont pas le droit de passer ici ! Vous êtes-vous aventuré(e) trop loin dans les terres gelées ?
                    <br/>
                    Retournez à <Link href="/" style={{backgroundColor: "#c5d8ec"}}>votre piste habituelle</Link> avant que le gardien du glacier ne vous attrape !                
                </p>
            </section>
            <Footer />
        </div>
    );
}
