import React, { useRef, useState } from "react";
import classes from "./styles.module.css";
import emailjs from "@emailjs/browser";

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
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_j1f2z2k",
        "template_lp290uz",
        form.current,
        "rByzchZbi9h6j2Sc3"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully");
          setLoading(false);
        },
        (error) => {
          console.log(error.text);
          alert("Email not sent");
          setLoading(false);
        }
      );
  };

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
        <form onSubmit={sendEmail} ref={form} className="md:w-[40%] w-full ">
          <div className="flex flex-col gap-y-2">
            <label className="text-[18px]">Name</label>

            <input
              className="border-b-[1px] border-b-[#8d7288] hover:border-pri p-[1rem] text-[18px]"
              type="text"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-[18px]">Email</label>

            <input
              className="border-b-[1px] border-b-[#8d7288] hover:border-pri p-[1rem] text-[18px]"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <label className="text-[18px]">Message</label>
            <textarea
              className="border-b-[1px] border-b-[#8d7288] hover:border-pri p-[1rem] text-[18px]"
              type="textarea"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            disabled={loading}
            className="bg-orange-400 mt-[2rem] md:w-[30%] w-full text-center hover:bg-sec text-white py-[1rem] px-[2rem] "
          >
            {loading ? "Pls wait" : " Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
