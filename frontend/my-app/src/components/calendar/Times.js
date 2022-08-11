import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { Button } from "../Button";
var FileSaver = require('file-saver');
const time = [
  { slot: 1, time: "10:00", bookings: [] },
  { slot: 2, time: "11:00", bookings: [] },
  { slot: 3, time: "14:00", bookings: [] },
  { slot: 4, time: "15:00", bookings: [] },
  { slot: 5, time: "16:00", bookings: [] },
];

function Times(props) {
  const [event, setEvent] = useState(null);
  const [eventType, setEventType] = useState(null);
  const [info, setInfo] = useState(false);
  const [disabled, setDisable] = useState(true);
  function displayInfo(e) {
    if (localStorage.getItem("type")) {
      setEventType(localStorage.getItem("type"));
      setInfo(true);
      setEvent(e.target.innerText);
      setDisable(false);
      console.log(props.date.toDateString());
      console.log(e.target.innerText);
    }
  }

  function handleSubmit(){
    var startTime = parseInt(event.slice(0,2)+ "0000");
    
    let date1 = props.date.toISOString().slice(0,10).split('-')
    let day1 = Number(date1.splice(2))+1
    date1.push(day1)
    let newDate1 = date1.join('')
    var endTime = startTime + 10000;
    alert(`Successfully submitted. \n A file will be downloaded. \n Click on it to save the consultation to your calendar`)
    var msg = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Aether//Event Scheduler//EN\nBEGIN:VEVENT\nSUMMARY:Aether Consultation${eventType}\nUID:22f15698-b368-4b24-ae96-a84d55da6fe1\nSTATUS:CONFIRMED\nTRANSP:TRANSPARENT\nDTSTART:${newDate1}T${startTime}\nDTEND:${newDate1}T${endTime}\nDTSTAMP:20220810T161534\nDESCRIPTION:Aether Consultation with Financial Expert\nEND:VEVENT\nEND:VCALENDAR`;
    var blob = new Blob([msg], { type: "data:text/calendar;charset=utf-8" });
    FileSaver.saveAs(blob, "AetherFinanceConsultation.ics");
    localStorage.setItem("eventType",eventType)
  }
  return (
    <div className="times">
      <div className="times-wrapper">
        {time.map(({ time }, index) => {
          return (
            <div key={index} className="appointment-btn">
              <Button children={time} onClick={(e) => displayInfo(e)} />
            </div>
          );
        })}
      </div>

      <div>
        {info && localStorage.getItem("type")===eventType
          ? `Your appointment for ${localStorage.getItem(
              "type"
            )} is set to ${event} ${props.date.toDateString()} `
          : null}
      </div>
      {/* <button type="button" disabled={disabled} onClick={handleSubmit}>
        Submit
      </button> */}
      <Button disabled={disabled} onClick={handleSubmit}>Schedule</Button>
    </div>
  );
}

export default Times;
