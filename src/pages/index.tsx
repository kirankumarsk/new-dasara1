'use client'
import HeroSection from "@/components24/HeroSection";
import Guest from "@/pages/guest";
import LiveStrem from "@/pages/liveStream";
import Gallery from "@/pages/gallery";
import PressNote from "@/pages/pressnote";
import AboutUs from "./aboutus";
import { useEffect, useState } from "react";
import GetApi from "../utils/network";
import getApiData from "../utils/network";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { useLanguage } from "@/components/languageContext";
import { getExternalData } from "@/utils/network";
import style from "./styles.module.scss";
import { useRouter } from 'next/router';
import CurtainDrop from "@/components24/CurtainDrop";

const montserrat = Montserrat({
  subsets: ['latin']
});

const nudi = localFont({src: "./AnekKannada-VariableFont_wdth,wght.ttf"});

export default function Home() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const {language} = useLanguage();
  const [count, setCount]: any = useState();
  const [hasMounted, setHasMounted] = useState(false);

  
  // Check the screen width on initial render and when the window is resized
  useEffect(() => {

    setHasMounted(true);
      const checkScreenWidth = () => {
        setIsSmallScreen(window.innerWidth < 1278);
      };
  
      checkScreenWidth(); // Initial check
  
      // Listen for window resize events
      window.addEventListener("resize", checkScreenWidth);
      async function fetchData() {
      try {
        const resp = await getExternalData(process.env.NEXT_PUBLIC_MATOMO_URL+"?module=API&method=VisitsSummary.get&idSite=1&period=month&date=today&format=json&token_auth=6d8578618754f583b6cdb7c6e354e1f7"); // Replace with the desired API endpoint
        console.log(resp, ">>>>");
        setCount(resp);
       
      } catch (error: any) {
        console.error(error.message);
      }
    }
    fetchData();
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
    
    // Clean up the event listener on component unmount
    
  }, []);
  
  if (!hasMounted) {
    return null;
  }
  return (
    

    <div className={language === 'kn' ? nudi.className : montserrat.className} style={{width: "100%"}}>
      
      <div className={style.counter_div}>
        <p className={style.p_key}> Website Hit Count : <span>{count?.nb_visits+88998+150000+45000+150000+150000+30000}</span></p>
      </div>
      <HeroSection />
      <div id="aboutus" className={language === 'kn' ? nudi.className : montserrat.className} style={{height: "max-content"}}>
        <AboutUs />
      </div>
      <div id="guest" className={language === 'kn' ? nudi.className : montserrat.className} style={{height: "max-content"}}>
        <Guest />
      </div>
      <div id="liveStream" className={language === 'kn' ? nudi.className : montserrat.className}>
        <LiveStrem />
      </div>
      <div id="gallery" className={language === 'kn' ? nudi.className : montserrat.className}>
        <Gallery />
      </div>
    </div>
  );
}
