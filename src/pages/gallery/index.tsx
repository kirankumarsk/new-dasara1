import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Videfrmaw from "../../../public/images/videoframe.svg";
import GlodFrmae from "../../../public/images/glodframe.svg";
import GlodFrmae1 from "../../../public/images/glodframe1.svg";
import { useLanguage } from "../../components/languageContext";
import GetApi from "../../utils/network";
import Modal from "@mui/material/Modal";
import ImageViewer from 'react-simple-image-viewer';

const PressNote = () => {

 
  const [data, setData] = useState([{ images: { images: [] } }]);
  const { language } = useLanguage();
  const [open, setOpen] = React.useState(false);
  const [src, setSrc] = useState("");
  const [currentImage, setCurrentImage] = useState(0);
  const images: any[] = [];
  const [imglist, setimglist]: any[] = useState([]);
  const img_src = {"src": ""};
  const [currentIndex, setcurrentIndex] = useState(0);
  useEffect(() => {
    // Define an async function for your API call
    async function fetchData() {
      try {
        const resp = await GetApi("gallery"); // Replace with the desired API endpoint
        console.log(resp, ">>>>");
        setData(resp);
        resp[0]?.images?.images?.map((value: any, index: number) => {
          
          images.push(value);
          setimglist(images);
        })
        
      {console.log("The images are : ",images)}
      } catch (error: any) {
        console.error(error.message);
      }
    }

    // Call the async function immediately
    fetchData();
  }, []);

  useEffect(()=>{
    var interval = setInterval(() => {
      if((currentIndex+6) >= imglist?.length) {
        console.log("not adding the value")
        setcurrentIndex(0);
        
      }else { 
        console.log("Adding the value ", currentIndex);
        setcurrentIndex(currentIndex+6);
      }
      // setcurrentIndex(index);
      console.log("The indexes : ",(currentIndex+6) > data[0]?.images?.images?.length);
    },8000);
    return () => clearInterval(interval);
  });

  const handleModal = (data: string, index: number) => {
    setOpen(true);
    setSrc(data);
    setCurrentImage(index);
  };
  return (
    <div className={styles.bg}>
        <Image width={2000} src={GlodFrmae1} alt="frame" />

      <h1
        style={{ color: "#fbb200", fontSize: "3.5rem", marginTop:"80px" }}
        className="text-center"
      >
        {" "}
        {language === "kn" ? "ಚಿತ್ರಸಂಪುಟ" : "GALLERY"}{" "}
      </h1>
      <h2 style={{ color: "#fff", fontSize: "2rem" }} className="text-center">
        {language === "kn" ? "ದಸರಾ - ೨೦೨೪" : " Dasara - 2024"}{" "}
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      className={styles.image_blur}>
        {data[0]?.images?.images
          ?.slice(currentIndex, currentIndex+6 > data[0]?.images?.images?.length ? currentIndex+(data[0]?.images?.images?.length - currentIndex):currentIndex+6)
          .map((item: any, index: number) => {// Conditional style
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
                  alt="yes"
                  style={{ transform: 'translate3d(0, 0, 0)' }}
                  className={`${styles.sub_image} transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110`}
                  unoptimized
                />
                <Image src={Videfrmaw} alt="yes" className={styles.image} hidden={true}/>
              </div>
            );
          })}
      </div>

      <div style={{ width: "100%", marginTop: "200px" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
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
    </div>
  );
};

export default PressNote;
