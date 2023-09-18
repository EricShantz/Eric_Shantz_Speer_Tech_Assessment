import React from "react"
import '../css/list-items.css';
import { format } from 'date-fns';
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';


const GenerateListItems = (callHistory) =>{

    const groupedCalls = {};

    const sortedCalls = callHistory.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });

    sortedCalls.forEach((item) => {
      const date = format(new Date(item.created_at), "yyyy-MM-dd");
      if (!groupedCalls[date]) {
        groupedCalls[date] = [];
      }
      groupedCalls[date].push(item);
    });

    const getIconForCallType = (type) => {
        switch (type) {
          case "missed":
            return <PhoneMissedIcon style={{color:'red'}} className="icon-base"/>; 
          case "incoming":
            return <CallReceivedIcon className="icon-base"/>; 
          case "outgoing":
            return<PhoneForwardedIcon className="icon-base"/>; 
          default:
            return <PhoneDisabledIcon className="icon-base"/>; 
        }
      };

    const formatDateTime = (dateTimeString) =>{
        return format(new Date(dateTimeString), "HH:mm");
    }

    const HandleListItemClick = (id) =>{
        
    }

    const listItems = [];
    for (const date in groupedCalls) {
      listItems.push(
        <div key={date}>
          <h2>{format(new Date(date), "MMMM d, yyyy")}</h2>
          {groupedCalls[date].map((item, index) => (
            <div className="call-item" key={item.id} onClick={()=>{HandleListItemClick(item.id)}}>
            {getIconForCallType(item.call_type)}
            <p className="call-from">{item.from || "Unknown"}</p>
            <p className="date-time">{formatDateTime(item.created_at) || "N/A"}</p>            </div>
          ))}
        </div>
      );
    }
  
    return listItems;
  };

export default GenerateListItems;
