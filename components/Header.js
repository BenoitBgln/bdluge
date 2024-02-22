import { gobold, berlingskeSerif } from "@/libs/fonts";
import gsap from "gsap";
import Image from "next/image";

import styles from "@/app/page.module.scss"
import { useEffect, useRef } from "react";

export default function Header({ menuIsOpen, setMenuIsOpen }) {
    const tl = useRef();

    const handleOnClick = e => {
        if (!tl.current) {
            tl.current = gsap.timeline()
                .to("." + styles.landing__imgContainer, { autoAlpha: 0, duration: .3 })
                .to(".menu", { autoAlpha: 1, duration: .3 })
                .from(".nav__itemChar", {
                    y: 40,
                    // rotate: 15,
                    opacity: 0,
                    scaleY: 0,
                    ease: "back.out(1.7)",
                    stagger: 0.02,
                })
        } else {
            if (!menuIsOpen) {
                tl.current.play();
            } else {
                tl.current.reverse();
            }
        }


        setMenuIsOpen(!menuIsOpen);
        e.preventDefault();
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    }

    return (
        <header className={"headerWrapper"}>
            <div className={"banner"}>
                {
                    Array(40).fill([["BDLuge", "Pour un déluge de fun"]]).flat().map((e, i) => (
                        <span key={i} className={"banner__item"}>
                            <span className={gobold.className}>{e[0]}</span>
                            <span className={berlingskeSerif.className}>{e[1]}</span>
                        </span>
                    ))
                }
            </div>
            <div className={"header"}>
                <div className={"header__logoContainer"}>
                    <Image className={"header__logo"} src="/images/logo.png" alt="BDluge" width={400} height={400} />
                </div>
                <div className={"header__hamburger" + (menuIsOpen ? " close" : "")}
                    onClick={handleOnClick}
                >
                    <div className={"header__hamburgerLine"}></div>
                    <div className={"header__hamburgerLine"}></div>
                    <div className={"header__hamburgerLine"}></div>
                </div>
            </div>
        </header>
    )
}