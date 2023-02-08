import React from "react";
import food_1 from "../assets/images/food_1.png";
import food_2 from "../assets/images/food_2.png";
import owl from "../assets/images/owl.gif";
import clasess from "./styles.module.css";
import { FaTripadvisor } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={clasess.footerBg}>
      <div className="md:px-[20rem]  p-[2em] flex flex-col items-center justify-center">
        <div className="flex items-center w-full justify-between">
          <img src={food_1} alt="food_1" className="md:w-[15rem] w-[7rem]" />
          <img className="md:w-[15rem] w-[7rem]" src={owl} alt="owl" />
          <img src={food_2} alt="food_2" className="md:w-[15rem] w-[7rem]" />
        </div>
        <div className="my-[4rem] text-center flex flex-col items-center justify-center">
          <p className="font-[700] text-[30px] text-[#5b6670] text-center">
            ENJOY AUTHENTIC TURKISH FOOD AND SWEETS IN THE COMFORT OF YOUR HOME
          </p>
          <button className="mt-[3rem] hover:text-white px-[2rem] py-[1rem] bg-pri  text-white  text-[18px] hover:bg-sec">
            Order Via Web
          </button>

          <div className="flex gap-[2rem] items-center my-[4rem]">
            <a
              href="https://www.tripadvisor.com/Restaurant_Review-g294265-d20150083-Reviews-CAPPAdocia_TURKISH_MEDITERRANEAN_RESTAURANT-Singapore.html"
              target={"_blank"}
            >
              <FaTripadvisor className="text-black text-[30px] mx-[1rem]" />
            </a>
            <a
              href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FCappasg"
              target={"_blank"}
            >
              <BsFacebook className="text-black text-[30px] mx-[1rem]" />
            </a>

            <a
              href="  https://www.instagram.com/cappadociaturkishrestaurant/"
              target={"_blank"}
            >
              <BsInstagram className="text-black text-[30px] mx-[1rem]" />
            </a>
            <a href="https://www.tiktok.com/@cappadocia_sg" target={"_blank"}>
              <FaTiktok className="text-black text-[30px] mx-[1rem]" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCFSwDHL9GC4GCmKMI6N_QPg"
              target={"_blank"}
            >
              <BsYoutube className="text-black text-[30px] mx-[1rem]" />
            </a>
          </div>
        </div>
        <p className="text-[20px] text-black mt-[4rem]">
          Copyright © 2023 CAPPA Restaurant SG
        </p>
      </div>
    </div>
  );
};

export default Footer;
