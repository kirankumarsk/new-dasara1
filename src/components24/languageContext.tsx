// LanguageContext.js (Create a separate file)
'use client'
import React, { ReactNode, createContext, useContext, useState } from "react";

const LanguageContext = createContext({
  language: "kn",
  changeLanguage: (newLanguage:any) => {},
});

export const useLanguage = () => {
  return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState("kn");

  const changeLanguage = (newLanguage:any) => {
      setLanguage( (prev)=> newLanguage); 
  };
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
