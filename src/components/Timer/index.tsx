'use client'
import React from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Flipper = () => {
  return (
    <div>
      <FlipClockCountdown to={new Date("2023-10-15T10:15:00")} digitBlockStyle={{ width: 30, height:35, fontSize: 20, textAlign: "center" }} showLabels={true} style={{alignItems: "center"}}/>
    </div>
  );
};
export default Flipper