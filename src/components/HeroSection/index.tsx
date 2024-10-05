import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import image1 from "../../../public/images/57533 [Converted] 1.png";
import image_2 from "../../../public/images/GovLogo.png";
import Elephantlogo from "../../../public/images/dasara_logo.png";
import Siddaramaya from "../../../public/images/siddaramaya.png";
import DkshivrajKumar from "../../../public/images/dkshivakumar.png";
import hcmadevappa from "../../../public/images/hcmadev.png";
import shivraj from "../../../public/images/srishivraj.png";
import Elephant from "../../../public/images/Elephant.png";
import stickbottom from "../../../public/images/stickbottom.png";
import stick from "../../../public/images/stick (2).png";
import { useLanguage } from "../../components/languageContext";
import CountdownTimer from "../Timer";
import elephant from "../../../public/images/Elephant.png";
import frame from "../../../public/images/AboutusFrame1.svg";
import getApiData from "@/utils/network";
import eleph_left from "../../../public/images/gold_eleph_left.png";
import eleph_right from "../../../public/images/gold_eleph_right.png";
import raja_left from "../../../public/images/raja_left.png";
import raja_right from "../../../public/images/raja_right.png";
import Carousal from "../Carousal";
import Props from "../Carousal/index";
import { Modal } from "@mui/material";
import Tickets from "@/components/Tickets";

function HeroSection() {
  const { language } = useLanguage();
  const [comps, setComps] = useState([]);
  const [tickets, setTickets]:any[] = useState([]);
  const [open, setOpen] = useState(false);
  const [todays, settodays]:any[] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getApiData("overview?limit=50");
      // response["title"] = language === "kn" ? "ಅವಲೋಕನ" : "Quick Overview";
      setComps(response);
    }

    async function fetchTickets() {
      const tickets = await getApiData("tickets");
      if(tickets) {
       setTickets(tickets);
       setOpen(true);
      }
    }

    async function fetchTodays() {
      const tickets = await getApiData("todays_event");
      if(tickets) {
        // tickets["title"] = language === "kn" ? " ಇವತ್ತಿನ ಕಾರ್ಯಕ್ರಮ ಗಳು" : "Today's Programs";
       settodays(tickets);
      }
    }
    fetchData();
    fetchTickets();
    fetchTodays();
    
  }, []);
  return (
    <>
      <div className={style.top_eleph}>
        <div className={style.eleph_left}>
          <Image
            unoptimized
            src={eleph_left}
            alt={"image1"}
            width={120}
            height={80}
          />
        </div>
        <div className={style.eleph_right}>
          <Image
            unoptimized
            src={eleph_right}
            alt={"image1"}
            width={120}
            height={80}
          />
        </div>
      </div>
      <div className={style.base_bg}>
        <div className={style.logo_section}>
          <Image
            className={style.gov_logo}
            unoptimized
            src={raja_left}
            //src={image_2}
            alt={"image1"}
            width={150}
            height={120}
          />

          <Image
            className={`${style.redlogobg}`}
            unoptimized
            src={raja_right}
            // src={Elephantlogo}
            alt={"image1"}
            width={155}
            height={120}
          />
        </div>
        <div className={style.outer_main}>
          <div className={style.inner_left}>
            <div className={style.left_1}>
              <Image
                className={style.mys_min_image}
                src={Siddaramaya}
                alt={"Chief Minister"}
              />
              <p className={`${style.banner_desig_text}`}>
                {" "}
                <span className={style.min_names}>
                  {" "}
                  {language === "kn"
                    ? " ಶ್ರೀ ಸಿದ್ಧರಾಮಯ್ಯ"
                    : "Shri. Siddharamaiah"}{" "}
                </span>{" "}
                <br />
                {language === "kn"
                  ? "ಮಾನ್ಯ ಮುಖ್ಯಮಂತ್ರಿಗಳು "
                  : " Hon'ble Chief Minister"}{" "}
                <br />
                {language === "kn"
                  ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                  : " Government of Karnataka "}
              </p>
            </div>
            <div className={style.left_2}>
              <Image
                className={style.mys_min_image}
                src={DkshivrajKumar}
                alt={"DkshivrajKumar"}
              />
              <p className={`${style.banner_desig_text}`}>
                {" "}
                <span className={style.min_names}>
                  {" "}
                  {language === "kn"
                    ? " ಶ್ರೀ ಡಿ.ಕೆ. ಶಿವಕುಮಾರ್"
                    : "Shri D.K. Shivakumar "}{" "}
                </span>{" "}
                <br />
                {language === "kn"
                  ? "ಮಾನ್ಯ ಉಪಮುಖ್ಯಮಂತ್ರಿಗಳು "
                  : "Hon'ble  Deputy Chief Minister"}{" "}
                <br />
                {language === "kn"
                  ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                  : " Government of Karnataka "}
              </p>
            </div>
          </div>

          <div className={style.inner_right}>
            <div className={style.right_1}>
              <Image
                className={style.mys_min_image}
                src={hcmadevappa}
                alt={"hcmadevappa"}
              />
              <p className={`${style.banner_desig_text}`}>
                {" "}
                <span className={style.min_names}>
                  {" "}
                  {language === "kn"
                    ? " ಶ್ರೀ ಎಚ್.ಸಿ. ಮಹದೇವಪ್ಪ"
                    : "Shri H.C Mahadevappa "}{" "}
                </span>{" "}
                <br />
                {language === "kn"
                  ? "ಮಾನ್ಯ ಸಮಾಜ ಕಲ್ಯಾಣ ಸಚಿವರು"
                  : "Hon'ble Minister of Social Welfare"}{" "}
                <br />
                {language === "kn"
                  ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                  : " Government of Karnataka "}
              </p>
            </div>
            <div className={style.right_2}>
              <Image
                className={style.mys_min_image}
                src={shivraj}
                alt={"shivraj"}
              />
              <p className={`${style.banner_desig_text}`}>
                {" "}
                <span className={style.min_names}>
                  {" "}
                  {language === "kn"
                    ? "ಶ್ರೀ ತಂಗಡಗಿ ಶಿವರಾಜ್ ಸಂಗಪ್ಪ"
                    : "Shri Tangadagi Shivaraj Sangappa"}{" "}
                </span>{" "}
                <br />
                {language === "kn"
                  ? "ಮಾನ್ಯ ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಸಚಿವರು"
                  : "Hon'ble Minister of Backward Classes Welfare"}{" "}
                <br />
                {language === "kn"
                  ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                  : " Government of Karnataka "}
              </p>
            </div>
          </div>
        </div>
        <div className={`flex justify-center flex-col items-center ${style.elph_timer}`} style={{position: "absolute", bottom: "10%", left: 0, width: "100%"}} hidden={true}>
            <div className={style.counter}>
              <p className={style.count_head}>
                {language === "kn" ? "ಕ್ಷಣಗಣನೆ ಪ್ರಾರಂಭ!" : "Count Down Begins!"}
              </p>{" "}
              <br />
              <CountdownTimer />
            </div>
          </div>
        <Image
          className={style.frame_gov}
          unoptimized
          src={frame}
          alt={"Frame image"}
        ></Image>
        <div className={style.main_heading}>
          <Image
            unoptimized
            src={image_2}
            alt={"image1"}
            width={120}
            height={120}
            className={style.raja}
          />
          <h3 style={{ color: "#FFF504" }}>
            <span style={{ fontSize: "large" }}>
              {language === "kn" ? "ನಾಡಹಬ್ಬ" : "Naada Habba"}
            </span>{" "}
            <br />
            {language === "kn" ? "ಮೈಸೂರು ದಸರಾ - ೨೦೨೩" : "Mysuru Dasara - 2023"}
          </h3>
          <Image
            unoptimized
            src={Elephantlogo}
            alt={"image1"}
            width={120}
            height={120}
            className={style.raja}
          />
        </div>

        <div className={style.outer_main} hidden={true}>
          <div>
            <h3
              className={style.main_heading}
              style={{ color: "#FFF504" }}
              hidden={true}
            >
              <span style={{ fontSize: "20px" }}>
                {language === "kn" ? "ನಾಡಹಬ್ಬ" : "Naada Habba"}
              </span>{" "}
              <br />
              {language === "kn"
                ? "ಮೈಸೂರು ದಸರಾ - ೨೦೨೩"
                : "Mysuru Dasara - 2023"}
            </h3>
          </div>
        </div>
      </div>
      <div className={style.bg} hidden={true}>
        <div className={style.video_section}>
          {/* <iframe frameBorder="0" height="100%" width="100%" 
        src="https://www.youtube.com/embed/jGRIl6pcXoM?si=FRubKsxv5jIidiJA&amp;controls=0?autoplay=1">
      </iframe> */}
          <video autoPlay loop>
            <source src="https://res.cloudinary.com/dbghlle25/video/upload/v1696423505/videos/Traditional_Festival_Of_Indians_1_ylgl0p.mp4"></source>
          </video>
        </div>
        <div className={style.bg_image}></div>
        <div className={style.bg_arch}>
          <div className={style.min_centers}>
            <div className="flex justify-center items-center w-full">
              <Image
                className="mt-4"
                unoptimized
                src={image1}
                alt={"image1"}
                width={180}
                height={100}
              />
            </div>
            <div className="flex justify-between items-center px-4 gap-2">
              <p
                className="font-bold text-3xl "
                style={{ color: "#FFF504" }}
                hidden={true}
              >
                <span
                  className="text-center pl-12 mt-25"
                  style={{ marginTop: "30px" }}
                >
                  ನಾಡ ಹಬ್ಬ
                </span>{" "}
                <br />
                ಮೈಸೂರು ದಸರಾ - ೨೦೨೩
              </p>
              <Image
                className={style.gov_logo}
                unoptimized
                src={image_2}
                alt={"image1"}
                width={150}
                height={120}
              />
              <div>
                <h3 className={style.main_heading} style={{ color: "#FFF504" }}>
                  <span style={{ fontSize: "20px" }}>
                    {language === "kn" ? "ನಾಡಹಬ್ಬ" : "NaadaHabba"}
                  </span>{" "}
                  <br />
                  {language === "kn"
                    ? "ಮೈಸೂರು ದಸರಾ - ೨೦೨೩"
                    : "Mysuru Dasara - 2023"}
                </h3>
              </div>
              <Image
                className={`${style.redlogobg}`}
                unoptimized
                src={Elephantlogo}
                alt={"image1"}
                width={155}
                height={120}
              />

              <p
                className="font-bold text-3xl pr-4"
                style={{ color: "#FFF504" }}
                hidden={true}
              >
                <span
                  className="text-center pl-8 mt-25"
                  style={{ marginTop: "30px" }}
                >
                  Naada Habba
                </span>{" "}
                <br />
                Mysuru Dasara - 2023
              </p>
            </div>

            <div className={style.outer_main}>
              <div className={style.inner_left}>
                <div className={style.left_1}>
                  <Image
                    className={style.mys_min_image}
                    src={Siddaramaya}
                    alt={"Chief Minister"}
                  />
                  <p className={`${style.banner_desig_text}`}>
                    {" "}
                    <span className={style.min_names}>
                      {" "}
                      {language === "kn"
                        ? " ಶ್ರೀ ಸಿದ್ಧರಾಮಯ್ಯ"
                        : "Shri. Siddharamaiah"}{" "}
                    </span>{" "}
                    <br />
                    {language === "kn"
                      ? "ಮಾನ್ಯ ಮುಖ್ಯಮಂತ್ರಿಗಳು "
                      : " Hon'ble Chief Minister"}{" "}
                    <br />
                    {language === "kn"
                      ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                      : " Government of Karnataka "}
                  </p>
                </div>
                <div className={style.left_2}>
                  <Image
                    className={style.mys_min_image}
                    src={DkshivrajKumar}
                    alt={"DkshivrajKumar"}
                  />
                  <p className={`${style.banner_desig_text}`}>
                    {" "}
                    <span className={style.min_names}>
                      {" "}
                      {language === "kn"
                        ? " ಶ್ರೀ ಡಿ.ಕೆ. ಶಿವಕುಮಾರ್"
                        : "Shri D.K. Shivakumar "}{" "}
                    </span>{" "}
                    <br />
                    {language === "kn"
                      ? "ಮಾನ್ಯ ಉಪಮುಖ್ಯಮಂತ್ರಿಗಳು "
                      : "Hon'ble  Deputy Chief Minister"}{" "}
                    <br />
                    {language === "kn"
                      ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                      : " Government of Karnataka "}
                  </p>
                </div>
              </div>

              <div className={style.inner_right}>
                <div className={style.right_1}>
                  <Image
                    className={style.mys_min_image}
                    src={hcmadevappa}
                    alt={"hcmadevappa"}
                  />
                  <p className={`${style.banner_desig_text}`}>
                    {" "}
                    <span className={style.min_names}>
                      {" "}
                      {language === "kn"
                        ? " ಶ್ರೀ. ಎಚ್.ಸಿ. ಮಹದೇವಪ್ಪ"
                        : "Shri. H.C Mahadevappa "}{" "}
                    </span>{" "}
                    <br />
                    {language === "kn"
                      ? "ಮಾನ್ಯ ಸಚಿವರು ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆ "
                      : "Hon'ble Minister of Social Welfare "}{" "}
                    <br />
                    {language === "kn"
                      ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                      : " Government of Karnataka "}
                  </p>
                </div>
                <div className={style.right_2}>
                  <Image
                    className={style.mys_min_image}
                    src={shivraj}
                    alt={"shivraj"}
                  />
                  <p className={`${style.banner_desig_text}`}>
                    {" "}
                    <span className={style.min_names}>
                      {" "}
                      {language === "kn"
                        ? "ಶ್ರೀ ತಂಗಡಗಿ ಶಿವರಾಜ್ ಸಂಗಪ್ಪ"
                        : "Shri Tangadagi Shivaraj Sangappa"}{" "}
                    </span>{" "}
                    <br />
                    {language === "kn"
                      ? "ಮಾನ್ಯ ಸಚಿವರು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ "
                      : "Hon'ble Minister of Backward Classes Welfare "}{" "}
                    <br />
                    {language === "kn"
                      ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                      : " Government of Karnataka "}
                  </p>
                </div>
              </div>
            </div>
            
            <div
              className={`flex justify-between items-center pl-8 ${style.outer_hero}`}
              hidden={true}
            >
              <div className={style.inner_cms}>
                <div
                  className={`flex  flex-col justify-center items-center ${style.cm_outer}`}
                >
                  <Image
                    className={style.mys_min_image}
                    src={Siddaramaya}
                    alt={"Chief Minister"}
                  />
                  <p className={`${style.nametext} text-xs`}>
                    {" "}
                    <span className="font-semibold pl-2">
                      {" "}
                      {language === "kn"
                        ? " ಶ್ರೀ ಸಿದ್ಧರಾಮಯ್ಯ"
                        : "Shri. Siddharamaiah"}{" "}
                    </span>{" "}
                    <br />
                    {language === "kn"
                      ? "ಮಾನ್ಯ ಮುಖ್ಯಮಂತ್ರಿಗಳು "
                      : " Hon'ble Chief Minister"}{" "}
                    <br />
                    {language === "kn"
                      ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                      : " Government of Karnataka "}
                  </p>
                </div>
                <div
                  className={`flex  flex-col justify-center items-center ${style.dk_outer}`}
                >
                  <Image
                    className={style.shivraj}
                    src={DkshivrajKumar}
                    alt={"DkshivrajKumar"}
                    width={150}
                    height={120}
                  />
                  <p className={`${style.nametext} text-xs`}>
                    {" "}
                    <span className="font-semibold pl-2">
                      {" "}
                      {language === "kn"
                        ? " ಶ್ರೀ ಡಿ.ಕೆ. ಶಿವಕುಮಾರ್"
                        : "Shri D.K. Shivakumar "}{" "}
                    </span>{" "}
                    <br />
                    {language === "kn"
                      ? "ಮಾನ್ಯ ಉಪಮುಖ್ಯಮಂತ್ರಿಗಳು "
                      : "Hon'ble  Deputy Chief Minister"}{" "}
                    <br />
                    {language === "kn"
                      ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                      : " Government of Karnataka "}
                  </p>
                </div>
              </div>
              <div className={style.inner_cms}>
                <div
                  className={`flex  flex-col justify-center items-center ${style.hcm_outer}`}
                >
                  <Image
                    className={style.shivraj}
                    src={hcmadevappa}
                    alt={"hcmadevappa"}
                    width={150}
                    height={120}
                  />
                  <p className={`${style.nametext} text-xs`}>
                    {" "}
                    <span className="font-semibold pl-2">
                      {" "}
                      {language === "kn"
                        ? " ಶ್ರೀ. ಎಚ್.ಸಿ. ಮಹದೇವಪ್ಪ"
                        : "Shri H.C Mahadevappa "}{" "}
                    </span>{" "}
                    <br />
                    {language === "kn"
                      ? "ಮಾನ್ಯ ಸಚಿವರು ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆ  "
                      : "Hon'ble Minister of Social Welfare "}{" "}
                    <br />
                    {language === "kn"
                      ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                      : " Government of Karnataka "}
                  </p>
                </div>
                <div
                  className={`flex  flex-col justify-center items-center ${style.shiv_outer}`}
                >
                  <Image
                    className={style.shivraj}
                    src={shivraj}
                    alt={"shivraj"}
                    width={150}
                    height={120}
                  />
                  <p className={`${style.nametext} text-xs`}>
                    {" "}
                    <span className="font-semibold pl-2">
                      {" "}
                      {language === "kn"
                        ? " ಶ್ರೀ ತಂಗಡಗಿ ಶಿವರಾಜ್ ಸಂಗಪ್ಪ"
                        : "Shri Tangadagi Shivaraj Sangappa"}{" "}
                    </span>{" "}
                    <br />
                    {language === "kn"
                      ? "ಮಾನ್ಯ ಸಚಿವರು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ "
                      : "Hon'ble Minister of Backward Classes Welfare"}{" "}
                    <br />
                    {language === "kn"
                      ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                      : " Government of Karnataka "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className={style.bg_elephant}>
            <Image
              src={elephant}
              alt={"dasara_elephants"}
              width={500}
              height={500}
            ></Image>
          </div>
        </div>
      </div>

      <div className={style.carousal_main}>
        
      <Carousal items={comps}></Carousal>
      <Carousal items={todays}></Carousal>
      </div>
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
          
           <div className={style.main_tickets} style={{paddingTop: "8%"}}>
            {tickets && tickets?.map((ticket: any, index: number) => {
                return (<Tickets ticketType={language === 'kn' ? ticket?.ticket_title_kn ? ticket?.ticket_title_kn : ticket?.ticket_type : ticket?.ticket_type} ticketCost={ticket?.ticket_cost} ticketDate={ticket?.event_dates} ticketImage={ticket?.ticket_image} ticketLink={ticket?.ticket_link} ticketStatus={ticket?.ticket_status} ticketTitle={language === 'kn' ? ticket?.ticket_title_kn ? ticket?.ticket_title_kn : ticket?.ticket_title : ticket?.ticket_title} special={ticket?.special} ticket_content={language === 'kn' ? ticket?.ticket_details_kn ? ticket?.ticket_details_kn : ticket?.ticket_details : ticket?.ticket_details} index={index}></Tickets>)
            })}
        </div>
        </Modal>
      <div className={style.Time_bg}>
        <div
          className="mx-auto"
          style={{ margin: "0 auto", maxWidth: "1200px", display: "none"}}
        >
          
          <div className="">
            <Image src={stick} alt={"GoldenStick"} />
          </div>

          <div
            className="flex justify-center items-center  mt-8 "
            hidden={true}
          >
            <p
              className="text-7xl font-semibold"
              style={{
                color: "#FFF504",
                textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              ನಾಡ ಹಬ್ಬ ಮೈಸೂರು ದಸರಾ
            </p>
          </div>
          <div
            className="flex justify-center items-center pt-8"
            style={{ color: "#fff" }}
            hidden={true}
          >
            <p
              style={{
                fontSize: "1.5rem",
                textAlign: "center",
                lineHeightStep: "10px",
              }}
              className=" w-[70%] whitespace-pre-line  mb-12"
            >
              ‘ಮೈಸೂರು ದಸರಾ ಎಷ್ಟೊಂದು ಸುಂದರ’..... ಸಾಂಸ್ಕೃತಿಕ ನಗರಿ ಮೈಸೂರಿನಲ್ಲಿ
              ಸುಂದರ, ಸಡಗರ, ಸಂಭ್ರಮಕ್ಕಿರುವ ಇನ್ನೊಂದು ಹೆಸರೇ ದಸರಾ. ವಿಜಯನಗರ ಅರಸರಿಂದ
              ಆರಂಭವಾದ ಈ ಭವ್ಯ ವೈಭವಕ್ಕೆ ನಾಡಿನಲ್ಲಿ ಸಾಕಷ್ಟು ಮನ್ನಣೆ, ಪ್ರಾಮುಖ್ಯತೆ
              ದೊರಕಿದೆ. ಸುದೀರ್ಘ ಇತಿಹಾಸವಿರುವ ದಸರಾ ‘ಕರ್ನಾಟಕದ ನಾಡಹಬ್ಬ’ ಎಂದೇ
              ಪ್ರಸಿದ್ಧಿಯಾಗಿದೆ. ವಿಶ್ವವಿಖ್ಯಾತ ಮೈಸೂರು ದಸರಾ ಕರ್ನಾಟಕ ಸರ್ಕಾರ
              ನಡೆಸಿಕೊಂಡು ಬರುತ್ತಿರುವ ಅತ್ಯಂತ ದೊಡ್ಡ ಹಬ್ಬವಾಗಿದೆ.
            </p>
          </div>
          <div
            className="flex justify-center items-center mt-12  pb-12"
            hidden={true}
          >
            <Image src={stickbottom} alt={"GoldenStick"} height={70} />
          </div>
        </div>
        
      </div>
    </>
  );
}

export default HeroSection;
