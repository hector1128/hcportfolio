import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  //TO DO!!!!
  metadataBase: new URL("https://hectorcordero.com"),

  title: {
    default: "Hector Cordero – Software Engineer",
    template: "%s | Hector Cordero",
  },

  description: "Portfolio, projects and contact.",

  applicationName: "Hector Cordero Portfolio",
  authors: [{ name: "Hector Cordero", url: "https://hectorcordero.com" }], // TODO
  creator: "Hector Cordero",
  publisher: "Hector Cordero",
  keywords: [
    "Hector Cordero",
    "software engineer",
    "university of central florida",
    "computer science",
    "portfolio",
  ],

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Hector Cordero",
    title: "Hector Cordero – Software Engineer",
    description:
      "Projects, experience, and contact details for Hector Cordero.",
    images: ["/og.png"],
    locale: "en-US",
  },

  twitter: { card: "summary_large_image" },

  alternates: { canonical: "/" },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5B3A29",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
