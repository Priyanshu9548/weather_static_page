// import React from 'react';

const Line = ({ percent, label }) => {
  return (
    <div
      className="
       space-x-2"
    ><span>{label}</span>
      <div className="h-2 rounded-lg bg-gray-300">
        <div
          className={`h-full rounded-lg ${
            percent >= 70
              ? "bg-blue-500"
              : percent >= 33
              ? "bg-blue-300"
              : "bg-blue-100"
          }`}
          style={{ width: `${percent}%` }}
        ></div>
      </div>
      
    </div>
  );
};

const App = () => {
  return (
    <div className="flex gap-6">
      <Line percent={100} label="Good" />
      <Line percent={70} label="Normal" />
      <Line percent={33} label="Bad" />
    </div>
  );
};

export default App;
