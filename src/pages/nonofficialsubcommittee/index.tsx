import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import GlodFrmae from "../../../public/images/glodframe.svg";
import GlodFrmae1 from "../../../public/images/glodframe1.svg";
import { useLanguage } from "../../components/languageContext";
import Link from "next/link";
import GetApi from "../../utils/network";
import Loader from "@/components/Loader";

const Subcommittee = () => {
  const [data, setData] = useState([]);
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Define an async function for your API call
    async function fetchData() {
      try {
        setLoading(true);
        const resp = await GetApi("subcommittee_details"); // Replace with the desired API endpoint
        console.log(resp, ">>>>");
        setData(resp);
        setLoading(false);
      } catch (error: any) {
        console.error(error.message);
        setLoading(false);
      }
    }

    // Call the async function immediately
    fetchData();
  }, []);

  return (
    // <div className={styles.bg}>
    //   <div style={{ width: "100%" }}>
    //     <Image width={2000} src={GlodFrmae1} alt="frame" />
    //   </div>
    //   <h1
    //     style={{ color: "#fbb200", fontSize: "3.5rem", marginTop:"40px" }}
    //     className="text-center"
    //   >
    //     {" "}
    //     {language === "kn" ? "ಅಧಿಕಾರೇತರ ಉಪ ಸಮಿತಿ" : "Non-Official Subcommittee"}
    //   </h1>
    //   <div
    //     className="text-center"
    //     style={{ width: "80%", margin: "0 auto", padding: "30px" }}
    //   >
    //     <table className={styles.custom_table}>
    //       <thead>
    //         <tr>
    //           <th> {language === "kn" ? "ಕ್ರಮ ಸಂಖ್ಯೆ " : "SL.No  "} </th>
    //           <th>
    //             {language === "kn"
    //               ? "ಉಪಸಮಿತಿಯ ಹೆಸರು "
    //               : "Name of The Subcommitee "}
    //           </th>
    //           <th>{language === "kn" ? " ಕಾರ್ಯದರ್ಶಿಗಳು " : "Secretaries "}</th>
    //           <th>
    //             {language === "kn"
    //               ? " ಉಪ ವಿಶೇಷ ಅಧಿಕಾರಿ "
    //               : "Deputy Special Officer "}
    //           </th>
    //           <th>
    //             {language === "kn" ? "ಕಾರ್ಯಾಧ್ಯಕ್ಷರು" : "Working Presidents"}{" "}
    //           </th>
    //         </tr>
    //       </thead>
    //       {!loading ? (
    //         <tbody>
    //           {data &&
    //             data?.map((item: any, index: number) => {
    //               console.log(item);
    //               return (
    //                 <tr key={index}>
    //                   <td>{index + 1}</td>
    //                   <td>
    //                     {language === "kn"
    //                       ? item?.sub_committee_name_kn
    //                       : item?.sub_committee_name_en
    //                       ? item?.sub_committee_name_en
    //                       : item?.sub_committee_name_kn}
    //                   </td>
    //                   <td>
    //                     {(language === "kn"
    //                       ? item?.secretaries_kn
    //                       : item?.secretaries_en
    //                       ? item?.secretaries_en
    //                       : item?.secretaries_kn
    //                     )?.substring(0, 100)}
    //                   </td>
    //                   <td>
    //                     {(language === "kn"
    //                       ? item?.deputy_special_officer_kn
    //                       : item?.deputy_special_officer_en
    //                       ? item?.deputy_special_officer_en
    //                       : item?.deputy_special_officer_kn
    //                     )?.substring(0, 100)}
    //                   </td>
    //                   <td>
    //                     {(language === "kn"
    //                       ? item?.working_presidents_kn
    //                       : item?.working_presidents_en
    //                       ? item?.working_presidents_en
    //                       : item?.working_presidents_kn
    //                     )?.substring(0, 100)}
    //                   </td>
    //                 </tr>
    //               );
    //             })}
    //         </tbody>
    //       ) : (
    //         <div
    //           style={{
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //           }}
    //         >
    //           <Loader />
    //         </div>
    //       )}
    //     </table>
    //   </div>
    //   <div style={{ width: "100%" }}>
    //     <Image width={2000} src={GlodFrmae} alt="frame" />
    //   </div>
    // </div>
   <div>
     <h1
        style={{ color: "#fbb200", fontSize: "3.5rem", marginTop:"100px" }}
        className="text-center"
      >
        {" "}
        {language === "kn" ? "ಅಧಿಕಾರೇತರ ಉಪ ಸಮಿತಿ" : "Non-Official Subcommittee"}
      </h1>
      <p style={{textAlign: "center"}}>Coming Soon</p>
   </div>
  );
};

export default Subcommittee;
