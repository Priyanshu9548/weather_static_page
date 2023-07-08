import React from "react";
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
    <div className="h-400 w-400 rounded-3xl bg-white text-base">
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
  );
};

export default WeatherChart;
