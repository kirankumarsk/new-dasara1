import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import peakock from "../../../public/images/navilu.png";
import round from "../../../public/images/Group 1944.png";
import elep1 from "../../../public/images/mahuleft.png";
import elep2 from "../../../public/images/mahuright.png";
import { useLanguage } from "../../components/languageContext";
import GlodFrmae1 from "../../../public/images/glodframe1.svg";
import GlodFrmae from "../../../public/images/glodframe.svg";
import GetApi from "../../utils/network";
import Loader from "@/components/Loader";
import { Router, useRouter } from "next/router";
import ReadMore from "@/components/ReadMore";
import { Metadata } from "next";
import Chamundi1 from "../../../public/images/Group 1970.png";
import Chamundi from "../../../public/images/Mask group (2).png";
import Chamundifram from "../../../public/images/md_bg_flower_rotation.png";
import amma_independent from "../../../public/images/amma_individual.png";
import amma_flower from "../../../public/images/flower_independent.png";
import SocialMediaPage from "../socialmedia";
import Socialmedia from "../socialmedia";

export const metadata: Metadata = {
  title: "About",
};

const AboutUs = () => {
  const [data, setData] = useState([
    {
      content_kn: "",
      content_en: "",
      content_short_kn: "",
      content_short_en: "",
    },
  ]);
  const { language } = useLanguage();
  const [loadin, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    // Define an async function for your API call
    async function fetchData() {
      setLoading(true);
      try {
        const resp = await GetApi("about_mysuru_dasara"); // Replace with the desired API endpoint
        console.log(resp, ">>>>");
        setData(resp);
        setLoading(false);
      } catch (error: any) {
        console.error(error.message);
        setLoading(false);
      }
    }

    // Call the async function immediately
    fetchData();
  }, []);
  return (
    <div className={styles.bg}>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae1} alt="frame" />
      </div>
      <div className={styles.peak1}>
        <Image src={peakock} alt="frame" />
      </div>
      <div className={styles.peak}>
        <Image src={peakock} alt="frame" />
      </div>
      <div className="gng">
        <h1
          style={{ color: "#fbb200", fontSize: "5rem", marginTop: "120px" }}
          className="text-center"
        >
          {language === "kn"
            ? "ನಾಡಹಬ್ಬ ಮೈಸೂರು ದಸರಾ"
            : "Naada Habba Mysuru Dasara "}
        </h1>
      </div>
      <div className={styles.peak1}>
        <Image src={round} alt="frame" />
      </div>
      <div className={styles.peak}>
        <Image src={round} alt="frame" />
      </div>
      <div style={{ flexWrap: "wrap" }} className={styles.about_us_content}>
        <div style={{ width: "50%", height: "50%" }}>
          <div
            style={{ width: "100%", height: "100%" }}
            className={`${styles.amma_anim}`}
          >
            <Image
              unoptimized
              src={amma_flower}
              alt={"image1"}
              className={`${styles.rotating}`}
            />
            <Image
              unoptimized
              src={amma_independent}
              alt={"image1"}
              className={`${styles.amma}`}
            />
          </div>
        </div>

        <div
          className="col-md-6 col-12"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <Image src={frmae1} alt="frame" /> */}
          {!loadin ? (
            <div style={{ textAlign: "center" }}>
              <h1
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "30px",
                  visibility: "collapse",
                }}
              >
                {language === "kn"
                  ? "ನಾಡಹಬ್ಬ ಮೈಸೂರು ದಸರಾ"
                  : "Naada Habba Mysuru Dasara "}
              </h1>
              {router.pathname.includes("/aboutus") ? (
                <p
                  style={{
                    textAlign: "justify",
                    color: "#fff",
                    whiteSpace: "break-spaces",
                    backdropFilter: "saturate(100%) blur(5px)",
                    WebkitBackdropFilter: "saturate(500%) blur(20px)",
                    borderRadius: "10px",
                    paddingLeft: "3px",
                  }}
                  className="abouttext glass_background"
                  dangerouslySetInnerHTML={{
                    __html:
                      data && language == "kn"
                        ? data[0]?.content_kn
                        : data[0]?.content_en
                        ? data[0]?.content_en
                        : data[0]?.content_kn,
                  }}
                ></p>
              ) : (
                <div
                  style={{
                    textAlign: "justify",
                    color: "#fff",
                    whiteSpace: "break-spaces",
                    backdropFilter: "saturate(100%) blur(5px)",
                    WebkitBackdropFilter: "saturate(500%) blur(20px)",
                    borderRadius: "10px",
                    paddingLeft: "3px",
                  }}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        data && language == "kn"
                          ? data[0]?.content_short_kn
                          : data[0]?.content_short_en,
                    }}
                  style={{maxHeight: "150px", overflow: "hidden"}}></p>
                  <ReadMore link="/aboutus"></ReadMore>
                </div>
              )}
            </div>
          ) : (
            <Loader />
          )}

          {/*<Image src={frmae2} alt="frame" className={styles.about_end_frame}/>*/}
        </div>
      </div>
      <div className={styles.elea}>
        <div className={styles.elel}>
          <Image src={elep1} alt="frame" />
        </div>
          <div>
            <h1 style={{color:"#fbb200"}}> {language == 'kn' ? 'ನಡೆಯುತ್ತಿರುವ ಕಾರ್ಯಕ್ರಮಗಳು' : 'Ongoing Events & Programs'}</h1>
            <div className={`${styles.glass_background}`}>
              <h2 className={`${styles.event_name}`} style={{color: "white"}}>{language == 'kn' ? 'ಯುವ ಸಂಭ್ರಮ ೨೦೨೪' : 'Yuva Sambhrama 2024'}</h2>
              <a href={"https://mysoredasara.gov.in/onepointData?event=yuva_dasara"} style={{color:"#fbb200"}}>{language == 'kn' ? 'ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು ↗' : 'Event Details ↗'}</a>
            </div>
          </div>
        <div className={styles.eler}>
          <Image src={elep2} alt="frame" />
        </div>
      </div><Image width={2000} src={GlodFrmae} alt={"GoldenStick"} height={70} />
      <div>
        <Socialmedia></Socialmedia>
      </div>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae} alt={"GoldenStick"} height={70} />
      </div>
    </div>
  );
};

export default AboutUs;
