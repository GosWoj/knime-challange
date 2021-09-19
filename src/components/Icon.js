import React from "react";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";
import CasinoIcon from "@mui/icons-material/Casino";
import CenterFocusWeakIcon from "@mui/icons-material/CenterFocusWeak";

const Icon = ({ type }) => {
  if (type === "source") {
    return <CenterFocusStrongIcon fontSize="large" sx={{ color: "orange" }} />;
  } else if (type === "manipulator") {
    return <CasinoIcon fontSize="large" sx={{ color: "red" }} />;
  } else {
    return <CenterFocusWeakIcon fontSize="large" sx={{ color: "green" }} />;
  }
};

export default Icon;
