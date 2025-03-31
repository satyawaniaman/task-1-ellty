// src/components/ButtonDemo.jsx
import React from "react";
import Button from "./Button";

const ButtonDemo = () => {
  return (
    <div className="relative w-[380px] h-[200px] border border-dashed border-[#9747FF] rounded-[5px] p-5 flex flex-col justify-between">
      <Button variant="default">Done</Button>
      <Button variant="variant2">Done</Button>
      <Button variant="variant3">Done</Button>

      <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-[#9747FF] text-white text-xs px-2 py-1 rounded">
        Buttons
      </div>
    </div>
  );
};

export default ButtonDemo;
