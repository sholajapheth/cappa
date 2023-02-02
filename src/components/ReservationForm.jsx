import React from "react";
import classes from "./styles.module.css";

const ReservationForm = () => {
  return (
    <div className={classes.footerBg}>
      <div className="flex flex-col text-sec mt-[2rem] md:w-[75%] w-full  lg:w-[62%] m-auto p-[2em] ">
        <div className="text-center">
          <p className=" md:text-[34px] text-[18px]">Make a Reservation</p>
          <p className="  md:text-[19px] mt-[10px]">
            Select your details and we’ll try get the best seats for you!
          </p>
        </div>

        <div className=" mt-[2em] flex md:flex-row flex-col items-end gap-8  w-full">
          <div className="flex flex-col gap-y-2 flex-1">
            <label className=" text-[16px]">Party Size</label>
            <select className="border-b-[1px] border-b-[#8d7288] hover:border-pri p-[1rem] text-[16px]">
              <option value="2 guests">2 guests</option>
              <option value="3 guests">3 guests</option>
              <option value="4 guests">4 guests</option>
              <option value="5 guests">5 guests</option>
              <option value="6 guests">6 guests</option>
              <option value="7 guests">7 guests</option>
              <option value="8 guests">8 guests</option>
              <option value="9 guests">9 guests</option>
              <option value="10 guests">10 guests</option>
              <option value="11 guests">11 guests</option>
              <option value="12 guests">12 guests</option>
            </select>
          </div>

          <div className="flex flex-col gap-y-2 mt-[2em] flex-1">
            <label className=" text-[16px]">Date</label>
            <input
              className="border-b-[1px] border-b-[#8d7288] hover:border-pri p-[1rem] text-[16px]"
              type="date"
            />
          </div>

          <div className="flex flex-col gap-y-2 mt-[2em] flex-1">
            <label className=" text-[16px]">Time</label>
            <select className="border-b-[1px] border-b-[#8d7288] hover:border-pri p-[1rem] text-[16px]">
              <option value="6:00 PM">6:00 PM</option>
              <option value="6:30 PM">6:30 PM</option>
              <option value="7:00 PM">7:00 PM</option>
              <option value="7:30 PM">7:30 PM</option>
              <option value="8:00 PM">8:00 PM</option>
              <option value="8:30 PM">8:30 PM</option>
              <option value="9:00 PM">9:00 PM</option>
            </select>
          </div>
        </div>

        <div className="mt-[4rem]">
          <div className="py-[3rem] border-b-sec border-b-2 text-[16px]">
            {/* update the dtate according to the date selected  */}
            <p>
              There are no available tables for: 2 guests on Feb 2, 2023, at
              1:45 AM
            </p>
          </div>

          <div className="text-[16px] mt-[3rem]">
            <p>Other dates that match your time:</p>
            <div className="mt-[2rem]">
              <p>Feb 2, 2023</p>
              <div className="flex flex-wrap gap-8">
                {
                  // map through the available tables and display them
                  [
                    {
                      id: 1,
                      time: "6:00 PM",
                      availableTables: 2,
                    },
                    {
                      id: 2,
                      time: "6:30 PM",
                      availableTables: 2,
                    },
                    {
                      id: 3,
                      time: "7:00 PM",
                      availableTables: 2,
                    },
                    {
                      id: 4,
                      time: "7:30 PM",
                      availableTables: 2,
                    },
                    {
                      id: 5,
                      time: "8:00 PM",
                      availableTables: 2,
                    },
                    {
                      id: 6,
                      time: "8:30 PM",
                      availableTables: 2,
                    },
                    {
                      id: 7,
                      time: "9:00 PM",
                      availableTables: 2,
                    },

                    {
                      id: 8,
                      time: "9:30 PM",
                      availableTables: 2,
                    },
                    {
                      id: 9,
                      time: "10:00 PM",
                      availableTables: 2,
                    },
                    {
                      id: 10,
                      time: "10:30 PM",
                      availableTables: 2,
                    },
                  ].map((item) => (
                    <button className="border-sec hover:border-orange-400 hover:text-orange-400 border-2 text-sec py-[0.5rem] px-[2.5rem] mt-[1em] ">
                      {item.time}
                    </button>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="flex">
            <p className="text-orange-400 underline mt-6 text-[14px] border-b border-b-orange-400 ">
              Show more available dates and times
            </p>
          </div>
          <div className=" text-center w-full">
            <button className="bg-orange-400 hover:bg-sec text-white py-[1rem] px-[2rem] mt-[3rem]">
              Make a Reservation
            </button>
            <p className="text-orange-400 underline mt-6 text-[14px] ">
              Show more available dates and times
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
