// src/components/ButtonDemo.jsx
import React from "react";
import Button from "./Button";

const ButtonDemo = () => {
  return (
    <div className="p-4 flex flex-col gap-2">
      <div>
        <h2 className="text-lg font-semibold mb-2">Default Button</h2>
        <Button variant="default">Done</Button>
      </div>

      <div className="mt-[60px]">
        <h2 className="text-lg font-semibold mb-2">Variant 2 Button</h2>
        <Button variant="variant2">Done</Button>
      </div>

      <div className="mt-[60px]">
        <h2 className="text-lg font-semibold mb-2">Variant 3 Button</h2>
        <Button variant="variant3">Done</Button>
      </div>
    </div>
  );
};

export default ButtonDemo;
