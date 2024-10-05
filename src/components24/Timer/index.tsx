'use client'
import React from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const Flipper = () => {
  return (
    <div>
      <FlipClockCountdown to={new Date("2024-10-03T10:00:00")} digitBlockStyle={{ width: 30, height:35, fontSize: 20, textAlign: "center" }} showLabels={true} style={{alignItems: "center"}}/>
    </div>
  );
};
export default Flipper