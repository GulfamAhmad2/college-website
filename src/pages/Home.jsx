import React from "react";
import Section from "../components/Section";
import Slider from "react-slick";
import hero_1 from "../assets/image/hero_1.jpg";
import school from "../assets/image/school.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../components/Title";
import Button from "../components/Button";
import { courseDetails, notices, eventData, gallery } from "../constant";
import Card from "../components/Card";
import hero_img_1 from "../assets/image/2.webp";
import hero_img_2 from "../assets/image/8.webp";
import hero_img_3 from "../assets/image/3.webp";
import NoticeLink from "../components/NoticeLink";
import UpcomingEvent from "../components/UpcomingEvent";
import CardCom from "../components/CardCom";
import { Link } from "react-router-dom";
import Testimonial from "../components/Testimonial";
import UpcomingEvents from "../components/Event";
import { motion } from 'framer-motion';


const Home = () => {
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };
  return (
    <Section className=" flex gap-[30px] ">
      <div className="max-w-[800px] w-full">
        <Slider {...settings}>
          <div className=" bg-color-4 p-[6px] w-full relative overflow-hidden">
            <img className="h-[396px] w-full" src={hero_img_1} alt="hero_img" />
            <div className="p-[20px] bg-black/60 absolute left-[6px] bottom-[6px] text-color-4">
              <h2 className="text-color-4 text-xl font-semibold">
                Welcome to our website
              </h2>
              <p className="text-color-6 text-[1rem] font-medium">paragraph</p>
            </div>
          </div>
          <div className=" bg-color-4 p-[6px] w-full relative overflow-hidden">
            <img className="h-[396px] w-full" src={hero_img_2} alt="hero_img" />
            <div className="p-[20px] bg-black/60 absolute left-[6px] bottom-[6px] text-color-4">
              <h2 className="text-color-4 text-xl font-semibold">
                Welcome to our website
              </h2>
              <p className="text-color-6 text-[1rem] font-medium">paragraph</p>
            </div>
          </div>
          <div className=" bg-color-4 p-[6px] w-full relative overflow-hidden">
            <img className="h-[396px] w-full" src={hero_img_3} alt="hero_img" />
            <div className="p-[20px] bg-black/60 absolute left-[6px] bottom-[6px] text-color-4">
              <h2 className="text-color-4 text-xl font-semibold">
                Welcome to our website
              </h2>
              <p className="text-color-6 text-[1rem] font-medium">paragraph</p>
            </div>
          </div>
        </Slider>
        <div className="mt-[30px] bg-color-4 p-5 ">
          <Title>About Us</Title>
          <p className="text-color-13 text-base font-normal leading-normal mt-4 pb-2 text-justify">
            Gyanodaya College is dedicated to nurturing intellectual and
            personal growth, providing students with an environment where they
            can thrive academically and socially. Since its inception, Gyanodaya
            has been committed to offering quality education that fosters
            creativity, critical thinking, and professional development. With a
            wide range of undergraduate and postgraduate programs, we aim to
            equip our students with the knowledge and skills they need to excel
            in today’s dynamic world. At Gyanodaya, we believe in holistic
            education that emphasizes values, integrity, and a lifelong passion
            for learning.{" "}
            <Button link="/about" className="text-color-1">
              Know More
            </Button>
          </p>
        </div>
        <CardCom header="Up Coming Event" className="mt-[30px] min-h-[300px]">
          <UpcomingEvents />
        </CardCom>
      </div>
      <div className="flex-1">
        <CardCom header="Notice" className="min-h-[408px]">
          <div className="flex flex-col  px-5">
            {notices.map((item, index) => (
              <Link
                className=" capitalize border-b border-dashed border-b-color-8 text-base font-bold text-color-2 py-4 "
                key={index}
                to={item.link}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </CardCom>
        <CardCom header="Testimonials" className="mt-[35px]">
          <Testimonial />
        </CardCom>
        <CardCom header="Gallery" className="mt-[35px]">
          <div className="flex flex-wrap gap-3 justify-between px-5 pt-5">
            {/* {gallery.map(({ img, id }) => (
              <div className="w-[90px]  object-cover" key={id}>
                <img src={img} alt="img" className="object-cover" />
              </div>
            ))} */}
            {gallery.slice(0,9).map((image, index) => (
          <motion.div
            key={image.id}
            className="relative  overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.img}
              alt={image.alt}
              className="object-cover  w-[90px]  transition-transform duration-500 ease-in-out hover:scale-110"
            />
           
          </motion.div>
        ))}
          </div>
          
          <Button link='gallery' className="flex items-center justify-center py-4 text-color-1 font-bold">view More</Button>

        </CardCom>
      </div>
    </Section>
  );
};

export default Home;
