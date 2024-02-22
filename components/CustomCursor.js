import { useEffect } from 'react';
import AnimatedCursor from 'react-animated-cursor';

export default function CustomCursor() {
    const cursorFocusElements = [".header__hamburger", "a"];
    useEffect(() => {
        const handleOnMouseOver = () => document.body.classList.add("cursor-focus");
        const handleOnMouseLeave = () => document.body.classList.remove("cursor-focus");
        const handleOnClick = e => e.stopPropagation();

        cursorFocusElements.forEach(s => {
            document.querySelectorAll(s).forEach(e => {
                s !== ".header__hamburger" && e.addEventListener("click", handleOnClick); // pour le onclick={} sur header__hamburger
                e.addEventListener("mouseover", handleOnMouseOver);
                e.addEventListener("mouseleave", handleOnMouseLeave);
            })
        })

        return () => {
            cursorFocusElements.forEach(s => {
                document.querySelectorAll(s).forEach(e => {
                    e.removeEventListener("click", handleOnClick);
                    e.removeEventListener("mouseover", handleOnMouseOver);
                    e.removeEventListener("mouseleave", handleOnMouseLeave);
                })
            })
        }
    })

    return (
        <AnimatedCursor
            clickables={cursorFocusElements}
            outerStyle={{
                border: "1px solid var(--cursorBorder-color)",
                background: "var(--cursor-color)",
            }}
            innerStyle={{
                background: "radial-gradient(circle at center, rgba(255,255,255,.25), transparent 50%)"
            }}
            innerSize={150}
            showSystemCursor={true}
            outerSize={20}
            innerScale={1}
            outerScale={2}
        />
    )
}