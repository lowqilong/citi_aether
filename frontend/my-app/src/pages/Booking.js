import { Calendar } from "../components/index";
import "../components/calendar/booking.css";
import { useState } from "react";
import { RadioGropupInput } from "../components/radio/radioInputGroup";
export function Booking() {
  const data = [
    {
      title: "Strategy Consulting",
      details: "Portfolio performance analysis",
    },
    {
      title: "Financial Advisory",
      details: "Risk assessments and management",
    },
    {
      title: "Wealth Management",
      details: "Holistic wealth services",
    },
    {
      title: "Introductory Personal Financial",
      details: "Take your first baby step into investing with us",
    },
  ];
  return (
    <section className="booking">
      <h2 className="booking-header">We Focus on Your Financial health</h2>
      <p>
        Because our goal is to provide you with professional advise to take the
        first step into investing...
      </p>
      <h3>Select Service</h3>
      <div className="services">
        <RadioGropupInput data={data} />
      </div>
      <div>
        <Calendar  />
      </div>
    </section>
  );
}
