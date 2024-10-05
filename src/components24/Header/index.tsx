import React, { useEffect, useState } from "react";
import { useLanguage } from "../languageContext";
import Slection from "../Selection";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import { Montserrat } from "next/font/google";
import localFont from 'next/font/local';
import { Cross as Hamburger } from 'hamburger-react';

const montserrat = Montserrat({
  subsets: ['latin']
});

const nudi = localFont({src: "../../pages/AnekKannada-VariableFont_wdth,wght.ttf"});

function Header() {
  const { language, changeLanguage } = useLanguage();
  const router = useRouter();
  const [open, setOpen] = useState(true);
  const [mobile, setmobile] = useState(false);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkScreenWidth = () => {
        setmobile(window.innerWidth < 700);
      };
  
      checkScreenWidth(); // Initial check
  
      // Listen for window resize events
      window.addEventListener("resize", checkScreenWidth);
    }
  },[])

  const handleLanguageChange = (event: { target: { value: any } }) => {
    const newLanguage = event.target.value;
    changeLanguage(newLanguage);
  };
  
  const updateClass = () => {
   mobile ?  setOpen(!open) : false;
  }

  return (
    <div
      className={`${styles.nav_outer_style} ${ language == 'kn' ? nudi.className : montserrat.className}`}
    >
      <div className={styles.ham}><Hamburger color="gold" toggled={!open} onToggle={updateClass} /></div>
      <div id="nav" className={`${ open ? styles.nav_style : styles.nav_active}`} style={{padding: "16px", margin: "0 16px 16px 16px", background: "white", borderColor: "gold", borderWidth: "3px", borderRadius: "36px", alignItems: "center", animation: "animation: border-pulse 2s ease-in-out infinite;"}}>
        <div style={{height:'20px', margin: '8px'}}>
          <Link className={styles.Link} href="/" onClick={updateClass}>
            {language === "kn" ? "ಮುಖಪುಟ" : "Home"}
          </Link>
        </div>
        <div>
          <Slection
            data={[
              {
                id: 0,
                name: language === "kn" ? "ಮೈಸೂರು ದಸರಾ" : "Mysuru Dasara ",
                path: "/aboutus",
              },
              {
                id: 1,
                name: language === "kn" ? "ದಸರಾ ಆನೆಗಳು" : "Elephant History",
                path: "/elephants",
              },
              {
                id: 2,
                name: language === "kn" ? "ಮುಖ್ಯ ಅತಿಥಿ" : "Chief Guest",
                path: "/guest/guestDetails",
              },
            ]}
            title={language === "kn" ? "ದಸರಾ ಬಗ್ಗೆ​ " : "About"}
          onClick={updateClass}/>
        </div>
        <div>
          <Slection
            data={[
              {
                id: 0,
                name: language === "kn" ? "ಕಾರ್ಯಕ್ರಮಗಳು " : " Dasara Events ",
                path: "/dasaraevents",
              },
              {
                id: 1,
                name: language === "kn" ? "ಉಪ ಸಮಿತಿ" : "Subcommittee ",
                path: "/subcommittee",
              },
              {
                id: 2,
                name:
                  language === "kn"
                    ? "ಅಧಿಕಾರೇತರ ಉಪ ಸಮಿತಿ"
                    : "Non-Official Subcommittee",
                path: "/nonofficialsubcommittee",
              },
              {
                id: 3,
                name:
                  language === "kn"
                    ? "ಕಾರ್ಯಕ್ರಮ ಸ್ಥಳಗಳು"
                    : "Event Venues",
                path: "/events",
              }
            ]}
            title={language == "kn" ? "ದಸರಾ ಕಾರ್ಯಕ್ರಮಗಳು​" : "Events"}
            onClick={updateClass}/>
        </div>
        <div>
          <Slection
            data={[
              {
                id: 0,
                name: language === "kn" ? "ಲೈವ್ ಸ್ಟ್ರೀಮಿಂಗ್" : "Live Streaming",
                path: "/liveStream",
              },
              // {
              //   //https://mysurudasarafilmfestival.in
              //   id: 1,
              //   name: language === "kn" ? "ಟಿಕೆಟ್ ಬುಕಿಂಗ್" : "Ticket Booking (Film Festival)",
              //   path: "/tickets",
              // },
            ]}
            title={
              language === "kn" ? " ಟಿಕೆಟ್‌ಗಳು ಮತ್ತು ಲೈವ್" : "Tickets & Live "
            }
            onClick={updateClass}/>
        </div>
        <div>
          <Slection
            data={[
              {
                id: 0,
                name: language === "kn" ? "ಚಿತ್ರಸಂಪುಟ" : "Gallery",
                path: "/gallery/gallerylist",
              },
              {
                id: 1,
                name: language === "kn" ? "ಪತ್ರಿಕಾಗೋಷ್ಠಿ" : "Press Note",
                path: "/pressnote",
              },
            ]}
            title={language === "kn" ? " ಚಿತ್ರಸಂಪುಟ" : "Gallery"}
            onClick={updateClass}/>
        </div>
        <div>
          <a onClick={()=> {router.push("/nearby"); updateClass}} style={{cursor: "pointer"}}> {language === "kn" ? " ಪ್ರವಾಸಿ ಸ್ಥಳಗಳು" : "Nearby Places"}</a>
        </div>
        <div>
          <select  className={styles.selection} onChange={handleLanguageChange}>
            <option value={"kn"} onClick={updateClass}>ಕನ್ನಡ</option>
            <option value={"en"} onClick={updateClass}>English</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
