import { useRouter } from "next/router";
import React from "react";
import { useLanguage } from "../languageContext";


interface Props {
    link: string;
    onClick?: (e: any) => void;
  }
export default function readMore({ link, onClick }: Props) {
    const router = useRouter();
    const {language} = useLanguage();
    const handleNavigation = (path: string) => {
      router.push(path);
    };

    return (
        <a onClick={()=>handleNavigation(link)} style={{color: "#efea82"}} hidden={router.pathname.includes("aboutus")? true: false}>{language === "kn" ? "ಮುಂದೆ.." : "Read More"} </a>
    );
  }