// src/components/ButtonDemo.jsx
import React from "react";
import Button from "./Button";

const ButtonDemo = () => {
  return (
    <div className="relative w-[380px] h-[200px] rounded-[5px] p-5 flex flex-col justify-between">
      <Button variant="default">Done</Button>
      <Button variant="variant2">Done</Button>
      <Button variant="variant3">Done</Button>
    </div>
  );
};

export default ButtonDemo;
