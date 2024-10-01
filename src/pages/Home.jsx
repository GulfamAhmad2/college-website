import React from "react";
import Section from "../components/Section";
import Slider from "react-slick";
import hero_1 from "../assets/image/hero_1.jpg";
import school from "../assets/image/school.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../components/Title";
import Button from "../components/Button";
import { courseDetails, notices, eventData } from "../constant";
import Card from "../components/Card";
import hero_img_1 from "../assets/image/2.webp";
import hero_img_2 from "../assets/image/8.webp";
import hero_img_3 from "../assets/image/3.webp";
import NoticeLink from "../components/NoticeLink";
import UpcomingEvent from "../components/UpcomingEvent";
import CardCom from "../components/CardCom";
import { Link } from "react-router-dom";

const Home = () => {
  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
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
          <p
            className="text-color-13 text-base font-normal leading-normal mt-4 pb-2 text-justify"
          >
            Gyanodaya College is dedicated to nurturing intellectual and
            personal growth, providing students with an environment where they
            can thrive academically and socially. Since its inception, Gyanodaya
            has been committed to offering quality education that fosters
            creativity, critical thinking, and professional development. With a
            wide range of undergraduate and postgraduate programs, we aim to
            equip our students with the knowledge and skills they need to excel
            in today’s dynamic world. At Gyanodaya, we believe in holistic
            education that emphasizes values, integrity, and a lifelong passion
            for learning. <Button link='/about' className="text-color-1"> Know More</Button>
          </p>
          
        </div>
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
      </div>
      {/* <div
        className=" bg-cover h-[700px] bg-center text-color-4 "
        style={{ backgroundImage: `url(${hero_1})` }}
      >
        <div className="flex items-center justify-center h-full bg-color-1 bg-opacity-50">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Our Website
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Your journey to excellence starts here
            </p>
            <a
              href="/get-started"
              className="px-6 py-3 bg-color-1 hover:duration-300 rounded-md text-lg"
            >
              Get Started
            </a>
          </div>
        </div>
      </div> */}
      {/* <Slider {...settings}>
        <img src={hero_1} alt="hero_img" className=" bg-no-repeat h-[700px]" />
        <img src={hero_2} alt="hero_img" className=" bg-no-repeat  h-[700px]" />
      </Slider> */}
      {/* <div className="mt-[100px]">
        <div className="flex gap-[2rem] justify-between max-w-[1440px] left-0 right-0 mx-auto ">
          <div>
            <img src={school} alt="school_image" width={500} height={500} />
          </div>
          <div className="flex flex-col  gap-[30px]">
            <div>
              <Title>About us</Title>
              <p className="text-[1rem] font-normal max-w-[765px] mt-[1.5rem]">
                Gyanodaya College is dedicated to nurturing intellectual and
                personal growth, providing students with an environment where
                they can thrive academically and socially. Since its inception,
                Gyanodaya has been committed to offering quality education that
                fosters creativity, critical thinking, and professional
                development. With a wide range of undergraduate and postgraduate
                programs, we aim to equip our students with the knowledge and
                skills they need to excel in today’s dynamic world. At
                Gyanodaya, we believe in holistic education that emphasizes
                values, integrity, and a lifelong passion for learning.
              </p>
            </div>
            <div>
              <Button link="/about" className="bg-color-1 text-color-4">
                Know More
              </Button>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="bg-[#f9f9f9] py-[100px] mt-4">
        <div className=" max-w-[1440px] left-0 right-0 mx-auto">
          <Title>Courses</Title>
          <div className="flex items-center justify-between mt-[50px] flex-wrap gap-4">
            {courseDetails.map((item) => (
              <Card
                key={item.id}
                img={item.img}
                title={item.title}
                text={item.desc}
              />
            ))}
          </div>
        </div>
      </div>
      <div
        className=" bg-cover h-[300px] bg-center text-color-4 "
        style={{ backgroundImage: `url(${resource_img})` }}
      >
        <div className="flex items-center justify-center h-full bg-color-1 bg-opacity-50">
          <div className="text-center">
            <p className="text-lg md:text-xl mb-4">
              Explore semester-wise notes and materials.
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Notes & Subjects
            </h1>
            <Button
              link="/resources"
              className=" text-color-4 border-2 border-color-2 hover:bg-color-1 duration-300"
            >
              View Resources
            </Button>
          </div>
        </div>
      </div> */}

      {/* <div className="bg-[#f8f9fa] p-6">
        <h1 className="text-3xl font-bold text-[#050d2d] mt-[100px] mb-12 text-center">
         Events & Notices
        </h1>

        Responsive Grid Layout
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          Notices Section
          <div className="bg-white p-4 border border-[#050d2d] rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-[#050d2d] mb-4">
              Notices
            </h2>
            {notices.map((notice, index) => (
              <NoticeLink key={index} {...notice} />
            ))}
          </div>

          Events Section
          <div className="bg-white p-4 border border-[#050d2d] rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-[#050d2d] mb-4">
              Upcoming Event
            </h2>
            <UpcomingEvent {...eventData} />
          </div>
        </div>
      </div> */}
    </Section>
  );
};

export default Home;
