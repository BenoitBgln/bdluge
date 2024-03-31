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
import { InstagramEmbed } from 'react-social-media-embed';

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
            <Menu isOpen={menuIsOpen} currentPage="Nos évènements" />
            <CustomCursor />
            <Fall />
            <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

            <section className={'section ' + styles.container}>
                <div className={styles.titleContainer}>
                    <h1 className={gobold.className + " " + styles.title}>Nos évènements</h1>
                    <p>
                        Quel meilleur moyen pour voir nos évènements que de nous suivre sur Instagram ?
                    </p>
                </div>
                <div className={styles.iframeContainer}>
                    <iframe
                        src="https://www.instagram.com/bdeensea/embed/"
                        // frameborder="0"
                        // allowfullscreen
                        scrolling='no'
                        // width="800px"
                        // height="80vh"
                        style={{ width: "100%", height: "100%", border: "0px", borderRadius: "10px", overflow: "hidden" }}
                    />
                </div>
            </section>

            {/*
                <div class="parent" style={{
                margin: "20vw 10vw",
                display: "grid",
                width: "80vw",
                gridTemplateColumns: "1fr 1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: "5px",
                gridTemplateAreas:
                    `". . ."
                    ". . . "`
            }}>
                {
                    posts.map((e, i) => (
                        // <InstagramEmbed url={e.link} key={i} />
                        <div key={i} style={{ position: "relative", width: "100%", borderRadius: "5px", overflow: "hidden",marginBottom: "200vh" }} className="post">
                            <Image style={{ objectFit: "cover", objectPosition: "center center" }} fill={true} className={styles.igPostImage} key={i} src={e.imgSrc} alt="BDLuge Instagram Post" />
                            {//<InstagramEmbed url={e.link} />}
                        </div>
                    ))
                }
            </div>
            */}

            <Footer />
        </div>
    );
}
