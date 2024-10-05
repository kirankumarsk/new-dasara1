'use client'
import React from "react";
import styles from "./style.module.scss";
import { useRouter } from "next/router";

interface Props {
  data: any;
  title: string;
  onClick: () => void;
  path?: string;
}

export default function Slection({ data, title, onClick }: Props) {
  const router = useRouter();
  const handleNavigation = (path: string) => {
    router.push(path);
  };
  return (
    <div style={{ cursor: "pointer", padding: "8px" }}>
      <div className={styles.dropdown}>
        <div className={styles.title} >{title}</div>
        <div className={styles.options}>
          {data?.map((options: any) => (
            <>
              <div key={options.id} className={options.name.includes("English" || "ಕನ್ನಡ")? styles.language : ""}>
                
                {options.path == "" ? <div onClick={(e) => {handleNavigation(options?.path); onClick()}}>
                  {options.name}
                </div> : <div style={{color: "GrayText"}}>
                  {options.name}
                </div>}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
