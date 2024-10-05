import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useLanguage } from "../../components/languageContext";
import Image from "next/image";
import Videfrmaw from "../../../public/images/videoframe.svg";
import frame from "../../../public/images/Frames.svg";
import GlodFrmae1 from "../../../public/images/glodframe1.svg";
import GlodFrmae from "../../../public/images/glodframe.svg";
import GetApi from "../../utils/network";
import Loader from "@/components/Loader";
import LiveStream from "@/components/LiveStream";
import StreamLinks from "@/components/stream_qr";
import MetaTags from "@/components24/MetaTags";

const LiveStrem = () => {
  interface live_data {
    title: string;
    description: string;
    live_link: string;
    youtube_link: string;
  }
  const [data, setData] = useState({
    extra_styles: {
      kn: {
        venue1: { live_link: "", description: "", title: "" },
        venue2: { live_link: "", description: "", title: "" },
      },
      en: {
        venue1: { live_link: "", description: "", title: "" },
        venue2: { live_link: "", description: "", title: "" },
      },
    },
  });
  const [form_data, setFormData] = useState({
    extra_styles_format: {
      og: {
        image: "https://imagedelivery.net/cJxV3Z5xUIYHcgsXUkFAMw/d299215b-0dbc-4b4b-e457-ef160f1a0f00/public",
        title: "Mysuru Dasara Live 2024 || ಮೈಸೂರು ದಸರಾ ನೇರಪ್ರಸಾರ 2024",
        desc: "ಮೈಸೂರು ಅರಮನೆಯಲ್ಲಿ ನಡೆಯುತ್ತಿರುವ ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳ ಮೊದಲ ದಿನದ ನೇರ ಪ್ರಸಾರ. ಪಾರಂಪರಿಕ ನೃತ್ಯ, ಸಂಗೀತ ಮತ್ತು ಕಲಾ ಪ್ರದರ್ಶನಗಳನ್ನು ವೀಕ್ಷಿಸಿ || Live stream of Day 1 of the Cultural Programs taking place at Mysuru Palace. Watch traditional dance, music, and art performances showcasing local culture."       
      },
      kn: [
        {
          youtube_link: "",
          live_link: "",
          description: "",
          title: "",
          force: false,
        },
      ],
      en: [
        {
          youtube_link: "",
          live_link: "",
          description: "",
          title: "",
          force: false,
        },
      ],
    },
  });
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Define an async function for your API call
    async function fetchData() {
      setLoading(true);
      try {
        const resp = await GetApi("main_page");
        setData(resp[2]);
        setFormData(resp[2]);
        setLoading(false);
      } catch (error: any) {
        console.error(error.message);
        setLoading(false);
      }
    }

    fetchData();
  }, []);
  return (
    <>
    {/* <MetaTags 
      title={form_data?.extra_styles_format?.og?.title}
      description={form_data?.extra_styles_format?.og?.desc}
      ogImage={form_data?.extra_styles_format?.og?.image}
      
    /> */}
    <div className={styles.bg} suppressHydrationWarning={true}>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae1} alt="frame" />
      </div>
      <h1
      style={{ color: "#fbb200", fontSize: "3.5rem", marginTop: "80px" }}
        className="text-center"
      >
        {" "}
        {language === "kn" ? "ನೇರ ಪ್ರಸಾರ" : " Live Stream"}{" "}
      </h1>
      <StreamLinks></StreamLinks>
      {
        <LiveStream
          main={true}
          link={
            form_data && language === "kn"
              ? form_data?.extra_styles_format?.kn[0]?.live_link
              : form_data?.extra_styles_format?.en[0]?.live_link
          }
          youtube_link={
            form_data && language === "kn"
              ? form_data?.extra_styles_format?.kn[0]?.youtube_link
              : form_data?.extra_styles_format?.en[0]?.youtube_link
          }
          description={
            form_data && language === "kn"
              ? form_data?.extra_styles_format?.kn[0]?.description
              : form_data?.extra_styles_format?.en[0]?.description
          }
          title={
            form_data && language === "kn"
              ? form_data?.extra_styles_format?.kn[0]?.title
              : form_data?.extra_styles_format?.en[0]?.title
          }
          index={0}
          force={
            form_data && language === "kn"
              ? form_data?.extra_styles_format?.kn[0]?.force
              : form_data?.extra_styles_format?.en[0]?.force
          }
        ></LiveStream>
      }
      {
        <LiveStream
          main={true}
          link={
            form_data && language === "kn"
              ? form_data?.extra_styles_format?.kn[1]?.live_link
              : form_data?.extra_styles_format?.en[1]?.live_link
          }
          youtube_link={
            form_data && language === "kn"
              ? form_data?.extra_styles_format?.kn[1]?.youtube_link
              : form_data?.extra_styles_format?.en[1]?.youtube_link
          }
          description={
            form_data && language === "kn"
              ? form_data?.extra_styles_format?.kn[1]?.description
              : form_data?.extra_styles_format?.en[1]?.description
          }
          title={
            form_data && language === "kn"
              ? form_data?.extra_styles_format?.kn[1]?.title
              : form_data?.extra_styles_format?.en[1]?.title
          }
          index={1}
          force={
            form_data && language === "kn"
              ? form_data?.extra_styles_format?.kn[0]?.force
              : form_data?.extra_styles_format?.en[0]?.force
          }
        ></LiveStream>
      }
      <h3
        style={{ color: "#fbb200", fontSize: "3.5rem", marginTop: "40px" }}
        className="text-center"
      >
        {" "}
        {language === "kn"
          ? "ಈ ಹಿಂದಿನ ದಸರಾ ಜಂಬೂಸವಾರಿಯ ದೃಶ್ಯಾವಳಿಗಳು"
          : "Previous year visuals"}{" "}
      </h3>
<div className={styles.other_videos}>
        {form_data &&
          language === "kn" &&
          form_data?.extra_styles_format?.kn?.map(
            (item: any, index: number) => {
              return (
                <LiveStream
                  main={false}
                  link={item?.live_link}
                  youtube_link={item?.youtube_link}
                  description={item?.description}
                  title={item?.title}
                  index={index}
                  force={
                    item && language === "kn"
                      ? item?.extra_styles_format?.kn[0]?.force
                      : item?.extra_styles_format?.en[0]?.force
                  }
                ></LiveStream>
              );
            }
          )}
        {form_data &&
          language === "en" &&
          form_data?.extra_styles_format?.en?.map(
            (item: any, index: number) => {
              return (
                <LiveStream
                  main={false}
                  link={item?.live_link}
                  youtube_link={item?.youtube_link}
                  description={item?.description}
                  title={item?.title}
                  index={index}
                  force={
                    item && language === "en"
                      ? item?.extra_styles_format?.kn[0]?.force
                      : item?.extra_styles_format?.en[0]?.force
                  }
                ></LiveStream>
              );
            }
          )}
      </div>
     
      { !loading ? (
        <>
        <h1
      style={{ color: "#fbb200", fontSize: "3.5rem", marginTop: "80px" }}
        className="text-center"
      >
        {" "}
        {language === "kn" ? "ನೇರ ಪ್ರಸಾರ" : " Live Stream"}{" "}
      </h1>
          <div className="row">
            <div
              className=" col-md-6 col-12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className={`${styles.container} `}>
                <iframe
                  width="100%"
                  src={data?.extra_styles?.kn?.venue1?.live_link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div
              className="col-md-6 col-12"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <div style={{ padding: "50px", textAlign: "center" }}>
                <h1
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  {language === "kn"
                    ? data?.extra_styles?.kn?.venue1?.title
                    : data?.extra_styles?.en?.venue1?.title}
                </h1>
                <p style={{ textAlign: "center", color: "#fff" }}>
                  {language === "kn"
                    ? data?.extra_styles?.kn?.venue1?.description
                    : data?.extra_styles?.en?.venue1?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="row ">
            <div
              className="col-md-6 col-12"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "50px",
              }}
            >
              <div style={{ padding: "50px", textAlign: "center" }}>
                <h1
                  style={{
                    fontSize: "2.5rem",
                    fontWeight: "600",
                    color: "#fff",
                  }}
                >
                  {language === "kn"
                    ? data?.extra_styles?.kn?.venue2?.title
                    : data?.extra_styles?.en?.venue2?.title}
                </h1>
                <p style={{ textAlign: "center", color: "#fff" }}>
                  {language === "kn"
                    ? data?.extra_styles?.kn?.venue2?.description
                    : data?.extra_styles?.en?.venue2?.description}
                </p>
              </div>
            </div>

            <div
              className="col-md-6 col-12"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div className={`${styles.container}`}>
                <iframe
                  width="100%"
                  src={data?.extra_styles?.kn?.venue2?.live_link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </>
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

      <div style={{ width: "100%", marginTop: "50px" }}>
      <br /><br /><Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
    </div>
    </>
  );
};

export default LiveStrem;
