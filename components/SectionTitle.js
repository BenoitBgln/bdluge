import { useState, useEffect } from 'react';
import { gobold, berlingskeSerif, delaGothicOne } from '@/libs/fonts';
import { isMobile } from 'react-device-detect';

export default function SectionTitle({ children }) {
    const [customChar, setCustomChar] = useState(true)

    useEffect(() => {
        setCustomChar(!isMobile);
    }, [])

    return (
        <h2 className={"section__title " + gobold.className}>
            {
                !customChar ?
                    children
                    :
                    children.replaceAll(" ", '\u00A0').split("").map((e, i) => <span className={"section__titleChar"} key={i}>{e}</span>)
            }
        </h2>
    )
}