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
        const resp = await GetApi("nearby_places"); // Replace with the desired API endpoint
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
        {language === "kn" ? "ಪ್ರವಾಸಿ ಸ್ಥಳಗಳು" : "Nearby Tourist Spots"}
      </h1>
      <div
        className={`text-center ${styles.bg_blur}`}
        style={{ width: "80%", margin: "0 auto", padding: "30px" }}
      >
        <table className={styles.custom_table}>
          <thead>
            <tr>
              <th> {language === "kn" ? "ಕ್ರಮ ಸಂಖ್ಯೆ " : "SL.No  "} </th>
              <th>{language === "kn" ? "ಸ್ಥಳ " : "Tourist Place "}</th>

              <th>{language === "kn" ? "ಸ್ಥಳದ ಬಗ್ಗೆ " : "Details "}</th>
              <th>{language === "kn" ? "ಚಿತ್ರ " : "Photo "}</th>
              <th>{language === "kn" ? "ಸ್ಥಳದ ನಕ್ಷೆ" : "Location"} </th>
              {/* <th>{language === "kn" ? " Youtube ಲೈವ್ " : "Youtube Live "}</th> */}
            </tr>
          </thead>
          {!loading ? (
            <tbody>
              {data &&
                data?.map((item: any, index: number) => {
                  console.log(item);
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        {language === "kn"
                          ? item?.venue_kn
                          : item?.venue_en
                          ? item?.venue_en
                          : item?.venue_kn}
                      </td>

                      <td>
                        {language === "kn"
                          ? item?.venue_details_kn
                          : item?.venue_details_en
                          ? item?.venue_details_en
                          : item?.venue_details_kn}
                      </td>
                      <td style={{width: "300px", height: "150px"}}><Image
                    width={300}
                    height={100}
                    src={item.image_link}
                    alt="yes"
                    unoptimized
                  /></td>
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
                          href={item.embed_link}
                          style={{
                            color: "#fbb200",
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
