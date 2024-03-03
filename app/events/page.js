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


export default function Home() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    return (
        <div>
            <Menu isOpen={menuIsOpen} currentPage="L'équipe" />
            <CustomCursor />
            <Fall />
            <Header menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />

            <iframe
                src="https://www.instagram.com/bdeensea/embed/"
                frameborder="0"
                allowfullscreen
                width="800px"
                height="800px"
                style={{ marginLeft: "27.7777777778vh", width: "76.0416666667vw", height: "100vh" }}
            />
            <Footer />
        </div>
    );
}
