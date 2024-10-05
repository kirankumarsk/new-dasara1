import React from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import GlodFrmae1 from "../../../public/images/glodframe1.svg";
import GlodFrmae from "../../../public/images/glodframe.svg";
import Logo from "../../../public/images/dasara_logo1.png";
import elep from "../../../public/images/Elephantlogo.png";
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
    <div className={styles.container}>{/** 
      <div style={{ width: "100%" }}>
            <Image src={Logo} alt="Base Image" className="base-image" />
            <Image src={elep} alt="Overlay Image" className="overlay-image" />
      </div>*/}

      <div className="row" style={{paddingBottom: "20%"}}>
        <div className="col-md-4 col-12">
          <div className="row align-items-center">
            <div className="col-8">
            <div className={`${styles.eleph_left}`}>
          <Image
            unoptimized
            src={Logo}
            alt={"image1"}
            width={180}
            height={180}
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
          </div></div>
        </div>
        <div className="col-md-8 col-12  d-flex align-items-center justify-content-center flex-column ">
          <div className={`${styles.flex} p-4 flex-wrap`} style={{textDecoration:"underline"}}>
            {obj.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => handlenavigation(item?.path)}
                  className={styles.item}
                >
                  <Image
                    width={100}
                    height={100}
                    src={left_div}
                    alt="yes"
                    unoptimized
                  />
                  {language === "kn" ? item?.kn_title : item?.title}↗ 

                  <Image
                    width={100}
                    height={100}
                    src={right_div}
                    alt="yes"
                    unoptimized
                  />
                </div>
              );
            })}
          </div>
          <div
            style={{ color: "gold", fontSize: "1rem", position: "relative", bottom: "5%", margin:"0 auto" }}
            className="text-center mt-6 p-4"
          >
            Copyright © 2024. Mysuru Dasara All rights reserved. 
            <br /> Designed
            and Developed By{" "}
            <a className={styles.ongoing_event_link} href="https://fusionminds.co.in">
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
