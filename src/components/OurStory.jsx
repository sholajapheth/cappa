import React, { useEffect } from "react";
import classes from "./styles.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const OurStory = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="text-white text-[18px]  flex md:flex-row flex-col">
      <div className={`${classes.ourStoryBg} flex-1 md:inline hidden`}></div>

      <div className="flex-1 p-[3rem] bg-[#8D7288]">
        <p className="font-kau text-[28px] my-[5rem]">Our Food Story</p>
        <div data-aos="fade-left" className="md:w-[70%] flex flex-col gap-y-6">
          <p>
            Located in the historic Kampong Glam, an enclave of the iconic Arab
            Street – which has long been well known for its streets of authentic
            Turkish, Mediterranean and Middle Eastern fare. It is a vibrant and
            bustling street with diners spilling out onto the curbs and pathways
            filled with aromas of spices, herbs and grilled delicacies.
            CAPPADOCIA Turkish Restaurant – or CAPPA in short, is a purveyor of
            fine Turkish & Mediterranean cuisine prepared by the most
            experienced of Turkish chefs.
          </p>
          <p>
            Under the helm of a new management team, the restaurant takes on a
            new journey in providing an exquisite menu, great dining ambience
            and excellent hospitality. As we reopen our doors in March 2022, we
            have been serving high quality interpretations of classic dishes as
            well as tasty new ventures into uncharted territories of Turkish
            food. We will continue to strive to bring you an authentic taste of
            Turkey and more. We welcome you to visit us for a gastronomical
            experience today!
          </p>
        </div>
        <div className="flex items-end justify-end w-full">
          <button className=" mt-[3rem] hover:text-pri  ">Show Location</button>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
