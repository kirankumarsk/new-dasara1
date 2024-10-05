import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import GlodFrmae from "../../../public/images/glodframe.svg";
import GlodFrmae1 from "../../../public/images/glodframe1.svg";
import { useLanguage } from "../../components/languageContext";
import GetApi from "../../utils/network";
import Loader from "@/components/Loader";
import Videfrmaw from "../../../public/images/videoframe.svg";
import { Modal } from "@mui/material";
import ElephantData from "@/components/ElephantsData";

const Subcommittee = () => {
  const [data, setData] = useState([]);
  const { language } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [src, setSrc] = useState("");
  useEffect(() => {
    // Define an async function for your API call
    async function fetchData() {
      setLoading(true);
      try {
        const resp = await GetApi("elephant_history"); // Replace with the desired API endpoint
        console.log(resp, ">>>>");
        setLoading(false);
        setData(resp);
      } catch (error: any) {
        console.error(error.message);
        setLoading(false);
      }
    }

    // Call the async function immediately
    fetchData();
  }, []);
  const handleModal = (data: string) => {
    setOpen(true);
    setSrc(data);
  };
  return (
    <div className={styles.bg}>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae1} alt="frame" />
      </div>
      <h1
        style={{ color: "#fbb200", fontSize: "3.5rem", marginTop: "80px" }}
        className="text-center"
      >
        {" "}
        {language === "kn" ? "ದಸರಾ ಆನೆಗಳು" : "Elephant History"}
      </h1>
      <div
        className={styles.outer_section}
      >
        {!loading ? (
          <div>
              {data &&
                data?.map((item: any, index: number) => {
                  console.log(item);
                  const marginTopStyle =
                    index >= 3 ? { marginTop: "0px" } : { marginTop: "0px" };
                  return (
                    <ElephantData image={item?.image} content={language === "kn"
                          ? item?.ele_details_kn
                          : item?.ele_details_en
                          ? item?.ele_details_en
                          : item?.ele_details_kn} index={index} name={language==="kn"? item?.ele_name_kn : item?.ele_name_en}></ElephantData>
                    // <tr key={index}>
                    //   <td style={{ maxWidth: "40px" }}>{index + 1}</td>
                    //   <td>
                    //     {language === "kn"
                    //       ? item?.ele_name_kn
                    //       : item?.ele_name_en
                    //       ? item?.ele_name_en
                    //       : item?.ele_name_kn}
                    //   </td>

                    //   <td style={{ maxWidth: "350px" }}>
                    //     {language === "kn"
                    //       ? item?.ele_details_kn
                    //       : item?.ele_details_en
                    //       ? item?.ele_details_en
                    //       : item?.ele_details_kn}
                    //   </td>
                    //   <td>
                    //     <div
                    //       key={index}
                    //       style={{
                    //         ...marginTopStyle,
                    //         cursor: "pointer",
                    //         display: "flex",
                    //         alignItems: "center",
                    //         justifyContent: "center",
                    //       }}
                    //       className={`${styles.container}`}
                    //       onClick={() => {
                    //         handleModal( item?.image);
                    //       }}
                    //     >
                    //       <Image
                    //         width={300}
                    //         height={200}
                    //         src={item?.image}
                    //         alt="yes"
                    //         className={styles.sub_image}
                    //       />
                    //     </div>
                    //   </td>
                    // </tr>
                  );
                })}
                </div>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Loader />
            </div>
          )}
      </div>
      <div style={{ width: "100%" }}>
        <Image width={2000} src={GlodFrmae} alt="frame" />
      </div>
      <div style={{}}>
        <Modal
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "80%",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden",
          }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <Image
            width={100}
            height={100}
            src={src}
            alt="yes"
            className={styles.modal_image}
          />
        </Modal>
      </div>
    </div>
  );
};

export default Subcommittee;
