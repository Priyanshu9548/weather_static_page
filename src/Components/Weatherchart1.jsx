import React from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import Humiditylines from "./Humiditylines"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "12:00 AM", temperature: 25, rainProbability: 20 },
  { time: "3:00 AM", temperature: 24, rainProbability: 10 },
  { time: "6:00 AM", temperature: 23, rainProbability: 5 },
  { time: "9:00 AM", temperature: 28, rainProbability: 0 },
  { time: "12:00 PM", temperature: 30, rainProbability: 0 },
  { time: "3:00 PM", temperature: 32, rainProbability: 10 },
  { time: "6:00 PM", temperature: 29, rainProbability: 25 },
  { time: "9:00 PM", temperature: 26, rainProbability: 40 },
];

const WeatherChart = () => {
  return (
    <>
      <div className="h-400 w-400 rounded-3xl bg-white text-base">
        <div className="w-full">
          <div className="flex ">
            <div className="font-medium mr-64 mt-2 ml-4">Upcoming hours</div>
            <div className="flex text-sm gap-8 mt-2">
              <button
                className="rounded-lg w-36 h-6 bg-gray-300 flex items-center justify-center"
                style={{ marginTop: 10 }}
              >
                <span className="text-gray-400 mr-1">Rain precipitation</span>
                <RiArrowDownSLine className="text-gray-400" />
              </button>
              <button
                className="rounded-lg w-24 h-6 bg-gray-300 flex items-center justify-center"
                style={{ marginTop: 10 }}
              >
                <span className="text-black mr-1">Next days</span>
                <RiArrowRightSLine className="text-black" />
              </button>
            </div>
          </div>
        </div>
        <ResponsiveContainer width={750} height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <XAxis dataKey="time" stroke="black" tick={{ fontSize: 14 }} />

            <YAxis
              yAxisId="left"
              stroke="black"
              tick={{ fontSize: 14 }}
              label={{
                value: "Temperature (°C)",
                angle: -90,
                position: "insideLeft",
                fill: "#000000",
              }}
            />

            <YAxis
              yAxisId="right"
              stroke="black"
              orientation="right"
              tick={{ fontSize: 14 }}
              label={{
                value: "Rain Probability (%)",
                angle: -90,
                position: "insideRight",
                fill: "#000000",
              }}
            />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="temperature"
              stroke="#ff7300"
              yAxisId="left"
              name="Temperature"
            />
            <Line
              type="monotone"
              dataKey="rainProbability"
              stroke="#82ca9d"
              yAxisId="right"
              name="Rain Probability"
            />
            <Area
              type="monotone"
              dataKey="rainProbability"
              fill="#1f77b4"
              stroke="#1f77b4"
              fillOpacity={0.9}
              yAxisId="right"
              name="Water"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className=" mt-2">
        <p className="font-semibold">More details of today's weather</p>
        <div className="flex">
          <div className="w-52 h-32 bg-white rounded-3xl relative">
            <div className="flex mt-4 ml-5">
              <span className="text-sm font-semibold">Humidity</span>
              <WiHumidity className="text-blue-600 w-7 h-7 flex justify-end absolute top-2 right-5" />
            </div>
            <div className="flex justify-center items-center mt-1">
              <span className="font-semibold text-3xl mr-1">82%</span>
              <span>bad</span>{" "}
            
            </div>
            <div className="mt-2 flex justify-center items-center">
                <Humiditylines/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherChart;
