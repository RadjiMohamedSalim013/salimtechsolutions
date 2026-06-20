import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"),
  title: {
    default: "SALIMTECH Solutions | Agence digitale à Abidjan",
    template: "%s | SALIMTECH Solutions",
  },
  description:
    "Agence digitale à Abidjan (Côte d’Ivoire) : développement web, création site web professionnel, identité visuelle et communication digitale sur mesure.",
  keywords: [
    "agence digitale Abidjan",
    "développement web Côte d’Ivoire",
    "création site web professionnel",
    "identité visuelle",
    "communication digitale",
    "branding",
  ],
  openGraph: {
    title: "SALIMTECH Solutions | Agence digitale à Abidjan",
    description:
      "Développement web, création site web professionnel, identité visuelle et communication digitale en Côte d’Ivoire.",
    type: "website",
    locale: "fr-CI",
  },
  twitter: {
    card: "summary_large_image",
    title: "SALIMTECH Solutions | Agence digitale à Abidjan",
    description:
      "Développement web, création site web professionnel, identité visuelle et communication digitale en Côte d’Ivoire.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

