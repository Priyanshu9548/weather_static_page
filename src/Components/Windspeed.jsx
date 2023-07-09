import React from 'react';

const SpeedGraph = ({ speed }) => {
  const rotation = speed * 1.8 - 90; // Calculate rotation angle for needle

  return (
    <div className="w-32 h-32 relative">
      <svg viewBox="0 0 100 100" className="transform rotate-90">
        <path
          className="fill-current text-blue-300"
          d="M50,10 A40,40 0 0,1 90,50 L50,50 Z"
        ></path>
        <path
          className="fill-current text-blue-500"
          d="M50,10 A40,40 0 0,0 10,50 L50,50 Z"
        ></path>
        <line
          x1="50"
          y1="10"
          x2="50"
          y2="20"
          className="stroke-current text-blue-500"
        ></line>
        <circle
          cx="50"
          cy="50"
          r="30"
          fill="transparent"
          stroke="#E5E7EB"
          strokeWidth="10"
        ></circle>
        <line
          x1="50"
          y1="50"
          x2="58"
          y2="80"
          className="stroke-current text-red-500"
          strokeWidth="2"
          transform={`rotate(${rotation} 50 50)`}
        ></line>
      </svg>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-2xl font-bold">{speed}</span>
        <span className="text-gray-600">mph</span>
      </div>
    </div>
  );
};

const Windspeed = () => {
  return (
    <div className="h-full">
      <div className="flex justify-between w-2/5">
        <SpeedGraph speed={65} />
        
      </div>
    </div>
  );
};

export default Windspeed;
