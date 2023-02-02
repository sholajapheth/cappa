import React, { useEffect } from "react";
import classes from "./styles.module.css";

const OnlyFreshFood = () => {
  return (
    <div className="flex  md:flex-row flex-col  ">
      <div className={`${classes.freshBg} flex-1 md:inline hidden`}></div>

      <div className="px-[3rem] py-[4rem] bg-[#8d7288] text-white text-[18px]  md:w-[35%]  h-screen ">
        <p className="font-kau text-[30px] my-[5rem]">Only Fresh Foods</p>
        <p>
          Only Fresh Food Also known as Knafeh to Arabic speakers, this iconic
          dessert has been around for centuries. This is also made with string
          pastry (shredded wheat or kadayif) soaked in sweet sugar syrup.
          However, the surprise is the creamy, unsalted goat's cheese inside.
          Mostly popular in the Arab world, the Turkish version hails from
          Hatay, a region that borders Syria.
        </p>
        <div className="flex flex-col gap-y-8 items-center mt-[2rem]"></div>
      </div>
    </div>
  );
};

export default OnlyFreshFood;
