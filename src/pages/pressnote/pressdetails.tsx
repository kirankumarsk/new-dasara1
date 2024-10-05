import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Videfrmaw from "../../../public/images/videoframe.svg";
import BlueFrmae from "../../../public/images/BlueFrame.svg";
import GlodFrmae1 from "../../../public/images/glodframe1.svg";
import GlodFrmae from "../../../public/images/glodframe.svg";
import { useLanguage } from "../../components/languageContext";
import GetApi from "../../utils/network";
import { useRouter } from "next/router";
import Loader from "@/components/Loader";

const PressDetails = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    const queryId = router.query.id?.toString();
    setId(queryId);
    async function fetchData() {
      setLoading(true);
      try {
        const resp = await GetApi(
          `pressnote/${localStorage.getItem("pressNoteID")}`
        );
        setNews(resp);
        setLoading(false);
      } catch (error: any) {
        console.error(error.message);
        setLoading(false);
      }
    }
    fetchData();
  }, [router.query.id]);

  const { language } = useLanguage();
  const [news, setNews] = useState({
    Id: 0,
    CreatedAt: "",
    UpdatedAt: "",
    news_title_en: null,
    news_title_kn: "",
    news_content_short_en: null,
    news_content_short_kn: "",
    news_images: { images: [] },
    news_content_long_kn: "",
    news_content_long_en: null,
    news_date: "",
  });

  return (
    <div className={styles.bg2}>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae1} alt="frame" />
      </div>
      <div style={{ padding: "40px" }}>
        <h1
          style={{ color: "#fbb200", fontSize: "3.5rem", marginTop:"80px" }}
          className="text-center"
        >
          {" "}
          {language === "kn" ? "ಪತ್ರಿಕಾಗೋಷ್ಠಿ" : "PRESS NOTE"}{" "}
        </h1>
        <p style={{ color: "white", fontSize: "1.5rem" }}>
        {new Date(news?.news_date).toLocaleString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
        <p style={{ marginTop: "20px", fontSize: "18px", color:"white" }} dangerouslySetInnerHTML={{__html: (language === "kn"
            ? news?.news_content_long_kn
            : news?.news_content_long_en
            ? news?.news_content_long_en
            : news?.news_content_long_kn)}} className={`${styles.bg_blur}`}/>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!loading ? (
            news?.news_images?.images?.map((image: string, index: number) => {
              const marginTopStyle =
                index >= 3 ? { marginTop: "120px" } : { marginTop: "40px" }; // Conditional style

              return (
                <div
                  key={index}
                  style={{ ...marginTopStyle }}
                  className={`${styles.container}`}
                >
                  <Image
                    width={100}
                    height={100}
                    src={image}
                    alt="yes"
                    className={styles.sub_image}
                    unoptimized
                  />
                  <Image src={Videfrmaw} alt="yes" className={styles.image} />
                </div>
              );
            })
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Loader color='#0a909d' />
            </div>
          )}
        </div>
      </div>

      <div style={{ width: "100%", marginTop: "120px" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
    </div>
  );
};

export default PressDetails;
