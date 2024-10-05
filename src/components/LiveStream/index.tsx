import { useLanguage } from "../languageContext";
import styles from "./style.module.scss";
import Videfrmaw from "../../../public/images/videoframe.svg";
import Image from "next/image";
import frame from "../../../public/images/Frames.svg";
import ReactPlayer from "react-player";
import { useState } from "react";

interface Props {
  title: string;
  description: string;
  youtube_link: string;
  link: string;
  index: number;
  main: boolean;
  force: boolean;
}
export default function LiveStream({
  title,
  description,
  youtube_link,
  link,
  index,
  main,
  force,
}: Props) {
  let { language } = useLanguage();
  const [playref, setplayref]: any = useState(null);

  return (index == 0 || index == 1) && main == true ? (
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
          {force && !link ? (
            <iframe
              width="100%"
              src={youtube_link}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <div>
              <ReactPlayer
              height={"100%"}
              width={"80%"}
              url={link}
              controls={true}
              pip={true}
              style={{padding: "8%"}}
            />
            </div>
          )}
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
        <Image src={frame} alt="frame" hidden={main ? false : true} />
        <div
          style={{ padding: "50px", textAlign: "center" }}
          hidden={main ? false : true}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              color: "#fff",
            }}
          >
            {title}
          </h1>
          <p style={{ textAlign: "center", color: "#fff" }}>{description}</p>
        </div>
        <Image src={frame} alt="frame" hidden={main ? false : true} />
      </div>
    </div>
  ) : (
    <div className={styles.other_videos} hidden={index == 0 || index == 1}>
      <div>
        <Image src={frame} alt="frame" hidden={true} />
        <div style={{ padding: "5px", textAlign: "center" }} hidden={true}>
          <h3
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
              color: "#fff",
            }}
          >
            {title}
          </h3>
          <p style={{ textAlign: "center", color: "#fff" }}>{description}</p>
        </div>
        <Image src={frame} alt="frame" hidden={true} />
      </div>

      <div style={{ width: "300px", margin: "16px", height: "400px" }}>
        <div className={styles.iframe_bg}>
          <Image
            src={Videfrmaw}
            alt="yes"
            className={styles.image}
            hidden={true}
          />
        </div>
        <div className={`${styles.lower_container}`}>
          <div style={{ padding: "5px", textAlign: "center" }}>
            <p
              style={{
                fontSize: "2rem",
                color: "#fff",
              }}
            >
              {title}
            </p>
          </div>
          <iframe
            height="200px"
            width="100%"
            src={youtube_link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
