import { React, useState } from "react";
import "./calendar.css";

import CalendarRoot from "react-calendar";
import Time from "./Time.js";
const Calendar = () => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);
  return (
    <div className="calendar">
      <div>
        <h4>Select Time</h4>
        <div className="calendar-container">
          <CalendarRoot
            onChange={setDate}
            value={date}
            minDate={new Date()}
            onClickDay={() => setShowTime(true)}
          />
        </div>

        <Time showTime={showTime} date={date} />
      </div>
    </div>
  );
};

export default Calendar;
