import React from "react";
import Breadcrumb from "./Breadcrumb";
// import img from "../assets/image/2.webp";
import img from "../assets/image/hero_img.jpg";

const Hero = ({ className, children, text }) => {
  return (
    <div
      className="  bg-cover bg-center text-color-4"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className=" py-[110px] flex flex-col items-center justify-center  bg-color-1 bg-opacity-50">
        <h3 className="text-[2.1rem] font-bold">{children}</h3>
        <p className="text-color-4 text-xl font-normal tracking-tight pt-1">{text}</p>
        <Breadcrumb />
      </div>
    </div>
  );
};

export default Hero;
