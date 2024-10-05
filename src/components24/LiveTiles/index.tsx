import Image from "next/image";
import styles from "./styles.module.scss";
import { useLanguage } from "../languageContext";
import tickets_live from "../../../public/images/tickets_soon.jpeg";
import GlodFrmae from "../../../public/images/glodframe.svg";
import vd from "../../../public/images/vertical_divider.png";

interface Prop {
  items: any[];
  lang: any;
}
export default function LivePop({ items, lang }: Prop) {
  
  return (
    <div
      style={{ height: "60%", width: "80%" }}
      className={styles.livepop_container}
    >
      <h2 style={{ color: "gold" }}>
        {" "}
        {lang == "kn"
          ? "ದಸರಾ ೨೦೨೪ ಮಹೋತ್ಸವಕ್ಕೆ ಸುಸ್ವಾಗತ"
          : "Welcome to Dasara 2024 Mahostava"}
      </h2>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae} alt={"GoldenStick"} height={70} />
      </div>
      <div className={styles.livepop_maindivs}>
        <div className={styles.livepop_tickets}>
          <div className={styles.posters}>
            <h3 style={{ color: "gold" }}>
              {" "}
              {lang == "kn" ? "ಟಿಕೆಟ್‌ಗಳು" : "Tickets"}
            </h3>
            <div className={`${styles.glass_background}`}>
              <h4 className={`${styles.event_name}`} style={{ color: "white" }}>
                {lang == "kn"
                  ? "ಗೋಲ್ಡ್ ಕಾರ್ಡ್, ಪಂಜಿನ ಕವಾಯಿತು, ಜಂಬೂ ಸವಾರಿ"
                  : "Gold Card, Torch Light Parade, Jamboo Savari"}
              </h4>
              <a
                href={
                  "https://mysoredasara.gov.in/tickets"
                }
                style={{ color: "gold" }}
              >
                {lang == "kn" ? "ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು ↗" : "Event Details ↗"}
              </a>
            </div>
          </div>
        </div>
        <div className={styles.livepop_events}>
        <h1 style={{ color: "gold" }}>
              {" "}
              {lang == "kn"
                ? "ನಡೆಯುತ್ತಿರುವ ಕಾರ್ಯಕ್ರಮಗಳು"
                : "Ongoing Events & Programs"}
            </h1>
          <div className={styles.posters}>

            {items && items?.map((event: any, index: number) => {
              
                return (<div className={`${styles.glass_background}`}>
                  <h2 className={`${styles.event_name}`} style={{ color: "white" }}>
                    {lang == "kn" ? event?.title?.kn : event?.title?.en}
                  </h2>
                  <a
                    href={
                      event?.link
                    }
                    style={{ color: "gold" }}
                  >
                    {lang == "kn" ? "ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು ↗" : "Event Details ↗"}
                  </a>
                </div>)
            })}
            {/* <div className={`${styles.glass_background}`}>
              <h2 className={`${styles.event_name}`} style={{ color: "white" }}>
                {language == "kn" ? "ಯುವ ಸಂಭ್ರಮ ೨೦೨೪" : "Yuva Sambhrama 2024"}
              </h2>
              <a
                href={
                  "https://mysoredasara.gov.in/onepointData?event=yuva_dasara"
                }
                style={{ color: "gold" }}
              >
                {language == "kn" ? "ಕಾರ್ಯಕ್ರಮದ ವಿವರಗಳು ↗" : "Event Details ↗"}
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
