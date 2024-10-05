"use client";
import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import Image from "next/image";
import image1 from "../../../public/images/57533 [Converted] 1.png";
import image_2 from "../../../public/images/GovLogo.png";
import Elephantlogo from "../../../public/images/dasara_logo.png";
import Siddaramaya from "../../../public/images/md_cm.png";
import DkshivrajKumar from "../../../public/images/md_cm_2.png";
import hcmadevappa from "../../../public/images/md_cg_1.png";
import shivraj from "../../../public/images/md_cg_2.png";
import cd_bg from "../../../public/images/md_guest_bg_flower.png";
import Elephant from "../../../public/images/Elephant.png";
import stickbottom from "../../../public/images/stickbottom.png";
import stick from "../../../public/images/stick (2).png";
import { useLanguage } from "../../components/languageContext";
import CountdownTimer from "../Timer";
import stic from "../../../public/images/Group 1967.png";
import elephant from "../../../public/images/Elephant.png";
import frame from "../../../public/images/AboutusFrame1.svg";
import getApiData from "@/utils/network";
import eleph_left from "../../../public/images/md_bg_flower_rotation.png";
import gold_eleph_right from "../../../public/images/gold_eleph_right.png";
import gold_eleph_left from "../../../public/images/gold_eleph_left.png";
import raja_left from "../../../public/images/raja_left.png";
import raja_right from "../../../public/images/raja_right.png";
import { Modal } from "@mui/material";
import Tickets from "@/components/Tickets";
import bmysuru from "../../../public/images/md_brand_mysuru.png";
import md_eleph_left from "../../../public/images/md_elephant_left.png";
import md_eleph_right from "../../../public/images/md_elephant_right.png";
import md_banner_container from "../../../public/images/md_banner_container.png";
import md_banner_inner_image from "../../../public/images/md_banner_inner.png";
import Carousal from "../Carousal";
import Props from "../Carousal/index";
import ele_gif_left from "../../../public/images/elephant_left.gif";
import ele_gif_right from "../../../public/images/elpahant_right.gif";
import CurtainDrop from "../CurtainDrop";
import VideoPop from "../Tickets";
import ktaka_logo from "../../../public/images/ktaka.png";
import dynamic from "next/dynamic";
import LivePop from "../LiveTiles";
import MetaTags from "../MetaTags";

function HeroSection() {
  const { language } = useLanguage();
  const [comps, setComps] = useState([]);
  const [tickets, setTickets]: any[] = useState([]);
  const [open, setOpen] = useState(false);
  const [todays, settodays]: any[] = useState([]);
  const [hasMounted, setHasMounted] = useState(false);
  const [popupType, setPopUpType]: any = useState();
  const [liveEvents, setLiveEvents]: any[] = useState();

  useEffect(() => {
    setHasMounted(true);

    async function fetchMain() {
      const response = await getApiData("main_page");
      const pop = response[7]?.section_content_images_kn;
      const evs = response[6]?.section_content_images_kn;
      setLiveEvents(evs?.events);

      setPopUpType(pop);
      // response["title"] = language === "kn" ? "ಅವಲೋಕನ" : "Quick Overview";
      // setComps(response);
      // setOpen(false);
    }

    async function fetchData() {
      const response = await getApiData("overview?limit=50");
      // response["title"] = language === "kn" ? "ಅವಲೋಕನ" : "Quick Overview";
      setComps(response);
      setOpen(false);
    }

    async function fetchTickets() {
      const tickets = await getApiData("tickets");
      if (tickets) {
        setTickets(tickets);
        setOpen(true);
      }
    }

    async function fetchTodays() {
      const tickets = await getApiData("todays_event");
      if (tickets) {
        // tickets["title"] = language === "kn" ? " ಇವತ್ತಿನ ಕಾರ್ಯಕ್ರಮ ಗಳು" : "Today's Programs";
        settodays(tickets);
      }
    }
    fetchData();
    fetchTickets();
    fetchTodays();
    fetchMain();
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (
    <>
      {/* <CurtainDrop></CurtainDrop> */}
      <MetaTags 
      title="ಮೈಸೂರು ದಸರಾ 2024 | Mysuru Dasara 2024"
      description="ಮೈಸೂರು ದಸರಾದ ವೈಭವವನ್ನು ಅನುಭವಿಸಿ: ಬೆಳಗುವ ಅರಮನೆಗಳು, ಸಾಂಸ್ಕೃತಿಕ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಭವ್ಯ ಆನೆ ಮೆರವಣಿಗೆಯನ್ನು ಒಳಗೊಂಡ 10 ದಿನಗಳ ರಾಜಮನೆತನದ ಆಚರಣೆ. ಕರ್ನಾಟಕದ ಸಮೃದ್ಧ ಪರಂಪರೆಯನ್ನು ಸಜೀವಗೊಳಿಸುವುದನ್ನು ವೀಕ್ಷಿಸಿ || Experience the grandeur of Mysuru Dasara: A 10-day royal celebration featuring illuminated palaces, cultural performances, and a majestic elephant parade."
      ogImage={popupType?.ticket?.og_image ? popupType?.ticket?.og_image : "https://imagedelivery.net/cJxV3Z5xUIYHcgsXUkFAMw/d299215b-0dbc-4b4b-e457-ef160f1a0f00/public"}
      
    />
      <div className={style.top_eleph} suppressHydrationWarning={true}>
        <div className={`${style.eleph_left}`}>
          <Image
            unoptimized
            src={eleph_left}
            alt={"image1"}
            width={180}
            height={180}
            className={`${style.rotating}`}
          />
          <Image
            unoptimized
            src={image_2}
            alt={"image1"}
            className={style.nonrotors}
            style={{ position: "absolute" }}
          />
        </div>

        <div className={style.eleph_right}>
          <Image
            unoptimized
            src={eleph_left}
            alt={"image1"}
            width={180}
            height={180}
            className={`${style.rotating}`}
          />
          <Image
            unoptimized
            src={Elephantlogo}
            alt={"image1"}
            width={100}
            height={100}
            className={style.nonrotors}
            style={{ position: "absolute" }}
          />
        </div>
      </div>
      <div className={style.main_heading}>
        <h1 className={style.h1_heading}>
          <span style={{ fontSize: "larger" }}>
            {language === "kn" ? "ನಾಡಹಬ್ಬ" : "Naada Habba"}
          </span>{" "}
          <br />
          {language === "kn" ? "ಮೈಸೂರು ದಸರಾ - ೨೦೨೪" : "Mysuru Dasara - 2024"}
        </h1>
      </div>
      <div className={style.base_bg}>
        <div className={style.logo_section}>
          <Image
            className={style.gov_logo}
            unoptimized
            src={raja_left}
            // src={image_2}
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
        <div
          className={`${style.outer_main} ${style.glass_background} ${style.uber_glass}`}
        >
          {/* <div className={`${style.eleph_left1}`}>
          <Image
            unoptimized
            src={ele_gif_right}
            alt={"image1"}
          />
        </div> */}
          <div className={style.inner_left}>
            <div className={style.left_1}>
              <div>
                <Image
                  className={style.mys_min_image}
                  src={Siddaramaya}
                  alt={"Chief Minister"}
                />
              </div>
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
                    ? " ಡಾ. ಎಚ್.ಸಿ. ಮಹದೇವಪ್ಪ"
                    : "Dr H.C Mahadevappa "}{" "}
                </span>{" "}
                <br />
                {language === "kn"
                  ? "ಮಾನ್ಯ ಸಚಿವರು ಸಮಾಜ ಕಲ್ಯಾಣ ಇಲಾಖೆ ಹಾಗು ಮೈಸೂರು ಜಿಲ್ಲಾ ಉಸ್ತುವಾರಿ "
                  : "Hon'ble Minister of Social Welfare and Mysuru District In-charge"}{" "}
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
                  ? "ಮಾನ್ಯ ಸಚಿವರು ಹಿಂದುಳಿದ ವರ್ಗಗಳ ಕಲ್ಯಾಣ ಇಲಾಖೆ ಹಾಗೂ ಕನ್ನಡ ಮತ್ತು ಸಂಸ್ಕೃತಿ ಇಲಾಖೆ"
                  : "Hon'ble Minister of Backward Classes Welfare and Kannada & Culture Department"}{" "}
                <br />
                {language === "kn"
                  ? "ಕರ್ನಾಟಕ ಸರ್ಕಾರ "
                  : " Government of Karnataka "}
              </p>
            </div>
          </div>
          {/* <div className={`${style.elephleftright}`}>
          <Image
            unoptimized
            src={ele_gif_left}
            alt={"image1"}
          />
        </div> */}
        </div>

        <div className={`${style.elph_timer}`} hidden={false}>
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
      </div>
      <div>
        <div
          className={`${style.eleph_left_2}`}
          style={{ zIndex: "20", left: "-5%", top: "70%" }}
        >
          <Image
            unoptimized
            src={eleph_left}
            alt={"image1"}
            width={500}
            height={500}
            className={`${style.rotating}`}
          />
          <Image
            unoptimized
            src={gold_eleph_left}
            alt={"image1"}
            width={80}
            height={80}
            style={{ position: "absolute", paddingLeft: "3px" }}
          />
        </div>

        <div
          className={style.eleph_right_2}
          style={{ zIndex: "20", right: "-5%", top: "70%" }}
        >
          <Image
            unoptimized
            src={eleph_left}
            alt={"image1"}
            width={500}
            height={500}
            className={`${style.rotating}`}
          />
          <Image
            unoptimized
            src={gold_eleph_right}
            alt={"image1"}
            width={80}
            height={80}
            style={{ position: "absolute", paddingRight: "3px" }}
          />
        </div>
      </div>

      <div className={style.brandMysuru}>
        <div className={style.elepheftb}>
          <Image unoptimized src={stic} alt={"image1"} />
        </div>
        <div className={`${style.elepheft}`}>
          <Image
            unoptimized
            src={stic}
            alt={"image1"}
            className={`${style.rotating}`}
          />
          <Image
            unoptimized
            src={ktaka_logo}
            alt={"image1"}
            className={`${style.ktaka}`}
          />
        </div>
        <Image src={md_eleph_left} alt="dasara elephant" />
        <Image src={bmysuru} alt="dasara elephant" />
        <Image src={md_eleph_right} alt="dasara elephant" />
        <div className={`${style.elepheft}`}>
          <Image
            unoptimized
            src={stic}
            alt={"image1"}
            className={`${style.rotating}`}
          />
          <Image
            unoptimized
            src={ktaka_logo}
            alt={"image1"}
            className={`${style.ktaka}`}
          />
        </div>
        <div className={`${style.elepheftb}`}>
          <Image unoptimized src={stic} alt={"image1"} />
        </div>
      </div>

      <div className={style.banner_container}>
        <Image
          src={md_banner_container}
          alt={""}
          style={{ width: "100%", position: "absolute" }}
        />
        <Image src={md_banner_inner_image} alt={""} style={{ width: "100%" }} />
      </div>
      <div className={style.carousal_main}>
        <Carousal items={comps}></Carousal>
        <Carousal items={todays}></Carousal>
      </div>

      <Modal
        sx={{
          display: popupType?.ticket?.type === "live" ? "flex" : "none",
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
        {/* <div className={style.main_tickets} style={{paddingTop: "8%", display: popupType?.ticket?.type === 'live' ? "flex" : "none"}}>
            {tickets && tickets?.map((ticket: any, index: number) => {
              if(ticket?.ticket_type === 'extras') {return}
                return (<Tickets ticketType={language === 'kn' ? ticket?.ticket_title_kn ? ticket?.ticket_title_kn : ticket?.ticket_type : ticket?.ticket_type} ticketCost={ticket?.ticket_cost} ticketDate={ticket?.event_dates} ticketImage={ticket?.ticket_image} ticketLink={ticket?.ticket_link} ticketStatus={ticket?.ticket_status} ticketTitle={language === 'kn' ? ticket?.ticket_title_kn ? ticket?.ticket_title_kn : ticket?.ticket_title : ticket?.ticket_title} special={ticket?.special} ticket_content={language === 'kn' ? ticket?.ticket_details_kn ? ticket?.ticket_details_kn : ticket?.ticket_details : ticket?.ticket_details} index={index}></Tickets>)
            })}
        </div> */}
      <LivePop items={liveEvents} lang={language}></LivePop>
      </Modal>
      {/* Modal for video launch */}
      <Modal
        sx={{
          display: popupType?.ticket?.type === "visible" ? "flex" : "none",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto",
          borderRadius: "20px",
          overflow: "scroll",
        }}
        open={open}
        onClose={() => setOpen(false)}
      >
                    <VideoPop video_url={popupType?.ticket?.image}></VideoPop>
      </Modal>
      <div className={style.Time_bg}>
        <div
          className="mx-auto"
          style={{ margin: "0 auto", maxWidth: "1200px", display: "none" }}
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
