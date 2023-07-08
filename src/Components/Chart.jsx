import React from "react";
import { BsThreeDots } from "react-icons/bs";
import human from "../Images/profilejpg.jpg"
import WeatherChart from "./Weatherchart1";
const Chart = () => {
  return (
    <div className="ml-10">
      <div className="w-[860px] h-full bg-[#E4F1FF] rounded-3xl relative">
        <div className=" flex justify-between items-center">
          <div className="mt-8 ml-5">
            <p>
              <span className="font-semibold">Welcome back Priyanshu!</span>
            </p>
            <p>
              <span>Check out today's weather information</span>
            </p>
          </div>
          <div className="flex justify-end mr-32 mt-9 gap-2">
            <BsThreeDots className="mt-2" />
            <div className="w-8 h-8 flex justify-center items-center  ">
            <img className="rounded-lg" src={human} alt="My_Image" />
          </div>
          </div>
        </div>
        <div className="ml-8 mr-8 mt-1 ">
        <WeatherChart />
        </div>
      </div>
    </div>
  );
};

export default Chart;
