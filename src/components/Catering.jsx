import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./styles.module.css";

const Catering = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="text-white text-[18px]  flex md:flex-row flex-col">
      <div className={`${classes.cateringBg} flex-1 md:inline hidden`}></div>

      <div className="flex-1 p-[3rem] bg-[#5b6670] py-[6rem] ">
        <p className="font-kau text-[28px] mb-[5rem]">Catering</p>
        <div data-aos="fade-left" className=" flex-2 flex flex-col gap-y-6">
          <p>
            The atmosphere at Cappadocia is inviting and warm, boasting an
            outdoor terrace for alfresco dining. The decor is tasteful with a
            modern take on trends from the past. It's a great place for a
            special night out or for a leisurely family meal.
          </p>
          <p>
            The service at Cappadocia is friendly and attentive. The wait staff
            are always available to answer questions about dishes and make sure
            to check in throughout the meal. ​
          </p>
          <p>
            If you're looking for an authentic Turkish dining experience in
            Singapore, be sure to check out Cappadocia. From the delicious food
            to the welcoming atmosphere, it's sure to make your visit
            unforgettable
          </p>
        </div>
        <div className="flex items-end justify-end w-full">
          <button className=" mt-[3rem] hover:text-pri  ">Show more</button>
        </div>
      </div>
    </div>
  );
};

export default Catering;
