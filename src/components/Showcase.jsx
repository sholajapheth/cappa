import React, { useEffect } from "react";
import classes from "./styles.module.css";
import logo_2 from "../assets/images/logo_2.png";
import foodcontainer from "../assets/images/foodcontainer.png";
import owl from "../assets/images/owl.gif";
import Aos from "aos";
import "aos/dist/aos.css";

const Showcase = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="flex  md:flex-row flex-col  ">
      <div
        className={` ${classes.showcaseBg} flex-1 relative flex  items-center p-[2rem]  text-white py-[6rem]`}
      >
        <img data-aos="fade-right" src={foodcontainer} alt="food" />
        <div data-aos="fade-right" className="md:w-[50%]">
          <p className="font-kau text-[22px]">Mix Cappa Kebab</p>
          <div className="w-full h-[1px] bg-white" />
          <p className="text-[13px] text-white">
            Shareable feast of charcoal-grilled kebabs - Adana Lamb, Adana
            Chicken, Shish Tawook, Shish Kabab and Chicken Wings. Served with
            butter rice and a garden salad.
          </p>
        </div>
      </div>
      <div className="px-[3rem] py-[4rem] bg-sec text-white text-[18px]  md:w-[35%] ">
        <img src={logo_2} alt="logo" className="m-auto mb-[5rem]" />
        <p>
          Cappadocia Turkish Restaurant Singapore serves traditional Turkish
          cuisine in a unique setting. Located in the heart of Singapore, the
          restaurant offers a variety of delicious dishes to enjoy. From
          traditional kebabs and flatbreads to dips and salads, Cappadocia
          ensures quality dishes each and every time.
        </p>
        <div className="flex flex-col gap-y-8 items-center mt-[2rem]">
          <img className="w-[15rem]" src={owl} alt="owl" />

          <button className="hover:text-pri">Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
