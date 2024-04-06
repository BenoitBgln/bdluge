"use client"

import { useEffect, useState, useLayoutEffect, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaSquareFacebook, FaInstagram } from "react-icons/fa6";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animated, useSpring, easings } from '@react-spring/web'
import Tilt from 'react-parallax-tilt';


import { gobold, berlingskeSerif, delaGothicOne } from '@/libs/fonts';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CustomCursor from '@/components/CustomCursor';
import Fall from '@/components/Fall';
import styles from "./page.module.scss";


const Profile = ({ name, role, imageName, lead, nickname }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const decimalX = e.clientX - window.innerWidth / 2;
            const decimalY = -(e.clientY - window.innerHeight / 2);
            setMousePosition({ x: decimalX, y: decimalY });
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }

    }, []);


    return (
        <div className={styles.profile}>
            <Tilt
                // tiltReverse={true}
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                perspective={800}
                transitionSpeed={1500}
                gyroscope={true}
                // glareEnable={true}
                style={{
                    transformStyle: "preserve-3d",
                    overflow: "hidden",
                    borderRadius: "1000px",
                    backgroundColor: "rgb(176, 203, 224)"
                }}
            >
                <Tilt
                    // tiltReverse={true}

                    tiltMaxAngleX={15}
                    tiltMaxAngleY={15}
                    perspective={800}
                    transitionSpeed={1500}
                    gyroscope={true}
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                >
                    <div
                        className={styles.profile__pictureContainer}
                        style={{
                            transformStyle: "preserve-3d"
                        }}
                    >
                        <Image className={styles.profile__picture}
                            style={{
                                transform: "translateX(-50%) translateZ(40px)",
                                filter: `drop-shadow(${-mousePosition.x / 40}px ${-mousePosition.y / 40}px 4px #44444460)`,
                            }}
                            fill={true}
                            src={`/images/profiles/${imageName}.png`}
                            alt={name}
                        />
                    </div>
                </Tilt>
            </Tilt>
            <div className={styles.profile__name + " " + gobold.className}>
                <p>
                    {name}
                </p>
                {
                    role ? <p className={styles.profile__role}>{role}</p> : null
                }
            </div>
            <div className={styles.profile__name + " " + gobold.className + " " + styles.profile__nickname}>
                <p>
                    {nickname}
                </p>
                {
                    role ? <p className={styles.profile__role}>{role}</p> : null
                }
            </div>
        </div>
    )
}

export default function Home() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const onTitleHover = () => {
        if (prompt(`L'ENSEA, pour École Nationale Supérieure de l'Électronique et de ses Applications, est une institution d'enseignement supérieur française spécialisée dans le domaine de l'électronique. Qu'y fait-on comme des rois/reines depuis sa création en 1952 ?
A) De l'informatique
B) De l'électronique
C) Des télécommunications
D) Autre (écrire la réponse)

Réponse : `).includes("baise")) {

            var MIN_HEIGHT = 30;
            var MIN_WIDTH = 30;
            var MAX_HEIGHT = 350;
            var MAX_WIDTH = 350;

            var PATH_TO_SONG = "/easter/harlem.mp3";

            var CSS_BASE_CLASS = "mw-harlem_shake_me";
            var CSS_SLOW_CLASS = "mw-harlem_shake_slow";
            var CSS_FIRST_CLASS = "im_first";
            var CSS_OTHER_CLASSES = ["im_drunk", "im_baked", "im_trippin", "im_blown"];

            var CSS_STROBE_CLASS = "mw-strobe_light";

            var PATH_TO_CSS = "/easter/harlem.css";
            var FILE_ADDED_CLASS = "mw_added_css";

            function addCSS() {
                var css = document.createElement("link");
                css.setAttribute("type", "text/css");
                css.setAttribute("rel", "stylesheet");
                css.setAttribute("href", PATH_TO_CSS);
                css.setAttribute("class", FILE_ADDED_CLASS);

                document.body.appendChild(css);
            }

            function removeAddedFiles() {
                var addedFiles = document.getElementsByClassName(FILE_ADDED_CLASS);
                for (var i = 0; i < addedFiles.length; i++) {
                    document.body.removeChild(addedFiles[i]);
                }
            }

            function flashScreen() {
                var flash = document.createElement("div");
                flash.setAttribute("class", CSS_STROBE_CLASS);
                document.body.appendChild(flash);

                setTimeout(function () {
                    document.body.removeChild(flash);
                }, 100);
            }

            function size(node) {
                return {
                    height: node.offsetHeight,
                    width: node.offsetWidth
                };
            }

            function withinBounds(node) {
                var nodeFrame = size(node);
                return (nodeFrame.height > MIN_HEIGHT &&
                    nodeFrame.height < MAX_HEIGHT &&
                    nodeFrame.width > MIN_WIDTH &&
                    nodeFrame.width < MAX_WIDTH);
            }

            function posY(elm) {
                var test = elm;
                var top = 0;
                while (!!test) {
                    top += test.offsetTop;
                    test = test.offsetParent;
                }
                return top;
            }

            function viewPortHeight() {
                var de = document.documentElement;
                if (!!window.innerWidth) {
                    return window.innerHeight;
                } else if (de && !isNaN(de.clientHeight)) {
                    return de.clientHeight;
                }
                return 0;
            }

            function scrollY() {
                if (window.pageYOffset) {
                    return window.pageYOffset;
                }
                return Math.max(document.documentElement.scrollTop, document.body.scrollTop);
            }

            var vpH = viewPortHeight();
            var st = scrollY();
            function isVisible(node) {
                var y = posY(node);

                return (y >= st && y <= (vpH + st));
            }

            function playSong() {
                var audioTag = document.createElement("audio");
                audioTag.setAttribute("class", FILE_ADDED_CLASS);
                audioTag.src = PATH_TO_SONG;
                audioTag.loop = false;

                var harlem = false,
                    shake = false,
                    slowmo = false;

                audioTag.addEventListener("timeupdate", function () {
                    var time = audioTag.currentTime,
                        nodes = allShakeableNodes,
                        len = nodes.length, i;

                    // song started, start shaking first item
                    if (time >= 0.5 && !harlem) {
                        harlem = true;
                        shakeFirst(firstNode);
                    }

                    // everyone else joins the party
                    if (time >= 15.5 && !shake) {
                        shake = true;
                        stopShakeAll();
                        flashScreen();
                        for (i = 0; i < len; i++) {
                            shakeOther(nodes[i]);
                        }
                    }

                    // slow motion at the end
                    if (audioTag.currentTime >= 28.4 && !slowmo) {
                        slowmo = true;
                        shakeSlowAll();
                    }
                }, true);

                audioTag.addEventListener("ended", function () {
                    stopShakeAll();
                    removeAddedFiles();
                }, true);

                audioTag.innerHTML = "<p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p>";

                document.body.appendChild(audioTag);
                audioTag.play();
            }

            function shakeFirst(node) {
                node.className += " " + CSS_BASE_CLASS + " " + CSS_FIRST_CLASS;
            }
            function shakeOther(node) {
                node.className += " " + CSS_BASE_CLASS + " " + CSS_OTHER_CLASSES[Math.floor(Math.random() * CSS_OTHER_CLASSES.length)];
            }

            function shakeSlowAll() {
                var shakingNodes = document.getElementsByClassName(CSS_BASE_CLASS);
                for (var i = 0; i < shakingNodes.length;) {
                    shakingNodes[i].className = shakingNodes[i].className.replace(CSS_BASE_CLASS, CSS_SLOW_CLASS);
                }
                CSS_BASE_CLASS = CSS_SLOW_CLASS;
            }

            function stopShakeAll() {
                var shakingNodes = document.getElementsByClassName(CSS_BASE_CLASS);
                var regex = new RegExp('\\b' + CSS_BASE_CLASS + '\\b');
                for (var i = 0; i < shakingNodes.length;) {
                    shakingNodes[i].className = shakingNodes[i].className.replace(regex, "");
                }
            }

            // get first item
            var allNodes = document.getElementsByTagName("*"), len = allNodes.length, i, thisNode;
            var firstNode = null;
            for (i = 0; i < len; i++) {
                thisNode = allNodes[i];
                if (withinBounds(thisNode)) {
                    if (isVisible(thisNode)) {
                        firstNode = thisNode;
                        break;
                    }
                }
            }

            if (thisNode === null) {
                console.warn("Could not find a node of the right size. Please try a different page.");
                return;
            }

            // insert CSS
            addCSS();

            // play song
            playSong();

            var allShakeableNodes = [];

            for (i = 0; i < len; i++) {
                thisNode = allNodes[i];
                if (withinBounds(thisNode)) {
                    allShakeableNodes.push(thisNode);
                }
            }
        }
        else {
            alert("oui")
        }
    }

    return (
        <div>
            <Menu isOpen={menuIsOpen} currentPage="L'équipe" />
            <CustomCursor />
            <Fall />
            <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

            <section className="pageTitleContainer" >
                <h1 className={gobold.className} onMouseEnter={onTitleHover}>L&apos;équipe</h1>
            </section>
            <section className={styles.section}>
                <h2 className={styles.section__title + " " + gobold.className}>Le Bureau</h2>
                <div className={styles.section__group}>
                    <div className={styles.section__row}>
                        <Profile name="Matis" imageName="matis" role="Président" nickname="Tonton beauf" lead={true} />
                        <Profile name="Reem" imageName="reem" role="Trésorière" nickname="Dépreem" lead={false} />
                        <Profile name="Noé" imageName="noe" role="Secrétaire" nickname="Aigre Pas Doux" lead={false} />
                        <Profile name="Tom" imageName="tom" role="Vice-Trésorier" nickname="Le T" lead={false} />
                    </div>
                    <div className={styles.section__row}>
                        <Profile name="Elio" imageName="elio" role="Vice-Président" nickname="Slamdrunk" lead={false} />
                        <Profile name="Louis F." imageName="louisf" role="Vice-Président" nickname="Belle Blonde" lead={false} />
                        <Profile name="Maëlle" imageName="maelle" role="Vice-Présidente" nickname="Dréantorse" lead={false} />
                        <Profile name="Hugo" imageName="hugo" role="Vice-Président" nickname="Hugzz" lead={false} />
                    </div>
                </div>
                <p className={styles.section__text + " " + berlingskeSerif.className}>
                    Le Bureau a une multitude de responsabilités. La plus importante est de bien gérer son groupe en interne : être sûr que chaque pôle travaille comme il faut et superviser tous les différents projets. Il faut qu&apos;il sache s&apos;adapter et trouver des solutions aux problèmes qu&apos;encontre le BDE, et prendre des décisions parfois importantes. Il a également des responsabilités en externe : il est l&apos;image du BDE et de la vie associative notamment auprès des autres écoles et de nos partenaires.
                </p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.section__title + " " + gobold.className}>Pôle Events</h2>
                <div className={styles.section__group}>
                    <div className={styles.section__row}>
                        <Profile name="Matéo" imageName="mateo" role="Respo" nickname="Mateouche" lead={true} />
                        <Profile name="Nathan" imageName="nathan" nickname="La marmotte" />
                        <Profile name="Lucas" imageName="lucas" nickname="Respo Caillou" />
                        <Profile name="Pierre" imageName="pierre" nickname="Pain D'Epiiiice" />
                    </div>
                </div>
                <p className={styles.section__text + " " + berlingskeSerif.className}>
                    Le pôle Events est en charge de tous les évènements organisés par le BDE au long de l&apos;année. Il étudie aussi les différents aspects de l&apos;évènement avec l&apos;administration.
                </p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.section__title + " " + gobold.className}>Pôle Soirées</h2>
                <div className={styles.section__group}>
                    <div className={styles.section__row}>
                        <Profile name="Mathieu" imageName="mathieu" role="Respo" nickname="IvresseCH" lead={true} />
                    </div>
                    <div className={styles.section__row}>
                        <Profile name="Guillaume" imageName="guillaume" role="Co-respo" nickname="Réguigui" />
                        <Profile name="Baptiste" imageName="baptiste" nickname="La trique " />
                        <Profile name="Adrien" imageName="adrien" nickname="Ministre" />
                        <Profile name="Louis G." imageName="louisg" nickname="Décadence" />
                    </div>
                </div>
                <p className={styles.section__text + " " + berlingskeSerif.className}>
                    Le pôle Soirée est comme tu l&apos;auras deviné chargé d&apos;organiser les soirées. Plus précisément, il s&apos;occupe du choix du thème et des décorations, de la sécurité mais aussi du budget, et doit se coordonner avec les différentes assos qui participent à la soirée comme La Cave ou Esound. Il doit réaliser un dossier à présenter devant l&apos;administration avant chaque soirée pour qu&apos;elle la valide et sa mission est simple : émerveiller le campus.
                </p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.section__title + " " + gobold.className}>Pôle Intégration</h2>
                <div className={styles.section__group}>
                    <div className={styles.section__row}>
                        <Profile name="Julien" imageName="julien" role="Respo" nickname="Pitchoune" lead={true} />
                        <Profile name="Lorenzo" imageName="lorenzo" nickname="Il Magnifico" />
                        <Profile name="Antoine" imageName="antoine" nickname="Brice De Bretagne" />
                        <Profile name="Florian" imageName="florian" nickname="Lebrun" />
                    </div>
                </div>
                <p className={styles.section__text + " " + berlingskeSerif.className}>
                    Le pôle Intégration est chargé de l&apos;intégration des premières annés au sein de l&apos;école. Plus précisément, ils veillent sur les premières années, les orientent, ils s&apos;occupent des activités de rentrée, le tout en bienveillance.
                </p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.section__title + " " + gobold.className}>Pôle WAC</h2>
                <div className={styles.section__group}>
                    <div className={styles.section__row}>
                        <Profile name="Ewan" imageName="ewan" role="Respo" nickname="EZT" lead={true} />
                        <Profile name="Sédrenn" imageName="sedrenn" nickname="Draines" />
                        <Profile name="Osmane" imageName="osmane" nickname="Osmane" />
                        <Profile name="Swann" imageName="swann" nickname="Neo" />
                    </div>
                </div>
                <p className={styles.section__text + " " + berlingskeSerif.className}>
                    Le pôle WAC est chargé de l&apos;organisation du Week-end d&apos;Accueil est de Cohésion. En collaboration avec l&apos;administration, il  organise un week-end inoubliable pour les étudiants de l&apos;école.
                </p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.section__title + " " + gobold.className}>Pôle Communications</h2>
                <div className={styles.section__group}>
                    <div className={styles.section__row}>
                        <Profile name="Martin" imageName="martin" role="Respo" nickname="5/6" lead={true} />
                        <Profile name="Kevin" imageName="kevin" nickname="Robin des boissons" />
                        <Profile name="Florent" imageName="florent" nickname="Batteur333 " />
                    </div>
                </div>
                <p className={styles.section__text + " " + berlingskeSerif.className}>
                    Le pôle Com est un pôle essentiel au sein du BDE. Il permet de faire le lien entre le BDE et les étudiants. Chaque évènement, soirée, partenariat du BDE devra être communiqué aux étudiants du Campus, c&apos;est pour cela qu&apos;il nous faut faire une affiche et une publication. Différents supports peuvent être utilisés, que ce soit une affiche, une story, une vidéo ; le pôle Com est vaste et plutôt créatif.
                </p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.section__title + " " + gobold.className}>Pôle Partenariats</h2>
                <div className={styles.section__group}>
                    <div className={styles.section__row}>
                        <Profile name="Benoît" imageName="benoit" role="Respo" nickname="Beubeuh" lead={true} />
                        <Profile name="Tristan" imageName="tristan" nickname="MangePasTout" />
                    </div>
                </div>
                <p className={styles.section__text + " " + berlingskeSerif.className}>
                    Le pôle Partenariats forme le lien entre le BDE et le monde professionnel. Il se charge de mettre en place des partenariats avec des entreprises qui vont être profitables aux étudiants. Nous essayons également de ramener le plus d&apos;argent afin de financer les événements majeurs qui ont lieu sur le campus.
                </p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.section__title + " " + gobold.className}>Respos Associations</h2>
                <div className={styles.section__group}>
                    <div className={styles.section__row}>
                        <Profile name="Sedrenn" imageName="sedrenn" role="Respo" nickname="Draines" lead={true} />
                        <Profile name="Louis G." imageName="louisg" role="Respo" nickname="Décadence" lead={true} />
                    </div>
                </div>
                <p className={styles.section__text + " " + berlingskeSerif.className}>
                    Les Respos Assos sont chargés de coordonner toutes les évènements organisés par toutes les associations de l&apos;école.
                </p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.section__title + " " + gobold.className}>Respo Foyer</h2>
                <div className={styles.section__group}>
                    <div className={styles.section__row}>
                        <Profile name="Callum" imageName="callum" role="Respo" nickname="Calomnie" lead={true} />
                    </div>
                </div>
                <p className={styles.section__text + " " + berlingskeSerif.className}>
                    Le Respo Foyer est chargé du bon fonctionnement de la salle de détente de l&apos;école, le Foyer.
                </p>
            </section>
            <Footer />
        </div>
    );
}
