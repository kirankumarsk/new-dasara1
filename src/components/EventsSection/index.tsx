import React, { useEffect, useState } from "react";
import Image from "next/image";
import Videfrmaw from "../../../public/images/videoframe.svg";
import GlodFrmae from "../../../public/images/glodframe.svg";
import { useLanguage } from "../../components/languageContext";
import GetApi from "../../utils/network";
import Modal from "@mui/material/Modal";
import ImageViewer from 'react-simple-image-viewer';
import styles from './style.module.scss';


interface otherSections {
    heading_en: string,
    heading_kn: string,
    type: string,
    content_en: string,
    content_kn: string,
    images: {"images":[]}
  }

export default function EventSection({heading_en, heading_kn, type, content_en, content_kn, images}: otherSections) {

  const { language } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [imglist, setimglist]: any[] = useState(images?.images);
  const [tempList, setTempList]: any[] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const imgstemp: any[] = [];
  const endCount = imglist?.length >= 6 ? 6 : imglist?.length;

  const handleModal = (data: string, index: number) => {
    setOpen(true);
    setCurrentImage(index);
  };
  useEffect(()=>{
    var interval = setInterval(() => {
      if((currentIndex+6) >= imglist?.length) {
        console.log("not adding the value")
        setcurrentIndex(0);
        
      } else { 
        console.log("Adding the value ", currentIndex);
        setcurrentIndex(currentIndex+6) 
      }
      // setcurrentIndex(index);
      console.log("The indexes : ",(currentIndex+6) > imglist.length);
    },5000);
    return () => clearInterval(interval);
  });

    return(<div className={styles.bg}>
        <div style={{ width: "100%" }}>
          <Image width={2000} src={GlodFrmae} alt="frame" />
        </div>
        <h1
          style={{ color: "#FFF504", fontSize: "3.5rem", marginTop:"80px" }}
          className="text-center"
        >
          {" "}
          {language === "kn"? heading_kn : heading_en} {" "}
        </h1>
        <br></br>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {imglist
            ?.slice(currentIndex, currentIndex+endCount > imglist?.length ? 0:currentIndex+endCount).map((item: any, index: number) => {// Conditional style
              console.log("the current index ",currentIndex);
              return (
                <div
                  key={index}
                  style={{cursor: "pointer" }}
                  className={`${styles.container}`}
                  onClick={() => {
                    handleModal(item, currentIndex+index);
                  }}
                >
                  <Image
                    width={100}
                    height={100}
                    src={item}
                    alt="Event Coming Soon!"
                    style={{ transform: 'translate3d(0, 0, 0)' }}
                    className={`${styles.sub_image} transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110`}
                    unoptimized
                  hidden={item == 'null'}/>
                  <h1>Coming Soon!</h1>
                  <Image src={Videfrmaw} alt="Event Coming Soon!" className={styles.image} hidden={true}/>
                </div>
              );
            })}
        </div>

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
            open={open}
            onClose={() => setOpen(false)}
          >
  
          <ImageViewer
            src={ imglist }
            currentIndex={ currentImage }
            disableScroll={ false }
            closeOnClickOutside={ true }
            onClose={ () => setOpen(false) }
          />
          </Modal>
        </div>
      </div>)
}