import Image from "next/image";
import styles from "./styles.module.scss";
import { useLanguage } from "../languageContext";

 interface Prop {
    ticketType: string,
    ticketTitle: string,
    ticketImage: string,
    ticketCost: string,
    ticketDate: Date,
    ticketLink: string,
    ticketStatus: string,
    special: string,
    ticket_content: string,
    index: number
}
export default function Tickets({
  ticketType,
  ticketTitle,
  ticketImage,
  ticketCost,
  ticketDate,
  ticketLink,
  ticketStatus,
  special, ticket_content, index}: Prop) {
    const {language} = useLanguage();
  return (
    <div className={styles.perticket}>
        <h1 className={styles.title}>{ticketTitle}</h1>
      <div className={styles.image}>
        <Image src={ticketImage} alt="Gold Card" width={300} height={300}></Image>
      </div>
      <div className={styles.content}>
        <p><span className={styles.ticket_name}>{ticketType}</span></p>
        <p style={{padding: "2%"}}> {language === 'kn' ? 'ಮೊತ್ತ' : 'Cost'} {" "}<span className={styles.ticket_cost}>{ticketCost}</span></p>
        <div dangerouslySetInnerHTML={{__html: ticket_content}} style={{marginBottom: "3%"}}></div>
        <a className={styles.link} href={ticketLink ? ticketStatus === 'LIVE' ? ticketLink : "" : "https://ticketgenie.in/event/mysuru-dasara-2023"} style={{color: "gold", pointerEvents: ticketStatus === 'LIVE' ? "auto" : "none"}}> {ticketStatus === 'LIVE' ? language === 'kn'? 'ಟಿಕೆಟ್ ಖರೀದಿಸಿ' : 'Buy Ticket' : language === 'kn' ? 'ಸೋಲ್ಡ್ ಔಟ್' : 'Sold Out'} </a>
      </div>
    </div>
  );
}
