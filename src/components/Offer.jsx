import React, { useEffect } from "react";
import classes from "./styles.module.css";
const Offer = () => {
  return (
    <div className="text-white text-[18px]  flex md:flex-row flex-col">
      <div className="flex-1 bg-[#005470] md:px-[10rem] px-[2rem] text-white py-[5rem]">
        <p className="font-kau text-[28px] mb-[5rem]">Exclusive Offer!s</p>
        <p className="text-[20px]">
          Enjoy 10% off when you order online delivery What Are You Waiting For
          ? Order With Us Now
        </p>

        <div className="flex items-center justify-end mt-[3rem]">
          <button className="mt-[3rem] hover:text-white px-[2rem] py-[1rem] bg-white text-pri  text-[18px] hover:bg-pri">
            Show more
          </button>
        </div>
      </div>
      <div className={`${classes.offerBg} flex-1 md:inline hidden`}></div>
    </div>
  );
};

export default Offer;
