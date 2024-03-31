"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
import Fall from '@/components/Fall';
import { gobold, berlingskeSerif, delaGothicOne } from '@/libs/fonts';

import PictureEVS from "@/public/images/bon-plans/picture-envoituresimone.png"
import PictureBolt from "@/public/images/bon-plans/picture-bolt.png"
import PictureIgraal from "@/public/images/bon-plans/picture-igraal.svg"

import styles from "./page.module.scss"

export default function BonsPlans() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div>
            <Menu isOpen={menuIsOpen} currentPage="Bons plans" />
            <CustomCursor />
            <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />


            <section className={"section " + styles.navSection}>
                <p className={"section__text"}>
                    Pour tous vos besoins quotidiens, votre BDE vous a concocté un bouquet de bons plans à utiliser sans modérations !
                </p>
                <div className={styles.nav__split}>
                    <h1 className={gobold.className + " " + styles.nav__title}>Bons <br/>plans</h1>
                    <ul className={styles.nav + " " + gobold.className}>
                        <li className={styles.nav__item}>Permis de conduire</li>
                        <li className={styles.nav__item}>Cashback</li>
                        {/* <li className={styles.nav__item}>VTC</li>
                        <li className={styles.nav__item}>Courses</li> */}
                    </ul>
                </div>
                <div></div>
            </section>
            <section className={"section " + styles.plan + " " + berlingskeSerif.className}>
                <div className={styles.plan__text}>
                    <h3 className={"section__title " + gobold.className}>
                        En Voiture Simone
                    </h3>
                    <p className={"section__text"}>
                        En Voiture Simone est une auto-école en ligne qui simplifie votre préparation au code de la route et au permis de conduire. Si les grandes étapes restent les mêmes que dans une auto-école traditionnelle, passer le permis avec En Voiture Simone offre de nombreux avantages.<br />
                        Il suffit de réserver tes heures de conduite depuis l&apos;app directement dans l&apos;agenda du moniteur de ton choix (tous les moniteurs sont diplômés d&apos;État). Et retrouves-le au point de rendez-vous près de chez toi.
                        <br /><br />
                        Et grâce à ton code promo « <strong>ENSEA</strong> » tu obtiens <strong>minimum 50€ de réduction</strong> sur ton pack permis !<br /><br />
                        <span className={"link " + berlingskeSerif.className}>
                            <a href="https://www.envoituresimone.com/">
                                <span className={"link__underlinedText " + gobold.className}>
                                    En savoir plus
                                    <span className={"link__underline"}></span>
                                </span>
                            </a>
                        </span>
                    </p>
                </div>
                <div className={styles.plan__imgContainer}>
                    <Image src={PictureEVS} alt="En Voiture Simone" />
                </div>
            </section>
            <section className={"section " + styles.plan + " " + berlingskeSerif.className}>
                <div className={styles.plan__imgContainer} style={{ justifyContent: "flex-start" }}>
                    <Image src={PictureIgraal} alt="Igraal" />
                </div>
                <div className={styles.plan__text}>
                    <h3 className={"section__title " + gobold.className}>
                        Igraal
                    </h3>
                    <p className={"section__text"}>
                        iGraal c&apos;est un site internet, une extension et une application gratuite et sécurisée. A chaque commande effectuée, tu gagnes de l&apos;argent chez l&apos;un des 1800 sites partenaires.<br />
                        10 millions d&apos;utilisateurs utilisent iGraal en France et <strong>gagnent en moyenne 120€ par an</strong>.<br />
                        Chaque commande peut rapporter de l&apos;argent en quelques clics, rien de compliqué !<br />
                        <br />
                        Et grâce au lien ci-dessous, tu as <strong>10€ de cashback immédiatement crédité sur ta cagnotte</strong> iGraal.
                        <br /><br />
                        <span className={"link " + berlingskeSerif.className}>
                            <a href="https://fr.igraal.com/parrainage?parrain=AG_65762dde225e2&fbclid=IwAR19InmycrZo5lk5hG-v7Ef9p8vHGpyRpBpld0UKtzyFxhM8sBpWNk-WxA0">
                                <span className={"link__underlinedText " + gobold.className}>
                                    Profiter du bon plan
                                    <span className={"link__underline"}></span>
                                </span>
                            </a>
                        </span>
                    </p>
                </div>
            </section>
            {/* <section className={"section " + styles.plan + " " + berlingskeSerif.className}>
                <div className={styles.plan__text}>
                    <h3 className={"section__title " + gobold.className}>
                        Bolt
                    </h3>
                    <p className={"section__text"}>
                        On vous a dégoté un bon plan pour rentrer en toute sécurité après vos soirées.
                        Bolt est le leader du VTC en France après Uber, moins cher et super dispo.
                        La solution idéale pour rentrée de soirée s&apos;il n&apos;y pas plus de transport en commun ou que vous avez la flemme de marcher.<br /><br />
                        On vous a donc négocié un code promo sur votre première course : <strong>ENSEA2024</strong><br />
                        Il vous offre -50% de réduction sur une limite de 15€ de réduction sur la première course.
                        <br /><br />
                        <span className={"link " + berlingskeSerif.className}>
                            <a href="https://bolt.eu/fr-fr/0">
                                <span className={"link__underlinedText " + gobold.className}>
                                    Profiter du bon plan
                                    <span className={"link__underline"}></span>
                                </span>
                            </a>
                        </span>
                    </p>
                </div>
                <div className={styles.plan__imgContainer}>
                    <Image src={PictureBolt} alt="Bolt" />
                </div>
            </section> */}

            <Footer />
        </div>
    );
}
