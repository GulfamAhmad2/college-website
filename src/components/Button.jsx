import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, link, children }) => {
  return (
    <Link
      className={`text-sm font-semibold leading-[21px] rounded-[70px] capitalize inline-block ${
        className || ""
      }`}
      to={link}
    >
      {children}
    </Link>
  );
};

export default Button;
