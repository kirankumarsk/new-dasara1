import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Icon1 from "../../../public/images/borderup.png";
import Icon from "../../../public/images/borderlo.png";
import Hamsa from "../../../public/images/hamsa.png";
import Logo from "../../../public/images/FooterIm.svg";
import elep from "../../../public/images/Group 1970 (1).png";
import upperbr from "../../../public/images/Rectangle 1368.png";
import upperlo from "../../../public/images/Rectangle 1368 bt.png";
import Image from "next/image";
import { useLanguage } from "../../components/languageContext";
import GetApi from "../../utils/network";
import { useRouter } from "next/router";

const GuestDetails = () => {
  const [audience, setAudience]: any = useState();
  const [loadin, setLoading] = useState(false);
  const [data, setData] = useState([{
    name_en:"",
    name_kn:"",
    salut_en: "",
    salut_kn: "",
    desig_kn: "",
    desig_en: "",
    content_en: "",
    content_kn: "",
    title_en: "",
    title_kn: ""
  }]);
  const { language } = useLanguage();
  const router = useRouter()
  useEffect(() => {
    // Define an async function for your API call
    async function fetchData() {
      setLoading(true);
      try {
        const resp = await GetApi("chief_guest_details"); // Replace with the desired API endpoint
        const resp_audience = await GetApi("main_page?where=(Id%2Ceq%2C6)");
        console.log(resp, ">>>>");
        setData(resp);
        setAudience(resp_audience[0]);
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
      <Image width={2000} src={Icon1} alt="icon" />
      <div className="row">
      <div className="col-4"><div className={styles.guestph}><Image width={600} src={elep} alt="BGch" /></div></div>
      <div className="flex flex-col col-8 ">
      <div className={styles.headingup}><Image src={upperbr} alt="headup" /></div>
      <h3
        className={styles.chief_heading}
      > 
        {" "}
        {language === "kn" ? data[0].title_kn : data[0].title_en}{" "}
      </h3>
      {/* <Image width={600} src={elep} alt="BGch" /> */}
      
      <div className={styles.content}>
          <h1> {language === "kn" ? data[0].salut_kn : data[0].salut_en} {" "} {language === "kn" ? data[0].name_kn : data[0].name_en}</h1>
          <h4>
            {" "}
            {language === "kn"
              ? data[0].desig_kn
              : data[0].desig_en}{" "}
          </h4>
          <div className={styles.desc_div} style={{ maxHeight: router.pathname.includes("/guest") ? "100%" : "200px", overflow: "scroll"}}>
            <p className={styles.desc_note_content} dangerouslySetInnerHTML={{__html: (language === 'kn' ? data[0]?.content_kn : data[0].content_en)}} style={{display: router.pathname.includes("/guest") ? "unset" : "none"}}></p>
        </div>
        </div><div className={styles.headingup}><Image src={upperlo} alt="headup" /></div>
      </div></div>

      
      <Image width={2000} src={Icon} alt="icon" />
      
    </div>
  );
};

export default GuestDetails;
