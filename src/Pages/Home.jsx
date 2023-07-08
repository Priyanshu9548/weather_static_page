import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ThreeDots from "../Components/Threedots";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { GrPrevious, GrNext } from "react-icons/gr";
import { BsSun } from "react-icons/bs";
import weather from "../Images/weather.png";
import Chart from "../Components/Chart";
const Home = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleToggle = () => {
    setIsToggleOn((prevState) => !prevState);
  };

  return (
    <div className="bg-[#B5D8FF] h-screen flex justify-center items-center">
      <div className="w-3/4 h-5/6 bg-[#5C9CE5] rounded-3xl flex">
        <div>
          <div className="ml-12 text-sm">
            <div className="flex mt-8  ">
              <div className="w-6 h-6 rounded-md bg-white flex justify-center items-center">
                <span className="text-blue-500 ">
                  <IoMdAdd />
                </span>
              </div>
              <div className="ml-8 mt-2 ">
                <span>
                  <ThreeDots />
                </span>
              </div>
              <div className="text-white ml-5 ">
                {" "}
                <sup>o</sup>C
              </div>

              <div
                className={` text-white cursor-pointer flex items-center justify-center ${
                  isToggleOn ? "text-white" : "text-white"
                }`}
                onClick={handleToggle}
              >
                {isToggleOn ? (
                  <MdToggleOn className="w-[25px] h-[25px] ml-1" />
                ) : (
                  <MdToggleOff className="w-[25px] h-[25px] ml-1" />
                )}
              </div>
              <div className="text-white">
                {" "}
                <sup>o</sup>F
              </div>
            </div>
            <div className=" mt-8">
              <div className="flex text-white ">
                <CiLocationArrow1 className=" mt-1" />
                <p className="ml-2">New York, USA</p>
                <div className="ml-5 flex ">
                  <BsFillSunriseFill className="mt-1" />
                  <span className="ml-3">07:19</span>
                </div>
              </div>
              <div className="flex text-white mt-1 ">
                <p className="mr-7 text-gray-200">Today, 28 Sept</p>
                <div className="ml-5 flex ">
                  <BsFillSunsetFill className="mt-1" />
                  <span className="ml-3">19:32</span>
                </div>
              </div>
            </div>

            <div className="flex mt-16 text-white">
              <span className="text-white">
                <GrPrevious />
              </span>
              <div className="ml-10 text-7xl">
                <span>
                  {" "}
                  27<sup>o</sup>
                </span>
              </div>
              <GrNext className="ml-8" />
            </div>
            <div className="text-white flex justify-center items-center gap-2 mt-5">
              <BsSun />
              <span>Sunny</span>
            </div>
          </div>
          <div className="w-[210px]  fixed bottom-7  ">
            <img src={weather} alt="My_Image" />
          </div>
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default Home;
