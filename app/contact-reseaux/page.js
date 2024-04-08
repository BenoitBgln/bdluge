"use client"

import { useEffect, useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animated, useSpring, easings } from '@react-spring/web'

import { gobold, berlingskeSerif, delaGothicOne } from '@/libs/fonts';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
import Fall from '@/components/Fall';

import styles from "./page.module.scss";


export default function Home() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://storage.elfsight.com/api/v2/data/572af61a337fba2d91dd56bd27f50d65")
            .then(res => res.json())
            .then(res => {
                if (!res?.data?.posts) return

                const temp = [];
                for (let post of res.data.posts) {
                    if (temp.length < 9) {
                        temp.push({
                            link: post.link,
                            imgSrc: post.images.thumbnail.url,
                            width: post.images.thumbnail.width,
                            height: post.images.thumbnail.height,
                        })
                    }
                }
                setPosts(temp);
            })
            .catch(err => console.error(err))
    }, [])

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        function random(min, max) {
            return Math.random() * (max - min) + min;
        }


        let counter = 0
        document.querySelectorAll(".post").forEach(e => {
            counter++;
            console.log(counter, random(-2000 + Math.floor(counter / 3) * 500, -1500 + Math.floor(counter / 3) * 500))
            gsap.to(e, {
                yPercent: random(-200, 400),
                ease: "none",
                scrollTrigger: {
                    // start: "top bottom", // the default values
                    // end: "bottom top",
                    scrub: true
                },
            })
        })
    }, [posts])

    return (
        <div>
            <Menu isOpen={menuIsOpen} currentPage="Contact & réseaux" />
            <CustomCursor />
            <Fall />
            <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

            <section className="pageTitleContainer" >
                <h1 className={gobold.className} >Contact & réseaux</h1>
            </section>
            <section className={"section " + berlingskeSerif.className + " " + styles.section}>
                <div className={styles.unsplitContainer}>
                    <p className={styles.text}>
                        Venez nous suivre sur Instagram pour nous contacter et vous tenir informés des dernières news et des events. Nous sommes aussi joignable à l&apos;adresse <a href="mailto:bde@ensea.fr" className={styles.mailLink} >bde@ensea.fr</a>.
                    </p>
                    <div className={"section__linkContainer "}>
                        <FaInstagram className={styles.instaIcon} />
                        <span className={"link " + berlingskeSerif.className + " " + styles.link_inline}>
                            <a href="https://www.instagram.com/bdeensea/" target='_blank'>
                                <span className={"link__underlinedText " + gobold.className}>
                                    BDE Ensea
                                    <div className={"link__underline"}></div>
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
                <div className={styles.splitContainer} style={{position: "relative"}}>
                    {/* <Image src={`/images/fb_banner.jpg`} alt="Bannière Facebook" fill={true} /> */}
                    <h2 className={gobold.className + " " + styles.section__subtitle}>
                        Ensearques et futurs Ensearques
                    </h2>
                    <p className={styles.text}>
                        Rejoignez le <strong>groupe de promo</strong> ! C&apos;est primordiale pour être informé de la vie dans l&apos;école. C&apos;est aussi ici que vous pourrez entrer en contact avec le reste de votre promo et tous les étudiants de l&apos;école !
                    </p>
                    <div className={"section__linkContainer "}>
                        <FaSquareFacebook className={styles.faIcon} />
                        <span className={"link " + berlingskeSerif.className + " " + styles.link_inline}>
                            <a href="https://www.facebook.com/groups/607323524520866" target='_blank'>
                                <span className={"link__underlinedText " + gobold.className}>
                                    ENSEA Promo 2026
                                    <div className={"link__underline"}></div>
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
                <div className={styles.splitContainer}>
                    <h2 className={gobold.className + " " + styles.section__subtitle}>
                        Entreprises
                    </h2>
                    <p className={styles.text}>
                        Vous souhaitez discutez d&apos;un partenariat ? Vous pouvez entrez en contact avec le pôle partenariat à l&apos;adresse <a href="mailto:benoit.baguelin@ensea.fr" className={styles.mailLink}>benoit.baguelin@ensea.fr</a> ou en contactant le pôle partenariat sur Instagram :
                    </p>
                    <div className={"section__linkContainer"}>
                        <FaInstagram className={styles.instaIcon} />
                        <span className={"link " + berlingskeSerif.className + " " + styles.link_inline}>
                            <a href="https://www.instagram.com/bdeensea_partenariats/" target='_blank'>
                                <span className={"link__underlinedText " + gobold.className}>
                                    Pôle partenariat BDE Ensea
                                    <div className={"link__underline"}></div>
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}
