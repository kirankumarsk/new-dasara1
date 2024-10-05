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
  const [activeTab, setActiveTab] = useState(router.pathname);
  const [hoveredTab, setHoveredTab] = useState<number | null>(null); // Track the hovered tab

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkScreenWidth = () => {
        setmobile(window.innerWidth < 400);
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

  const handleMouseEnter = (index: number) => {
    setHoveredTab(index);
  };

  function handleMouseLeave() {
    setHoveredTab(null);
  }
  const tabs = [
    {
      id: 0,
      name: language === "kn" ? "ಮುಖಪುಟ" : "Home",
      path: "/",
    },
    {
      id: 1,
      name: language === "kn" ? "ದಸರಾ ಬಗ್ಗೆ​ " : "About",
      path: "/aboutus",
      subsections: [
        {
          id: 1,
          name: language === "kn" ? "ಮೈಸೂರು ದಸರಾ" : "Mysuru Dasara ",
          path: "/aboutus",
        },
        {
          id: 2,
          name: language === "kn" ? "ದಸರಾ ಆನೆಗಳು" : "Elephant History",
          path: "/elephants",
        },
        {
          id: 3,
          name: language === "kn" ? "ಮುಖ್ಯ ಅತಿಥಿ" : "Chief Guest",
          path: "/guest/guestDetails",
        },
      ],
    },
    {
      id: 2,
      name: language === "kn" ? "ಕಾರ್ಯಕ್ರಮಗಳು " : "Events ",
      path: "/dasaraevents",
      subsections: [
        {
          id: 4,
          name: language === "kn" ? "ದಸರಾ ಕಾರ್ಯಕ್ರಮಗಳು " : " Dasara Events ",
          path: "/dasaraevents",
        },
        {
          id: 5,
          name: language === "kn" ? "ಉಪ ಸಮಿತಿ" : "Subcommittee ",
          path: "/subcommittee",
        },
        {
          id: 6,
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
      ],
    },
    {
      id: 3,
      name: language === "kn" ? " ಟಿಕೆಟ್‌ಗಳು ಮತ್ತು ಲೈವ್" : "Tickets & Live ",
      path: "/liveStream",
      subsections: [
        {
          id: 7,
          name: language === "kn" ? "ಲೈವ್ ಸ್ಟ್ರೀಮಿಂಗ್" : "Live Streaming",
          path: "/liveStream",
        },
        {
          //https://mysurudasarafilmfestival.in
          id: 8,
          name: language === "kn" ? "ಟಿಕೆಟ್ ಬುಕಿಂಗ್" : "Ticket Booking",
          path: "/tickets",
          // path: "",
        },
      ],
    },
    {
      id: 4,
      name: language === "kn" ? "ಚಿತ್ರಸಂಪುಟ" : "Gallery",
      path: "/gallery/gallerylist",
      subsections: [
        {
          id: 9,
          name: language === "kn" ? "ಚಿತ್ರಸಂಪುಟ" : "Gallery",
          path: "/gallery/gallerylist",
        },
        {
          id: 10,
          name: language === "kn" ? "ಪತ್ರಿಕಾಗೋಷ್ಠಿ" : "Press Note",
          path: "/pressnote",
        },
      ],
    },
    {
      id: 5,
      name: language === "kn" ? " ಪ್ರವಾಸಿ ಸ್ಥಳಗಳು" : "Nearby Places",
      path: "/nearby",
    },
  ];

  const renderTabs = () => {
    return tabs.map((tab, index) => (
      <div 
        key={tab.id}
        onMouseEnter={() => {
          if (!mobile) {
            setHoveredTab(index);
          }
        }}
        onMouseLeave={() => {
          if (!mobile) {
            setHoveredTab(null);
          }
        }}
        onClick={() => {
          if (mobile) {
            setHoveredTab(index);
          }
        }}
      >
        <Link 
          className={`${styles.Link} ${tab.subsections && tab.subsections.some((subsection) => subsection.path === activeTab) || activeTab === tab.path ? styles.activeTab : ''}`} 
          href={tab.path} 
          onClick={() => {
            // updateClass();
            // setActiveTab(tab.path);

            // removed to accomodate the mobile responsive
          }}
        >
          <div className="text-color">
            {tab.name}
          </div>
        </Link>
        {tab.subsections && (mobile ? hoveredTab === index : hoveredTab === index) && ( // Show dropdown if hoveredTab matches
          <div className={`${styles.dropdown} ${tab.subsections.some((subsection) => subsection.path) ? styles.dropdownActive : ''}`}>
            {tab.subsections.map((subsection) => (
              <Link 
                key={subsection.id} 
                className={`${styles.Link} ${subsection.path === activeTab ? styles.activeTab : ''}`} 
                href={subsection.path} 
                onClick={() => {
                  updateClass();
                  setActiveTab(subsection.path);
                }}
              >
                <div className="text-color">
                  {subsection.name}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div
      className={`${styles.nav_outer_style} ${ language == 'kn' ? nudi.className : montserrat.className}`}
    >
      <div className={styles.ham}><Hamburger color="gold" toggled={!open} onToggle={updateClass} /></div>
      <div id="nav" className={`${ open ? styles.nav_style : styles.nav_active}`} style={{padding: "16px", margin: "0 16px 16px 16px", background: "white", borderColor: "gold", borderWidth: "1px", borderRadius: "24px", alignItems: "center"}}>
        {renderTabs()}
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
