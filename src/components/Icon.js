import React from "react";
import { IconContext } from "react-icons/lib";
import { SiNodeRed } from "react-icons/si";

const Icon = ({ type }) => {
  if (type === "source") {
    return (
      <IconContext.Provider value={{ color: "orange", size: "3rem" }}>
        <SiNodeRed />
      </IconContext.Provider>
    );
  } else if (type === "manipulator") {
    return (
      <IconContext.Provider value={{ color: "#fff600", size: "3rem" }}>
        <SiNodeRed />
      </IconContext.Provider>
    );
  } else {
    return (
      <IconContext.Provider value={{ color: "green", size: "3rem" }}>
        <SiNodeRed />
      </IconContext.Provider>
    );
  }
};

export default Icon;
