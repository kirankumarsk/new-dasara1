import { useLanguage } from "@/components/languageContext"
import getApiData from "@/utils/network";
import { useEffect, useState } from "react";
import Ticket from "@/components/Tickets";
import styles from "./styles.module.scss";
import { style } from "@mui/system";


const Tickets = () => {

    const [tickets, setTickets]:any[] = useState([]);
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
        async function getTickets() {
           const tickets = await getApiData("tickets");
           if(tickets) {
            setTickets(tickets);
           }
        }

        getTickets();
    }, []);
    const {language} = useLanguage();

    if (!hasMounted) {
        return null;
      }
    return(
        <>
        <div className={styles.ticket_parent}>
        <div className={styles.ticket_notice}>
            <h3 className={styles.ticket_note_heading}> {language === 'kn' ? tickets[3]?.ticket_title_kn : tickets[3]?.ticket_title}</h3>
            <p className={styles.ticket_note_content} > {language === 'kn' ? tickets[3]?.ticket_details_kn : tickets[3]?.ticket_details}</p>
        </div>
        <h3 className={styles.ticket_note_heading}> {language === 'kn' ? "ಬುಕಿಂಗ್ ಲಿಂಕ್‌ಗಳು ಶೀಘ್ರದಲ್ಲೇ ಲಭ್ಯವಾಗಲಿವೆ" : "Booking links coming soon .."}</h3>
        <div className={styles.main_tickets} style={{paddingTop: "8%"}}>
            {tickets && tickets?.map((ticket: any, index: number) => {

                {if(ticket?.ticket_type === 'extras') return}
                {if(ticket?.ticket_image == 'null') return (<></>)}
                return (<Ticket ticketType={language === 'kn' ? ticket?.ticket_title_kn ? ticket?.ticket_title_kn : ticket?.ticket_type : ticket?.ticket_type} ticketCost={ticket?.ticket_cost} ticketDate={ticket?.event_dates} ticketImage={ticket?.ticket_image} ticketLink={ticket?.ticket_link} ticketStatus={ticket?.ticket_status} ticketTitle={language === 'kn' ? ticket?.ticket_title_kn ? ticket?.ticket_title_kn : ticket?.ticket_title : ticket?.ticket_title} special={ticket?.special} ticket_content={language === 'kn' ? ticket?.ticket_details_kn ? ticket?.ticket_details_kn : ticket?.ticket_details : ticket?.ticket_details} index={index}></Ticket>)
            })}
        </div>
        <div className={styles.other_tickets} style={{visibility: "collapse"}}>
             <Ticket ticketType={language === 'kn' ? 'ಚಲನಚಿತ್ರೋತ್ಸವ' : 'Film Festival'} ticketCost={'500 ₹'} ticketDate={new Date()} ticketImage="https://imagedelivery.net/cJxV3Z5xUIYHcgsXUkFAMw/0ef1c83a-7f67-4522-d851-40d6793c8300/public" ticketLink="https://mysurudasarafilmfestival.in/" ticketStatus="Live" ticketTitle={language === 'kn' ? 'ಚಲನಚಿತ್ರೋತ್ಸವ' : 'Film Festival'} ticket_content={`Mysore Dasara Film Festival
Place : Inox, Mall Of Mysuru & DRC Habitat Mall
Contact :7411564510`} special={'false'} index={0}></Ticket>
        </div>
        </div>
        </>
    );
}

export default Tickets;
