import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import classes from "./styles.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import item_1 from "../assets/images/item_1.png";

// dynacially render our gallery data, this is just a sample
const data = [
  {
    img: item_1,
    title: "Food 1",
  },
  {
    img: item_1,
    title: "Food 1",
  },
  {
    img: item_1,
    title: "Food 1",
  },
  {
    img: item_1,
    title: "Food 1",
  },
  {
    img: item_1,
    title: "Food 1",
  },
  {
    img: item_1,
    title: "Food 1",
  },
  {
    img: item_1,
    title: "Food 1",
  },
  {
    img: item_1,
    title: "Food 1",
  },
  {
    img: item_1,
    title: "Food 1",
  },
  {
    img: item_1,
    title: "Food 1",
  },
  {
    img: item_1,
    title: "Food 1",
  },
  {
    img: item_1,
    title: "Food 1",
  },
  {
    img: item_1,
    title: "Food 1",
  },
];

const FoodCard = ({ img, title }) => {
  return (
    <div className=" bg-white group relative flex items-center justify-center   hover:bg-pri ">
      <img src={img} alt="food" className="w-[5em]" />
      <div className="absolute group-hover:hover:backdrop-sepia h-full w-full  flex items-center justify-center">
        <AiOutlineHeart
          size={24}
          color="white"
          className="group-hover:inline hidden"
        />
      </div>
    </div>
  );
};

const Gallery = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="text-white text-[18px]  flex md:flex-row flex-col">
      <div className={`${classes.galleryBg} flex-1 md:inline hidden`}></div>

      <div className="flex-1  bg-[#8D7288] md:px-[8rem] px-[2em] py-[6rem]">
        <p className="font-kau text-[28px] mb-[5rem]">Gallery</p>
        <div className="flex flex-wrap gap-4 ">
          {data.map((item, index) => {
            return <FoodCard key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
