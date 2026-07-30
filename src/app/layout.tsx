import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/nav-bar";
import BackgroundDecor from "./components/background-decor";
import OnMountFlag from "./components/OnMountFlag";

export const metadata: Metadata = {
  //TO DO!!!!
  metadataBase: new URL("https://hectorcordero.com"),

  title: {
    default: "Hector Cordero – Software Engineer",
    template: "%s | Hector Cordero",
  },

  description:
    "UCF Computer Science student Hector Cordero's portfolio, projects and career.",

  applicationName: "Hector Cordero Portfolio",
  authors: [{ name: "Hector Cordero", url: "https://hectorcordero.com" }],
  creator: "Hector Cordero",
  publisher: "Hector Cordero",
  keywords: [
    "Hector Cordero",
    "software engineer",
    "university of central florida",
    "computer science",
    "portfolio",
  ],

  alternates: { canonical: "/" },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "https://hectorcordero.com",
    siteName: "Hector Cordero",
    title: "Hector Cordero – Software Engineer & UCF CS",
    description:
      "Projects, timeline, and contact information for Hector Cordero.",
    // image comes from app/opengraph-image.tsx (file convention)
  },
  twitter: {
    card: "summary_large_image",
    title: "Hector Cordero – Software Engineer & UCF CS",
    description:
      "Projects, timeline, and contact information for Hector Cordero.",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5B3A29",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* Shell — lifted out of the individual pages so it is declared once
            and every future page inherits correct mobile behaviour. */}
        <OnMountFlag />
        <BackgroundDecor />
        <NavBar />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hector Cordero",
              url: "https://hectorcordero.com",
              sameAs: [
                "https://github.com/hector1128",
                "https://www.linkedin.com/in/hectorhcordero/",
              ],
              jobTitle: "Software Engineer",
              alumniOf: "University of Central Florida",
            }),
          }}
        />
      </body>
    </html>
  );
}
