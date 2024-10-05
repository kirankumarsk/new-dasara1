import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import GlodFrmae from "../../../public/images/glodframe.svg";
import GlodFrmae1 from "../../../public/images/glodframe1.svg";
import { useLanguage } from "../../components/languageContext";
import Link from "next/link";
import GetApi from "../../utils/network";
import Loader from "@/components/Loader";

const PressNote = () => {
  const [data, setData] = useState([]);
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Define an async function for your API call
    setLoading(true)
    async function fetchData() {
      try {
        const resp = await GetApi("pressnote?sort=-news_date"); // Replace with the desired API endpoint
        console.log(resp, ">>>>");
        setData(resp);
        setLoading(false)
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
        style={{ color: "#fbb200", fontSize: "3.5rem", marginTop:"80px" }}
        className="text-center"
      >
        {" "}
        {language === "kn" ? "ಪತ್ರಿಕಾಗೋಷ್ಠಿ" : "PRESS NOTE"}{" "}
      </h1>
      <div
        className={`text-center ${styles.bg_blur}`}
      >
        <table className={styles.custom_table}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Heading</th>
              <th>Description</th>
            </tr>
          </thead>
          {!loading ? (
            <tbody>
              {data &&
                data?.map((item: any, index: number) => {
                  console.log(item);
                  return (
                    <tr key={index}>
                      <td>{new Date(item?.news_date).toLocaleString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</td>
                      <td>
                        {language === "kn"
                          ? item?.news_title_kn
                          : item?.news_title_en
                          ? item?.news_title_en
                          : item?.news_title_kn}
                      </td>
                      <td>
                        {(language === "kn"
                          ? item?.news_content_long_kn
                          : item?.news_content_short_en
                          ? item?.news_content_short_en
                          : item?.news_content_long_kn
                        )?.substring(0, 30)}
                        <Link
                          onClick={() =>
                            localStorage.setItem("pressNoteID", item?.Id)
                          }
                          style={{ color: "#fbb200", fontSize: "14px" }}
                          href="pressnote/pressdetails"
                          as={`pressnote/pressdetails?id=${item?.Id}`}
                        >
                          Read More..
                        </Link>
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

export default PressNote;
