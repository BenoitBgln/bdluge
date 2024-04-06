"use client"

import { useEffect, useState, useLayoutEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animated, useSpring, easings } from '@react-spring/web'
import { isMobile } from 'react-device-detect';

import { gobold, berlingskeSerif, delaGothicOne } from '@/libs/fonts';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
import Fall from '@/components/Fall';
import styles from "./page.module.scss";

const SectionTitle = ({ children }) => {
  return (
    <h2 className={"section__title " + gobold.className}>
      {
        children.replaceAll(" ", '\u00A0').split("").map((e, i) => <span className={"section__titleChar"} key={i}>{e}</span>)
      }
    </h2>
  )
}

export default function Home() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [focusOn, setFocusOn] = useState(null);
  const [mousePos, setMousePos] = useState({});
  const [props, api] = useSpring(() => ({
    x: 0,
    y: 0,
    xy: [0, 0],
  }));

  useLayoutEffect(() => {
    if (!isMobile) {
      const ctx = gsap.context(() => {
        gsap.timeline()
          .to(`.${styles.landing__yetiContainer}`, { filter: "blur(0px)", duration: 1 })
          .set(`.${styles.landing__imgContainer}`, { autoAlpha: 1 }, 2.05)
          .set(`.${styles.landing__title}`, { autoAlpha: 1 }, 2.05)
          .from(`.${styles.landing__lugeContainer}`, {
            x: 200,
            y: 200,
            duration: 1,
          }, 2)
          .from(`.${styles.landing__lunettesContainer}`, {
            x: -200,
            y: -200,
            duration: 1,
          }, 2)
          .from(`.${styles.landing__pilsContainer}`, {
            x: -200,
            y: 200,
            duration: 1,
          }, 2)
        // .fromTo(`.${styles.landing__titleChar}`,
        //   {
        //     y: 30,
        //     opacity: 0,
        //   },
        //   {
        //     opacity: 1,
        //     y: 0,
        //     stagger: 0.08,
        //     duration: 1
        //   }, 2);
      })

      return () => {
        ctx.revert();
      };
    }
  }, []);

  const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
  const transYeti = (x, y) => `translate(-50%, -50%) translate3d(${x / 50}px, ${y / 50}px, 0) rotate(${(x + y) / 400}deg)`;
  const transLuge = (x, y) => `translate3d(${x / 20}px, ${-y / 20}px, 0) rotate(${30 + -(x + y) / 200}deg)`;
  const transLunettes = (x, y) => `translate3d(${x / 20}px, ${-y / 20}px, 0) rotate(${(x - y) / 70}deg)`;
  const transPils = (x, y) => `translate3d(${-x / 20}px, ${-y / 20}px, 0) rotate(${-(x + y) / 40}deg)`;

  const animations = [
    { imageName: "luge4", alt: "Luge", transformFn: transLuge, className: styles.landing__lugeContainer, label: "Contact & réseaux", angle: 7, link: "/contact-reseaux" },
    { imageName: "pils4", alt: "Pils", transformFn: transPils, className: styles.landing__pilsContainer },
    { imageName: "lunettes4", alt: "Lunettes", transformFn: transLunettes, className: styles.landing__lunettesContainer, label: "Espace admis", angle: -2, link: "/espace-admis" },
    { imageName: "yeti2", alt: "Yéti", transformFn: transYeti, className: styles.landing__yetiContainer, label: "L'équipe", angle: 4, link: "/l-equipe" }
  ]

  const handleMouseOver = (e, imageName) => {
    setFocusOn(imageName);
  }

  const handleMouseLeave = () => {
    setFocusOn(null);
  }

  useEffect(() => {

    if (!isMobile) {
      gsap.registerPlugin(ScrollTrigger);

      const ctx = gsap.context(() => {

        /// SCROLL REVEAL //////////////////////////////
        gsap.from(`.${styles.enseaImgContainer}`, {
          clipPath: "inset(0px 50%)",
          ease: "power1.out",
          scrollTrigger: {
            trigger: `.${styles.enseaImgContainer}`,
            start: "top bottom",
            end: "top 10%",
            scrub: true,
          }
        })

        gsap.to(`.${styles.landing__titleChar}`, {
          scrollTrigger: {
            scrub: true,
            trigger: "." + styles.landing__title,
            start: "top 70%",
            end: "top top"
          },
          rotate: -2,
          scaleX: .9,
          // stagger: (index, target, list) => (list.length - index) * 0.05,
          stagger: (index, target, list) => (1 + index) * 0.05,
          opacity: 0,
          y: -80,
          ease: "none"
        });


        gsap.to(`.${styles.landing__imgContainer}:not(.${styles.landing__yetiContainer})`, {
          scrollTrigger: {
            scrub: true,
            start: 0,
          },
          top: "+=800",
          ease: "none"
        });

        gsap.to("." + styles.landing__yetiContainer, {
          scrollTrigger: {
            scrub: true,
            start: 0,
          },
          top: "-=200",
          ease: "none"
        });




        gsap.from(`.${styles.enseaImg}`, {
          scale: 1.2,
          scrollTrigger: {
            trigger: `.${styles.enseaImgContainer}`,
            start: "top bottom",
            scrub: true,
          }
        })

        document.querySelectorAll(`.section__title`).forEach(e => {
          gsap.from(e.querySelectorAll(`.section__titleChar`), {
            y: 30,
            rotate: 15,
            opacity: 0,
            scaleY: 0,
            stagger: 0.08,
            scrollTrigger: {
              trigger: e,
              start: "top bottom",
              end: "top 5%",
              scrub: true,
            }
          });
        })

        document.querySelectorAll(`.section__text`).forEach(e => {
          gsap.from(e, {
            opacity: 0,
            ease: "power1.in",
            scrollTrigger: {
              trigger: e,
              start: "top 100%",
              end: "top 30%",
              scrub: true,
            }
          });
        })
        /////////////////////////////////////////////
      })

      return () => {
        ctx.revert();
      };
    }
  }, []);

  return (
    <div>
      <Menu isOpen={menuIsOpen} currentPage="Home" />
      <CustomCursor />
      <Fall />
      <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

      <section
        className={styles.landing}
        onMouseOver={({ clientX: x, clientY: y }) => {
          setMousePos({ x, y });
        }}
        onMouseMove={({ clientX: x, clientY: y }) => {
          const xy = calc(x, y);
          setMousePos({ x, y });
          api.start({ xy, x, y, config: { duration: 3000, easing: easings.easeOutExpo } });

        }}
      >
        {
          animations.map((e, i) =>
            e.label ?
              (
                <Link
                  key={i}
                  onMouseOver={event => handleMouseOver(event, e.imageName)}
                  onMouseLeave={() => handleMouseLeave()}
                  href={e.link}
                  onClick={e => e.stopPropagation()}
                >
                  <animated.div
                    className={styles.landing__imgContainer + " " + e.className}
                    style={{ transform: props.xy.to(e.transformFn), opacity: focusOn === null || e.imageName === focusOn ? 1 : .3 }}
                  >
                    <Image fill={true} src={`/images/${e.imageName}.png`} alt={e.alt} />
                  </animated.div>
                  <div
                    className={styles.landing__label + " " + gobold.className}
                    style={{
                      position: "absolute",
                      top: `${mousePos.y}px`,
                      left: `${mousePos.x}px`,
                      transform: `rotate(${e.angle}deg) translateX(5%) scale(${e.imageName === focusOn ? 1 : 0})`
                    }}
                  >
                    {e.label}
                  </div>
                </Link>
              ) :
              <animated.div
                key={i}
                className={styles.landing__imgContainer + " " + e.className}
                style={{ transform: props.xy.to(e.transformFn), opacity: focusOn === null || e.imageName === focusOn ? 1 : .3 }}
              >
                <Image fill={true} src={`/images/${e.imageName}.png`} alt={e.alt} />
              </animated.div>
          )
        }
        <h1 className={styles.landing__title + " " + delaGothicOne.className}>
          {
            "BDE\u00A0ENSEA".split("").map((e, i) => <span className={styles.landing__titleChar} key={i}>{e}</span>)
          }
        </h1>
      </section >
      <section className={"section"}>
        <SectionTitle>Félicitations aux admis !</SectionTitle>
        <div>
          <p className={"section__text " + berlingskeSerif.className}>
            Toutes nos félicitations pour ta réussite aux concours et ton admission à l&apos;ENSEA ! 🥳<br />
            Nous sommes heureux de pouvoir te compter parmi nous l&apos;année scolaire prochaine et sommes prêts à t&apos;accueillir le lundi 4 septembre lors de la rentrée.<br />
            Avant cela, ton BDE est là pour te donner toutes les informations nécessaires pour que ton début d&apos;année se passe au mieux !
          </p>
          <span className={"link " + berlingskeSerif.className}>
            <Link href="/espace-admis">
              Voir
              <span className={"link__underlinedText " + gobold.className}>
                l&apos;espace admis
                <div className={"link__underline"}></div>
              </span>
            </Link>
          </span>
        </div>
      </section>
      <section className={"section " + styles.admis}>
        <div>
          <SectionTitle>Le BDE</SectionTitle>
          <p className={"section__text " + berlingskeSerif.className}>
            Le BDE (Bureau des Élèves) est une organisation étudiante gérée <strong>par les élèves</strong>, <strong>pour les élèves</strong>. C&apos;est une association à but non lucratif qui joue un rôle important dans la vie étudiante de notre école.<br />
            Notre objectif est de créer un environnement enrichissant, solidaire et épanouissant tout au long de l&apos;année.<br />
            Cela passe par nos différentes missions : accueil des élèves, animation et organisations d&apos;évènements, représentation et services pour les étudiants.
          </p>
        </div>
        <div className={styles.socials}>
          <SectionTitle>Rejoins-nous</SectionTitle>
          <div className={"section__text " + berlingskeSerif.className}>
            Rejoins la communauté Ensearque sur les réseaux sociaux pour te tenir au courant des prochains évènements.
            <br /><br />
            <div className={"section__linkContainer " + styles.admis__linkContainer}>
              <FaSquareFacebook className={styles.faIcon} />
              <span className={"link " + berlingskeSerif.className + " " + styles.admis__link}>
                <a href="https://www.facebook.com/groups/607323524520866" target='_blank'>
                  <span className={"link__underlinedText " + gobold.className}>
                    ENSEA Promo 2026
                    <div className={"link__underline"}></div>
                  </span>
                </a>
              </span>
            </div>
            <br /><br />
            <div className={"section__linkContainer " + styles.admis__linkContainer}>
              <FaInstagram className={styles.instaIcon} />
              <span className={"link " + berlingskeSerif.className + " " + styles.admis__link}>
                <a href="https://www.instagram.com/bdeensea/" target='_blank'>
                  <span className={"link__underlinedText " + gobold.className}>
                    BDE Ensea
                    <div className={"link__underline"}></div>
                  </span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={"section"}>
        <SectionTitle>L&apos;école</SectionTitle>
        <p className={"section__text " + berlingskeSerif.className}>
          Depuis plus de 70 ans, l&apos;ENSEA forme des ingénieurs généralistes reconnus dans le monde industriel et à l&apos;international. Classée parmi les meilleures Grandes Ecoles, elle délivre 5 diplômes d&apos;excellence, multi-certifiés et réputés.<br />
          Grâce à la qualité de ses enseignants et à ses laboratoires de recherche de renommée internationale, l&apos;ENSEA poursuit son objectif : former des experts de l&apos;<strong>électronique</strong>, de l&apos;<strong>informatique</strong> et des <strong>télécommunications</strong>, passionnés, responsables et innovants.
        </p>
        <div className={styles.enseaImgContainer}>
          <Image className={styles.enseaImg} src="/images/ensea.png" width={1140} height={810} alt="ENSEA" />
        </div>
      </section>
      <Footer />
    </div>
  );
}
