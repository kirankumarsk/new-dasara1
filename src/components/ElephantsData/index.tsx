import React, { useState } from "react";
import { useLanguage } from "../languageContext";
import { useRouter } from "next/router";
import Image from "next/image";
import style from "./style.module.css";
import { Modal } from "@mui/material";
import frame from "../../../public/images/AboutusFrame1.svg";

interface props {
    image: string,
    content: string,
    index: number,
    name: string
}

function ElephantData({image, content, index, name}: props) {
    const { language, changeLanguage } = useLanguage();
    const [currentImage, setCurrentImage] = useState(false);
    const router = useRouter();
  
    const handleLanguageChange = (event: { target: { value: any } }) => {
      const newLanguage = event.target.value;
      changeLanguage(newLanguage);
    };
  
    return (
        <>
        <div className={style.section} style={index%2 == 0? {flexDirection: "row-reverse"} : {flexDirection: "row"}}>
            <Image src={image} alt="elephant_image" width={150} height={100} className={style.image}  onClick={() => {setCurrentImage(true)}}></Image>
            <p className={`${style.content} ${style.bg_blur}`} style={{textAlign: `${index%2 == 0? "right" : "left"}`}}>
                <span style={{textAlign: `${index%2 == 0? "left" : "right"}`, fontSize: "larger", fontWeight:"900"}}>{name}</span> <br />
                <span dangerouslySetInnerHTML={{__html: content}}></span>
            </p>
        </div>

        <Image src={frame} alt="divider" height={30} className={style.divider}></Image>
        <div style={{}}>
        <Modal
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden",
          }}
          open={currentImage}
          onClose={() => setCurrentImage(false)}
        >
          <Image
            width={300}
            height={300}
            src={image}
            alt="yes"
            unoptimized
            className={style.modal_image}
          />
        </Modal>
      </div>
        </>
    );
}

export default ElephantData;