import React from "react";
import classes from "./styles.module.css";
import item_1 from "../assets/images/item_1.png";
import item_2 from "../assets/images/item_2.png";

const MenuItem = ({ name, img, inverse }) => (
  <div className="flex md:flex-row  flex-col-reverse gap-y-4 justify-between items-center py-[4rem]">
    {inverse ? (
      <>
        <img src={img} alt={name} />
        <p className="text-[40px] text-[#5b6670] font-kau ">{name}</p>
      </>
    ) : (
      <>
        <p className="text-[40px] text-[#5b6670] font-kau">{name}</p>
        <img src={img} alt={name} />
      </>
    )}
  </div>
);

const Menu = () => {
  return (
    <div className={`${classes.menuBg} md:p-[9rem] p-[3rem] `}>
      <p className="font-kau md:text-[40px] text-[30px] text-[#5b6670] text-center">
        Menu & Sweets
      </p>
      <div className="md:w-[70%] w-full mt-[3rem]">
        <p className="font-kau text-[20px] text-[#5b6670] mb-[4rem]">
          What we Offer
        </p>
        <p className="text-[18px]">
          Offering an abundant Turkish feast alongside its signature sweets.
          Whether you are looking for a lavish dine-in feast, a catering
          experience that will leave your guests in awe, a healthy take-out, or
          simply quality time with your loved ones, CAPPA will always deliver by
          staying true to its family values of Turkish authenticity,
          hospitality, and quality to all its guests .
        </p>
      </div>

      <div>
        <MenuItem name={"Iskender Kebab"} img={item_1} />
        <MenuItem name={"Chicken Mandi"} img={item_2} inverse />
      </div>

      <div className="flex items-end justify-center mt-4 w-full">
        <button className="bg-pri px-[4rem] py-[1rem] text-white text-[18px]">
          Menu
        </button>
      </div>
    </div>
  );
};

export default Menu;
