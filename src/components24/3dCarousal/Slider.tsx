import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft
} from "@fortawesome/free-solid-svg-icons";
import styles from './styles.module.scss';
import Image from "next/image";
export default (props: { activeSlide: any; data: any[]; }) => {
  const [activeSlide, setactiveSlide] = useState(props.activeSlide);

  console.log("the log is : ",props?.data);


  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  useEffect(() => {
    let intervalId: string | number | NodeJS.Timeout | undefined;
    if (isAutoScrolling) {
      intervalId = setInterval(() => {
        setactiveSlide((prevSlide: number) => 
          prevSlide < props.data.length - 1 ? prevSlide + 1 : 0
        );
      }, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(intervalId);
  }, [isAutoScrolling, props.data.length]);


  const next = () =>
    activeSlide < props.data.length - 1 && setactiveSlide(activeSlide + 1);

  const prev = () => activeSlide > 0 && setactiveSlide(activeSlide - 1);

  const getStyles = (index: number) => {

    if (activeSlide === index)
      return {
        opacity: 1,
        transform: "translateX(0px) translateZ(0px) rotateY(0deg)",
        zIndex: 10
      };
    else if (activeSlide - 1 === index)
      return {
        opacity: 1,
        transform: "translateX(-240px) translateZ(-400px) rotateY(35deg)",
        zIndex: 9
      };
    else if (activeSlide + 1 === index)
      return {
        opacity: 1,
        transform: "translateX(240px) translateZ(-400px) rotateY(-35deg)",
        zIndex: 9
      };
    else if (activeSlide - 2 === index)
      return {
        opacity: 1,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 8
      };
    else if (activeSlide + 2 === index)
      return {
        opacity: 1,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 8
      };
    else if (index < activeSlide - 2)
      return {
        opacity: 0,
        transform: "translateX(-480px) translateZ(-500px) rotateY(35deg)",
        zIndex: 7
      };
    else if (index > activeSlide + 2)
      return {
        opacity: 0,
        transform: "translateX(480px) translateZ(-500px) rotateY(-35deg)",
        zIndex: 7
      };
  };

  return (
    <>
      {/* carousel */}
      <div className={styles.slideC}>
        {props?.data?.map((item: React.JSX.IntrinsicAttributes & { title: any; icon: string; desc: string; status: string; link: string; id: number }, i: number) => (
          <React.Fragment key={item?.id}>
            <div
              className={styles.slide}
              style={{
                background: "transparent",
                boxShadow: `0 5px 20px 30`,
                ...getStyles(i)
              }}
            >
              <SliderContent {...item} />
            </div>
            <div
              className={styles.reflection}
              style={{
                background: `linear-gradient(to bottom, 40, transparent)`,
                ...getStyles(i)
              }}
            />
          </React.Fragment>
        ))}
      </div>
      {/* carousel */}

      <div className={styles.btns}>
        <FontAwesomeIcon
          className={styles.btn}
          onClick={prev}
          icon={faChevronLeft}
          color="#fff"
          size="2x"
        />
        <FontAwesomeIcon
          className={styles.btn}
          onClick={next}
          icon={faChevronRight}
          color="#fff"
          size="2x"
        />
      </div>
    </>
  );
};

const SliderContent = (props: {title: any, icon: string, desc: string, status: string, link: string, id: number}) => {
  return (
    <div className={styles.sliderContent}>
      <div className={styles.status_heading}>
      <Image unoptimized src={props.icon} alt={"program details"} height={60} width={60} />
      <h4 className={`${styles.blinkers} ${styles.status}`} style={{color: props.status === 'LIVE'? "green" : props.status === 'UPCOMING'? 'orange' : 'white'}}>{props.status}</h4>
      </div>
      <h2>{props.title.en}</h2>
      <p>{props.desc}</p>
      <a href={props.link} target="_blank" rel="noreferrer" style={{textDecoration: "underline", alignSelf: "center",color: "greenyellow"}}>Details↗</a>
    </div>
  );
};
