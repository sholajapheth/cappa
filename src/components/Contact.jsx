import React from "react";
import classes from "./styles.module.css";

const Input = ({ label, type, placeholder }) => {
  return (
    <div className="flex flex-col gap-y-2">
      <label className="text-[18px]">{label}</label>
      {type === "textarea" ? (
        <textarea
          className="border-b-[1px] border-b-[#8d7288] hover:border-pri p-[1rem] text-[18px]"
          placeholder={placeholder}
        ></textarea>
      ) : (
        <input
          className="border-b-[1px] border-b-[#8d7288] hover:border-pri p-[1rem] text-[18px]"
          type={type}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

const Contact = () => {
  return (
    <div className={`${classes.contactBg} relative md:p-0 p-[2em]`}>
      <div className="absolute inset-0 bg-pri opacity-95"></div>
      <div className="flex md:flex-row flex-col gap-y-[4rem] md:py-[10rem] py-[5rem] items-start justify-around relative z-10   text-white">
        <div>
          <p className="font-kau text-[30px] my-[5rem]">Contact Us</p>
          <p className="text-[18px]">
            69 Bussorah Street, Singapore 199482 Singapore{" "}
          </p>
        </div>
        <div className="md:w-[40%] w-full ">
          <Input label="Name" type="text" placeholder="Enter your name" />
          <Input label="Email" type="email" placeholder="Enter your email" />
          <Input
            label="Message"
            type="textarea"
            placeholder="Enter your message"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
