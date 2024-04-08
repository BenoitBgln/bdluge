import { useState, useEffect } from 'react';
import { gobold, berlingskeSerif, delaGothicOne } from '@/libs/fonts';
import { isMobile } from 'react-device-detect';

export default function SectionTitle({ children }) {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <h2 className={"section__title " + gobold.className}>
            {
                !isClient || isMobile ?
                    children
                    :
                    children.replaceAll(" ", '\u00A0').split("").map((e, i) => <span className={"section__titleChar"} key={i}>{e}</span>)
            }
        </h2>
    )
}