import React from "react";
import styles from "./styles.module.scss";
import Icon from "../../../public/images/Mask group.png";
import Hamsa from "../../../public/images/hamsa.png";
import Image from "next/image";
import { useLanguage } from "../../components/languageContext";
import BG1 from '../../../public/images/GuestBg1.png';
import BG2 from '../../../public/images/GuestBg2.png'
import GuestDetails from "./guestDetails";
const Guest = () => {
  const { language } = useLanguage();
  return (
    <GuestDetails></GuestDetails>
  );
};

export default Guest;
