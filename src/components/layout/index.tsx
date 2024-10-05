import React, { useState, useEffect } from "react";
import HeaderComponent from "../Header";
import Footer from "../Footer";
import styled from "./style.module.scss";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'ಮೈಸೂರು ದಸರಾ 2023 | Mysuru Dasara 2024',
  description: `Experience the grandeur of Mysuru Dasara: A 10-day royal celebration featuring illuminated palaces, cultural performances, and a majestic elephant parade. Witness Karnataka's rich heritage come alive!`,
}

const LayoutComponent = ({ children }: any) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  // Check the screen width on initial render and when the window is resized
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const checkScreenWidth = () => {
        setIsSmallScreen(window.innerWidth < 300);
      };
  
      checkScreenWidth(); // Initial check
  
      // Listen for window resize events
      window.addEventListener("resize", checkScreenWidth);
  
      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("resize", checkScreenWidth);
      };
    }
  }, []);

  return (
    <div>
      
      {isSmallScreen ? (
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            fontSize: "2rem",
            color: "#068085",
            textTransform: "capitalize",
            textAlign: "center",
          }}
          className="mt-12"
        >
          Please open on a laptop for a better experience. Mobile experience in progress!
        </div>
      ) : (
        <div className={styled.main_body}>
          <div style={{ zIndex: "3000" }} className={styled.headers}>
            <HeaderComponent />
          </div>
          <div className="">{children}</div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default LayoutComponent;
