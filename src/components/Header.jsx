import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { SlMenu } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";

const NavButton = ({ name, link }) => {
  const path = window.location.pathname;
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (path === link) {
      setActive(true);
    }
  }, []);

  return (
    <NavLink to={link}>
      <div className=" flex flex-col gap-y-4 text-pri group">
        <div
          className={`w-full h-[2px] bg-pri group-hover:h-[4px]  ${
            active && "h-[4px]"
          }`}
        />
        <p className="md:text-[18px] ">{name} </p>
      </div>
    </NavLink>
  );
};

const Button = ({ name, dark }) => (
  <button
    className={`${
      dark
        ? "bg-pri hover:bg-white border-pri hover:text-pri text-white"
        : "bg-white border-pri hover:bg-pri  hover:text-white text-pri "
    } border p-4 rounded-md text-[18px] font-normal  `}
  >
    {name}
  </button>
);
const DesktopNav = () => {
  return (
    <div className="px-[5rem] py-[2rem] items-center justify-between bg-white md:flex hidden">
      <img src={logo} alt="logo" className="w-[12em]" />

      <div className="flex items-center gap-x-6">
        <NavButton name="Home" link="/" />
        <NavButton name="Reservation" link="/reservation" />
      </div>
      <div className="flex items-center gap-x-4">
        <Button name="Online Order" dark />
        <Button name="Book A Table" />
      </div>
    </div>
  );
};

const MobileNav = ({ setShow }) => (
  <div className="bg-white h-[15rem] flex flex-col items-center relative z-10 pt-[3rem] md:hidden ">
    <div className="flex items-center w-full justify-between px-[2rem]">
      <div className="w-4 h-4  " />
      <div className="flex flex-col items-center gap-y-4  ">
        <img src={logo} alt="logo" className="w-[10em]" />
        <div className="flex flex-col items-center gap-y-4 ">
          <Button name="Online Order" dark />
          <Button name="Book A Table" />
        </div>
      </div>
      <button onClick={() => setShow(true)}>
        <SlMenu className="text-[22px]  text-pri" />
      </button>
    </div>
  </div>
);

const Navs = ({ setShow }) => {
  return (
    <div
      className=" 
    absolute z-40 w-full"
    >
      <div
        className="bg-white 
  h-screen relative  w-full flex justify-center items-center 
  "
      >
        <button
          onClick={() => setShow(false)}
          className="absolute top-10 right-10 text-[2rem]"
        >
          <AiOutlineClose />
        </button>
        <div
          className="flex  items-center
      flex-col gap-y-8 text-pri text-[22px] 
      "
        >
          <NavLink
            onClick={() => setShow(false)}
            activeStyle={{
              color: "red",
              fontWeight: "bold",
            }}
            to={"/"}
          >
            Home
          </NavLink>

          <NavLink onClick={() => setShow(false)} to={"/reservation"}>
            Reservation
          </NavLink>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show && <Navs setShow={setShow} />}
      <DesktopNav />
      <MobileNav setShow={setShow} />
    </>
  );
};

export default Header;
