import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Icon1 from "../../../public/images/glodframe.svg";
import Icon from "../../../public/images/glodframe1.svg";
import SocialIcon from "../../../public/images/social_media_gif.gif";
import Logo from "../../../public/images/FooterIm.svg";
import upperbr from "../../../public/images/glodframe1.svg";
import upperlo from "../../../public/images/GoldenStick.png";
import Image from "next/image";
import { useLanguage } from "../../components/languageContext";
import GetApi from "../../utils/network";
import { useRouter } from "next/router";
import { TwitterEmbed, InstagramEmbed, FacebookEmbed } from 'react-social-media-embed';

const SocialMediaFeed = () => {
  const [loading, setLoading] = useState(false);
  const [socialData, setSocialData] = useState([{
    platform: "",
    postUrl: "",
    title_en: "",
    title_kn: ""
  }]);
  const { language } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const resp = await GetApi("social_media_posts");
        console.log(resp, ">>>>");
        setSocialData(resp);
        setLoading(false);
      } catch (error) {
        // console.error(error?.message);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const renderSocialEmbed = (platform: any, url: any) => {
    console.log("The soicial media links ", platform, url);
    switch (platform) {
        
      case 'twitter':
        return <TwitterEmbed url={url} width={350} />;
      case 'insta':
        return <InstagramEmbed url={url} width={350} height={400}/>;
      case 'fb':
        return <FacebookEmbed url={url} width={350} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.bg}>
      <Image width={2000} src={Icon} alt="icon" />
      <h3 className={styles.social_heading}>
            {language === "kn" ? "ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ನವೀಕರಣ" : "Social Media Updates"}
          </h3>
      <div className="row">
        <div className="col-4">
          <div className={styles.socialIcon}>
            <Image width={600} src={SocialIcon} alt="SocialMediaIcon" />
          </div>
        </div>
        <div className="flex flex-col col-8 ">
          
          
          <div className={styles.content}>
            <div className={styles.social_feed_container} style={{ maxHeight: router.pathname.includes("/social") ? "100%" : "400px", overflowY: "scroll", overflowX: "hidden" }}>
              {socialData.map((post, index) => (
                <div key={index} className={styles.social_post}>
                  <h4 style={{color: "gold"}}>{language === "kn" ? post.title_kn : post.title_en}</h4>
                  {renderSocialEmbed(post.platform, post.postUrl)}
                </div>
              ))}
            </div>
          </div>
         
        </div>
      </div>
      {/* <Image width={2000} src={Icon} alt="icon" /> */}
    </div>
  );
};

export default SocialMediaFeed;
