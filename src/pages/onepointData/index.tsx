import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import GlodFrmae from "../../../public/images/glodframe.svg";
import { useLanguage } from "../../components/languageContext";
import Link from "next/link";
import GetApi from "../../utils/network";
import Loader from "@/components/Loader";
import EventPage from "@/components24/consolidated";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";

const onePointData = () => {
  
  const [data, setData] = useState('');
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  
  const router = useRouter();
  const searchparam = useSearchParams();


  useEffect(() => {
    const param = searchparam.get('event');

    if(param == null) {
      console.log("The param is null")
      return;
    }

    setData(param);

  });
  
  return (
    <div className={styles.bg}>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
      {/* <h1
        style={{ color: "#FFF504", fontSize: "3.5rem", marginTop:"80px" }}
        className="text-center"
      >
        {" "}
        {language === "kn" ? "ಪತ್ರಿಕಾಗೋಷ್ಠಿ" : "PRESS NOTE"}{" "}
      </h1> */}
      <div
        className={`text-center ${styles.bg_blur}`}
        style={{ width: "100%", margin: "0 auto", padding: "30px", overflowX: "scroll", }}
      >
        {data && <EventPage param={data}></EventPage>}
      </div>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
    </div>
  );
};

export default onePointData;

