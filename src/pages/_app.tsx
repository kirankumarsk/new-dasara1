'use client'
import LayoutComponent from "@/components/layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { LanguageProvider, useLanguage } from "../components/languageContext";
import "bootstrap/dist/css/bootstrap.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import { init } from "@socialgouv/matomo-next";
import { useEffect, useState } from "react";
import { Metadata } from "next";
 <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
const MATOMO_URL: any = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID: any = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

const montserrat = Montserrat({
  subsets: ["latin"],
});


// export const metadata: Metadata = {
//   title: "Mysuru Dasara 2024",
//   description: "The world famous Mysuru Dasara LIVE 2024",
//   openGraph: {
//     title: "Mysuru Dasara 2023",
//     description: "The world famous Mysuru Dasara LIVE 2023",
//     url: "https://mysoredasara.gov.in",
//     siteName: "Mysuru Dasara 20233",
//     images: [
//       {
//         url: "https://res.cloudinary.com/dbghlle25/image/upload/v1697320290/dasara_logo_jfqtoi.png",
//         width: 800,
//         height: 600,
//       },
//       {
//         url: "https://res.cloudinary.com/dbghlle25/image/upload/v1697320290/dasara_logo_jfqtoi.png",
//         width: 1800,
//         height: 1600,
//         alt: "Dasara 23",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
// };

const nudi = localFont({ src: "./AnekKannada-VariableFont_wdth,wght.ttf" });



export default function App({ Component, pageProps }: AppProps) {
  const { language } = useLanguage();
  const [count, setCount]: any = useState();

  useEffect(() => {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }, []);
  return (
    
    <LanguageProvider>
      <LayoutComponent
        className={language === "kn" ? nudi.className : montserrat.className}>
        <Head>
          
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Mysuru Dasara 2024 | ಮೈಸೂರು ದಸರಾ ೨೦೨೪</title>
          <link
            rel="shortcut icon"
            href="https://res.cloudinary.com/dbghlle25/image/upload/v1697320290/dasara_logo_jfqtoi.png"
          />

          <meta
            property="og:title"
            content="Mysuru Dasara 2024 | ಮೈಸೂರು ದಸರಾ ೨೦೨೪"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://mysoredasara.gov.in" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dbghlle25/image/upload/v1697556132/banner_z0ozhm.jpg"
          />
          <meta
            property="og:description"
            content="Mysuru Dasara 2024 | ಮೈಸೂರು ದಸರಾ ೨೦೨೪"
          />
          <meta property="description" content="Mysuru Dasara 2024 Official Page. Watch Dasara 2024 LIVE. Get all authentic information and details of all the events" /> */}
          
        </Head>
        <Component
          {...pageProps}
          className={language === "kn" ? nudi.className : montserrat.className}
        />
        <Analytics />
      </LayoutComponent>
    </LanguageProvider>
  );
}
