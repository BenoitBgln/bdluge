import { gobold, berlingskeSerif } from "@/libs/fonts";

export default function Footer() {
    return (
        <footer className={"footer " + berlingskeSerif.className}>
            <div className={"footer__compartment " + gobold.className}>Association Des Élèves de l'École Nationale Supérieure de l'Électronique et de ses Applications</div>
            <span className={"footer__compartment"}>6 Avenue du Ponceau, 95000 Cergy</span>
            <span className={"footer__compartment"}><a href="mailto:bde@ensea.fr" onClick={e => e.stopPropagation()}>bde@ensea.fr</a></span>
        </footer>
    )
}