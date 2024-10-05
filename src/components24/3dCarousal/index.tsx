import { StrictMode, useEffect } from "react";
import ReactDOM from "react-dom";

import Slider from "./Slider";

import data from "./data";
import styles from "./styles.module.scss";


export default function DCarousal(events: any) {

useEffect(()=>{

  console.log("the evebt valye is ", events);
},[])
return (
    <>
     <div className={`center ${styles.parent_div} ${styles.glass_blur}`}>
      <Slider data={events.events} activeSlide={2} />
    </div>
    </>
)
}