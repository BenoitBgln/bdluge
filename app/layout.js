import "./globals.scss";
import SmoothScrolling from "@/components/SmoothScrolling";

export const metadata = {
  title: {
    default: "BDLuge — BDE 2024-2025 de l'ENSEA",
    template: '%s — BDE ENSEA',
  },
  description: "Le BDLuge est le BDE (Bureau des Élèves) de l'ENSEA (École Nationale Supérieure de l'Électronique et de ses Applications). Cette organisation est gérée par les élèves et pour les élèves. C'est une association à but non lucratif qui joue un rôle important dans la vie étudiante de l'école.",
  openGrap: {
    url: "https://bde.asso-ensea.fr",
    type: "website",
    title: "BDE de l'ENSEA",
    description: "Le BDLuge est le BDE (Bureau des Élèves) de l'ENSEA (École Nationale Supérieure de l'Électronique et de ses Applications). Cette organisation est gérée par les élèves et pour les élèves. C'est une association à but non lucratif qui joue un rôle important dans la vie étudiante de l'école.",
    images: [
      { url: "https://bde.asso-ensea.fr/images/logo.png", width: 450, height: 555, alt: "Logo BDE ENSEA" },
    ],
    locale: "fr_FR"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>

  );
}
