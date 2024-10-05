import yt from "../../../public/images/fb_qr.png";
import fb from "../../../public/images/youtube_qr.png";
import Image from "next/image";
import { useLanguage } from "../languageContext";
import style from './styles.module.scss';

export default function StreamLinks() {

    const {language} = useLanguage();

    return (
        <div className={style.outer}>
            <div className={style.left}>
                <h1 style={{padding: "2%"}}>{language === 'kn' ? 'ಯೂಟ್ಯೂಬ್ ನೇರ ಪ್ರಸಾರಕ್ಕಾಗಿ ಕೆಳಗಿನ QR ಕೋಡ್ ನ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ' : "Scan the QR code below to watch Youtube LIVE STREAM"}</h1>
            <Image className={style.img} src={"https://imagedelivery.net/cJxV3Z5xUIYHcgsXUkFAMw/215cf91b-9e37-4bac-6a6d-e7d777589900/public"} alt={"Yotube Stream Link"} height={200} width={200}/> 
            </div>
            <div className={style.right}>
            <h1 style={{padding: "2%"}}>{language === 'kn' ? 'ಫೇಸ್ಬುಕ್ ನೇರ ಪ್ರಸಾರಕ್ಕಾಗಿ ಕೆಳಗಿನ QR ಕೋಡ್ ನ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ' : "Scan the QR code below to watch Facebook LIVE STREAM"}</h1>
            <Image className={style.img} src={"https://imagedelivery.net/cJxV3Z5xUIYHcgsXUkFAMw/215cf91b-9e37-4bac-6a6d-e7d777589900/public"} alt={"Yotube Stream Link"} height={200} width={200}/>
            </div>
        </div>
    )
}