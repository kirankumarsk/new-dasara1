import Image from "next/image";
import styles from "./styles.module.scss";
import { useLanguage } from "../languageContext";
import tickets_live from "../../../public/images/tickets_soon.jpeg"

 interface Prop {
    video_url: string
}
export default function VideoPop({
  video_url}: Prop) {
    const {language} = useLanguage();
  return (
    <div className={styles.posters}>
                  {/* <iframe width="700" height="500" src={video_url} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"  allowFullScreen={true}></iframe> */}

                  <Image src={video_url} alt={"GoldenStick"} width={350} height={500}/>
     
    </div>
  );
}
