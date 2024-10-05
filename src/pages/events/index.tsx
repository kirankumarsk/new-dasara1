import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import GlodFrmae from "../../../public/images/glodframe.svg";
import GlodFrmae1 from "../../../public/images/glodframe1.svg";
import { useLanguage } from "../../components/languageContext";
import Link from "next/link";
import GetApi from "../../utils/network";
import CardMedia from "@mui/material/CardMedia";
import { IframeHTMLAttributes } from "react";
import Loader from "@/components/Loader";

const Subcommittee = () => {
  const [data, setData] = useState([]);
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Define an async function for your API call
    async function fetchData() {
      setLoading(true)
      try {
        const resp = await GetApi("eventsvenue"); // Replace with the desired API endpoint
        console.log(resp, ">>>>");
        setLoading(false)
        setData(resp);
      } catch (error: any) {
        console.error(error.message);
        setLoading(false)
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
      <h1
        style={{ color: "#fbb200", fontSize: "3.5rem", marginTop: "80px"}}
        className="text-center"
      >
        {" "}
        {language === "kn" ? "ಕಾರ್ಯಕ್ರಮ ಸ್ಥಳಗಳು" : "Event Venues"}
      </h1>
      <div
        className={`text-center ${styles.table_baap}`}
      >
        <p style={{color: "white"}}> {language === "kn" ? "** ಕಾರ್ಯಕ್ರಮಗಳು ಸಂಭಾವ್ಯವಾಗಿದ್ದು, ಮುಂದಿನ ದಿನಗಳಲ್ಲಿ ಬದಲಾವಣೆಗೆ ಒಳಪಟ್ಟಿರುತ್ತವೆ" : "** Marked Events are tentative and are subject to change in future"} </p>
        <table className={`${styles.custom_table} ${styles.bg_blur}`}>
          <thead>
            <tr>
              <th> {language === "kn" ? "ಕ್ರಮ ಸಂಖ್ಯೆ " : "SL.No  "} </th>
              <th>{language === "kn" ? " ಕಾರ್ಯಕ್ರಮ " : "Event "}</th>
              <th>{language === "kn" ? "ಸ್ಥಳ " : "Venue "}</th>
              <th>{language === "kn" ? "ಆರಂಭ " : "Start "}</th>
              <th>{language === "kn" ? "ಮುಕ್ತಾ " : "End "}</th>
              <th>{language === "kn" ? "ಸಮಯಾ " : "Timings "}</th>
              
              <th>{language === "kn" ? "ಸ್ಥಳದ ನಕ್ಷೆ" : "Location"} </th>
              {/* <th>{language === "kn" ? " Youtube ಲೈವ್ " : "Youtube Live "}</th> */}
            </tr>
          </thead>
          {!loading ? (
            <tbody>
              {data &&
                data?.map((item: any, index: number) => {
                  console.log(item);
                  let eventDate: Date = new Date(item?.from);
              let displayDate = eventDate.toLocaleString(undefined, { dateStyle: 'medium'});
              let eventToDate: Date = new Date(item?.to);
              let displaytoDate = eventToDate.toLocaleString(undefined, {dateStyle: 'medium' });
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {language === "kn"
                          ? item?.event_kn
                          : item?.event_en
                          ? item?.event_en
                          : item?.event_kn}
                      </td>
                      <td>
                        {language === "kn"
                          ? item?.venue_kn
                          : item?.venue_en
                          ? item?.venue_en
                          : item?.venue_kn}
                      </td>
                        <td>{displayDate}</td>
                        <td>{displaytoDate}</td>
                        <td>
                        {language === "kn"
                          ? item?.timings_kn
                          : item?.timings_en
                          ? item?.timings_en
                          : item?.timings_kn}
                      </td>
                      
                      <td>
                        {/* <div className={`${styles.container} `}>
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1 m12!1m3!1d31188.864653011206!2d76.6598508126948 !3d12.274779915538545!2m3!1f0!2f0!3f0!3m2!1i1024!2 i768!4f13.1!3m3!1m2!1s0x3baf6fcf2e945323%3A0xba5c 1585e52523af!2sChamundi%20Hill%2C%20Mysuru%2C% 20Karnataka%2C%20India!5e0!3m2!1sen!2snl!4v169552 7108001!5m2!1sen!2snl"
                            width="400"
                            height="300"
                            style={{ border: 0 }}
                            loading="lazy"
                          
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div> */}

                        <a
                          href={item.map_link}
                          style={{
                            color: "#FFF504",
                            textDecorationLine: "underline",
                          }}
                        >
                          Open Map
                        </a>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            
          ) : (
             <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader />
        </div>
          )}
        </table>
      </div>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
    </div>
  );
};

export default Subcommittee;
