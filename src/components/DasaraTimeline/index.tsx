import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import { Console } from 'console';
import { useLanguage } from '../languageContext';


interface progList {
  date_en: string,
  date_kn: string,
  day_en: string,
  day_kn: string,
  details_en: string,
  details_kn: string

}
export default function CustomizedTimeline(items: any) {
 
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const {language} = useLanguage();
  let eventDate: Date = new Date(items?.items?.date_en);
  let displayDate = eventDate.toLocaleString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (

    <div>
   
      
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          {language === 'kn'? items?.items?.details_kn : items?.items?.details_en}
        </TimelineOppositeContent>
        <TimelineSeparator>
         
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '2px', px: 2, color: 'white' }}>
          <Typography variant="h6" component="span">
            {language === 'kn'? items?.items?.title_kn : items?.items?.title_en}
          </Typography>
          {/* <p> {eventDate.getDate() + " "+ new Date().getDate()}</p> */}
          <Typography style={{whiteSpace: "break-spaces", color: eventDate.getDate() < new Date().getDate() ? "red" : (eventDate.getDate() === new Date().getDate() ? "greenyellow" : "#FFF504"), textDecoration: eventDate.getDate() < new Date().getDate() ? "line-through" : eventDate.getDate() === new Date().getDate() ? "underline" : ""}}>{displayDate} {eventDate.getDate() === new Date().getDate() ? (language == "kn" ? "(Today)" : "(ಇವತ್ತು)") : ""}</Typography>
        </TimelineContent>
      </TimelineItem>

      </div>
  );

}