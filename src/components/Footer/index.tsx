import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import GlodFrmae1 from "../../../public/images/glodframe1.svg";
import GlodFrmae from "../../../public/images/glodframe.svg";
import Logo from "../../../public/images/FooterIm.svg";
import elep from "../../../public/images/dasara_logo1.png";
import left_div from "../../../public/images/left_div.png";
import right_div from "../../../public/images/right_div.png";
//import frame from "../../../public/images/VerticalFramw.svg";
import { useLanguage } from "../../components/languageContext";

const Footer = () => {
  const router = useRouter();
  const obj = [
    {
      id: 0,
      title: "Karnataka Tourism",
      kn_title: "ಕರ್ನಾಟಕ ಪ್ರವಾಸೋದ್ಯಮ",
      path: "https://www.karnatakatourism.org/",
    },
    {
      id: 1,
      title: "Kannada and Culture Department",
      kn_title: "ಕನ್ನಡ ಮತ್ತು ಸಂಸ್ಕೃತಿ ಇಲಾಖೆ",
      path: "https://kannadasiri.karnataka.gov.in/",
    },
    {
      id: 2,
      title: "Mysuru Zoo",
      path: "https://www.mysuruzoo.info/",
      kn_title: "ಮೈಸೂರು ಮೃಗಾಲಯ",
    },
    {
      id: 3,
      title: "Chamundi Temple",
      path: "https://itms.kar.nic.in/hrcehome/index_temple.php?tid=58",
      kn_title: "ಚಾಮುಂಡೇಶ್ವರಿ ದೇವಸ್ಥಾನ",
    },
    {
      id: 4,
      title: "Mysuru District Website",
      path: "https://mysore.nic.in/en/",
      kn_title: "ಮೈಸೂರು ಜಿಲ್ಲಾ ಜಾಲತಾಣ",
    },
    {
      id: 5,
      title: "Mysuru Palace",
      path: "https://mysorepalace.karnataka.gov.in/",
      kn_title: "ಮೈಸೂರು ಅರಮನೆ",
    },
  ];
  const handlenavigation = (path: string) => {
    window.open(path, "_blank");
  };
  const { language } = useLanguage();
  return (
    <div className={styles.container}>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae1} alt="frame" />
      </div>

      <div className="row">
        <div className="col-md-4 col-12">
          <div className="row align-items-center">
            <div className="col-8">
            <div className={`${styles.eleph_left}`}>
          <Image
            unoptimized
            src={Logo}
            alt={"image1"}
            width={400}
            height={400}
            className={`${styles.rotating}`}
          />
          <Image
            unoptimized
            src={elep}
            alt={"image1"}
            className={styles.nonrotors}
            style={{position: "absolute"}}
          />
        </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-12  d-flex align-items-center justify-content-center flex-column ">
          <div className={`${styles.flex} p-4 flex-wrap`} >
            {obj.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handlenavigation(item?.path)}
                  className={styles.item}
                >
                  <Image
                    width={30}
                    height={30}
                    src={left_div}
                    alt="yes"
                    unoptimized
                  />
                  {language === "kn" ? item?.kn_title : item?.title}↗ 

                  <Image
                    width={30}
                    height={30}
                    src={right_div}
                    alt="yes"
                    unoptimized
                  />
                </div>
              );
            })}
          </div><br /><br /><br /><br />
          <div
            style={{ color: "gold", fontSize: "1rem", position: "inherit", bottom: "5%", margin:"0 auto" }}
            className={`${styles.company} text-center p-2`}
          >
            Copyright © 2024. Mysuru Dasara All rights reserved. 
             <br /> Designed 
            and Developed By{" "}
            <a style={{ textDecoration: "underline" ,color:'orange'}} href="https://fusionminds.co.in">
              FusionMinds Technologies Pvt. Ltd.
            </a>
          </div>
        </div>
      </div>

      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
    </div>
  );
};

export default Footer;
