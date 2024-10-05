import Image from "next/image";
import styles from "./style.module.css";
import { useLanguage } from "../languageContext";

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

interface Props {
  overlay_text_en: string;
  overlay_text_kn: string;
  type: string;
  content: string;
  click_function: string;
  images: {"images":[]};
  title: string;
  title_en: string;
  title_kn: string;
}

export default function Carousal(items: any) {
  const flicks = items?.items as Props[];
  const slides: any[] = [];
  const {language} = useLanguage();

  flicks?.forEach((value: Props, index: number) => {

var image: any = '';

if(value?.type == 'image') {
  
image = <div><Image src={value?.content} height={600} width={800} alt="bla bla" style={{margin: "0 auto"}} className={styles.deco}></Image></div>;
slides.push(image);
} else if(value?.type == 'images') {
  value?.images?.images?.map((imgs: any, index: number) => {
    image = <div><Image src={imgs} height={600} width={800} alt="bla bla" style={{margin: "0 auto"}} className={styles.deco}></Image></div>;
    slides.push(image);
  })
}
  })
  return (
    <>
     <div className={styles.awesome}>
              <br />
     {/* <AwesomeSlider media={slides} organicArrows={true}>
        </AwesomeSlider> */}
        <Carousel children={slides} animation="slide" navButtonsAlwaysVisible={true} cycleNavigation={true} />
     </div>
      {/* <Image src={"https://res.cloudinary.com/dbghlle25/image/upload/v1696677119/dasara2023/Oct6th_pressnote/WhatsApp_Image_2023-10-07_at_11.57.38_1_h0r1cj.jpg"} height={300} width={200} alt="bla bla"></Image> */}
    </>
  );
}
