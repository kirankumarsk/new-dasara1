import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import GlodFrmae from "../../../public/images/glodframe.svg";
import GlodFrmae1 from "../../../public/images/glodframe1.svg";
import { useLanguage } from "../../components/languageContext";
import Link from "next/link";
import GetApi from "../../utils/network";
import Loader from "@/components/Loader";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const montserrat = Montserrat({
  subsets: ['latin']
});
const nudi = localFont({src: "../AnekKannada-VariableFont_wdth,wght.ttf"});


const Subcommittee = () => {
  const [data, setData] = useState([]);
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Define an async function for your API call
    async function fetchData() {
      setLoading(true)
      try {
        const resp = await GetApi("subcommittee_details"); // Replace with the desired API endpoint
        console.log(resp, ">>>>");
        setData(resp);
        setLoading(false)
      } catch (error: any) {
        console.error(error.message);
        setLoading(false)
      }
    }

    // Call the async function immediately
    fetchData();
  }, []);

  return (
    <div className={`${styles.bg} ${language === 'kn' ? nudi.className : montserrat.className}`}>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae1} alt="frame" />
      </div>
      <h1
        style={{ color: "#fbb200", fontSize: "3.5rem", marginTop:"80px" }}
        className="text-center"
      >
        {" "}
        {language === "kn" ? "ಉಪ ಸಮಿತಿ" : "The Subcommitee "}
      </h1>
      <div
        className="text-center"
        style={{ width: "80%", margin: "0 auto", padding: "30px", overflowX: "scroll" }}
      >
        <table className={styles.custom_table}>
        
          <thead>
          <tr>
                <td colSpan={5}><p dangerouslySetInnerHTML={{__html: (language != 'kn' ? "Shri. Lakshmikanth Reddy.G ,I.A.S, <br> Hon'ble Deputy Commissioner & District Magistrate <br> DC office, Mysuru District, <br> Mysuru. Phone : 0821 - 2422302, dcmysuru@gmail.com" : "ಶ್ರೀ. ಲಕ್ಷ್ಮೀಕಾಂತ ರೆಡ್ಡಿ.ಜಿ , I.A.S, <br>ಮಾನ್ಯ ಜಿಲ್ಲಾಧಿಕಾರಿಗಳು ಮತ್ತು ಜಿಲ್ಲಾ ದಂಡಾಧಿಕಾರಿಗಳು <br> ಡಿಸಿ ಕಚೇರಿ, ಮೈಸೂರು ಜಿಲ್ಲೆ, <br>ಮೈಸೂರು. ದೂರವಾಣಿ: 0821 - 2422302, ಇಮೇಲ್: dcmysuru@gmail.com")}} style={{fontWeight: "bolder"}}></p></td>
              </tr>
            <tr>
              <th> {language === "kn" ? "ಕ್ರಮ ಸಂಖ್ಯೆ " : "SL.No  "} </th>
              <th>
                {language === "kn"
                  ? "ಉಪಸಮಿತಿಯ ಹೆಸರು "
                  : "Name of The Subcommitee "}
              </th>

              <th>
                {language === "kn"
                  ? " ಉಪ ವಿಶೇಷ ಅಧಿಕಾರಿ "
                  : "Deputy Special Officer "}
              </th>
              <th>
                {language === "kn" ? "ಕಾರ್ಯಾಧ್ಯಕ್ಷರು" : "Working Presidents"}{" "}
              </th>
              <th>{language === "kn" ? " ಕಾರ್ಯದರ್ಶಿಗಳು " : "Secretaries "}</th>
            </tr>
          </thead>
          {!loading ? (
            <tbody>
             
              {data &&
                data?.map((item: any, index: number) => {
                  console.log(item);
                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>
                        <p dangerouslySetInnerHTML={{__html: (language === "kn"
                          ? item?.sub_committee_name_kn
                          : item?.sub_committee_name_en
                          ? item?.sub_committee_name_en
                          : item?.sub_committee_name_kn)}}>
                        
                          </p>
                      </td>
                      <td>
                        <p dangerouslySetInnerHTML={{__html: (language === "kn"
                          ? item?.deputy_special_officer_kn
                          : item?.deputy_special_officer_en
                          ? item?.deputy_special_officer_en
                          : item?.deputy_special_officer_kn)}}>
                          </p>
                      </td>
                      <td>
                        <p dangerouslySetInnerHTML={{__html: (language === "kn"
                          ? item?.working_presidents_kn
                          : item?.working_presidents_en
                          ? item?.working_presidents_en
                          : item?.working_presidents_kn)}}>

                        </p>
                      </td>
                      <td>
                        <p dangerouslySetInnerHTML={{__html: (language === "kn"
                          ? item?.secretaries_kn
                          : item?.secretaries_en
                          ? item?.secretaries_en
                          : item?.secretaries_kn)}}></p>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Loader color="#fff" />
            </div>
          )}
        </table>
      </div>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
    </div>
  );
};

export default Subcommittee;
