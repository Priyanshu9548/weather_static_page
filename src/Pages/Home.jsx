import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import ThreeDots from "../Components/Threedots";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import { CiLocationArrow1 } from "react-icons/ci";
import { BsFillSunriseFill, BsFillSunsetFill } from "react-icons/bs";
import { GrPrevious, GrNext } from "react-icons/gr";
const Home = () => {
  const [isToggleOn, setIsToggleOn] = useState(false);

  const handleToggle = () => {
    setIsToggleOn((prevState) => !prevState);
  };

  return (
    <div className="bg-[#B5D8FF] h-screen flex justify-center items-center">
      <div className="w-3/4 h-4/5 bg-[#5C9CE5] rounded-3xl flex">
        <div>
          <div className="flex mt-16  ml-12">
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
              className={` text-white cursor-pointer items-center justify-between ${
                isToggleOn ? "text-white" : "text-white"
              }`}
              onClick={handleToggle}
            >
              {isToggleOn ? (
                <MdToggleOn className="w-7 h-6 ml-1" />
              ) : (
                <MdToggleOff className="w-7 h-6 ml-1" />
              )}
            </div>
            <div className="text-white">
              {" "}
              <sup>o</sup>F
            </div>
          </div>
          <div className=" ml-12 mt-8">
            <div className="flex text-white ">
              <CiLocationArrow1 className=" mt-1" />
              <p className="ml-2">New York, USA</p>
              <div className="ml-8 flex ">
                <BsFillSunriseFill className="mt-1" />
                <span className="ml-3">07:19</span>
              </div>
            </div>
            <div className="flex text-white mt-1 ">
              <p className="mr-7 text-gray-200">Today, 28 Sept</p>
              <div className="ml-8 flex ">
                <BsFillSunsetFill className="mt-1" />
                <span className="ml-3">19:32</span>
              </div>
            </div>
          </div>

          <div className="flex ml-12 mt-16 text-white">
            <span className="text-white"><GrPrevious /></span>
            <div className="ml-10 text-7xl">
            <span > 27<sup>o</sup></span></div>
            <GrNext className="ml-8"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
