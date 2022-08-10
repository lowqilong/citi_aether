import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { Button } from "../Button";
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
    alert('Successfully submitted')
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
      <button type="button" disabled={disabled} onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Times;
