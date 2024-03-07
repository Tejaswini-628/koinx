import React, { useState } from 'react';

const TailwindSlider = () => {
  const [value, setValue] = useState(0); // State to hold the slider value

  // Function to handle slider change
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="w-full px-4 py-6">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-full h-4 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 appearance-none rounded-full"
      />
      <div className="flex justify-between mt-2 text-xs">
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </div>
    </div>
  );
};

export default TailwindSlider;
