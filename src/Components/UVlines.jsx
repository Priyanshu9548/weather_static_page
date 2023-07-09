import React from 'react';

const UVlines = () => {
  return (
    <div className="ml-2 mr-2">
      <span className="mr-2">0</span>
      <div className="h-2 w-full bg-gray-300 relative rounded-lg">
        <div className="bg-blue-500 h-full rounded-lg" style={{ width: '40%' }} />
        <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
          6-7
        </span>
        <span className="absolute bottom-0 right-0 mb-1">
          11+
        </span>
      </div>
    </div>
  );
};

export default UVlines;
