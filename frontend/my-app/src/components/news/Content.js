import React from "react";
import { useLocation } from "react-router-dom";
const Content = () => {
  const location = useLocation();
  const { index, title, link } = location.state;


  return (
    <div>
      <p>{index}</p>
      <p>{title}</p>
    </div>
  );
};

export default Content;
