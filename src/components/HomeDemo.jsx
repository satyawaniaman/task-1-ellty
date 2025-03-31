import React from "react";
import { Checkbox } from "./CheckBox";

const HomeDemo = () => {
  return (
    <div className="relative w-[410px] h-[520px] border border-dashed border-[#9747FF] rounded-[5px] p-4">
      {/* Checkbox rows */}
      <div className="flex flex-col gap-3">
        {/* Row 1 */}
        <div className="flex items-center justify-between w-[370px] h-[42px] bg-white px-[22px] pr-[15px] py-2 rounded">
          <span>All pages</span>
          <div className="border border-gray-300 rounded-md">
            <Checkbox variant={1} />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex items-center justify-between w-[370px] h-[42px] bg-white px-[22px] pr-[15px] py-2 rounded">
          <span>All pages</span>
          <Checkbox variant={2} />
        </div>

        {/* Row 3 */}
        <div className="flex items-center justify-between w-[370px] h-[42px] bg-white px-[22px] pr-[15px] py-2 rounded">
          <span>All pages</span>
          <Checkbox variant={9} />
        </div>

        {/* Row 4 */}
        <div className="flex items-center justify-between w-[370px] h-[42px] bg-white px-[22px] pr-[15px] py-2 rounded">
          <span>All pages</span>
          <Checkbox variant={6} />
        </div>

        {/* Row 5 */}
        <div className="flex items-center justify-between w-[370px] h-[42px] bg-white px-[22px] pr-[15px] py-2 rounded">
          <span>All pages</span>
          <Checkbox variant={5} />
        </div>

        {/* Row 6 */}
        <div className="flex items-center justify-between w-[370px] h-[42px] bg-white px-[22px] pr-[15px] py-2 rounded">
          <span>All pages</span>
          <Checkbox variant={6} />
        </div>

        {/* Row 7 */}
        <div className="flex items-center justify-between w-[370px] h-[42px] bg-white px-[22px] pr-[15px] py-2 rounded">
          <span>All pages</span>
          <div className="border border-gray-300 rounded-md">
            <Checkbox variant={7} />
          </div>
        </div>

        {/* Row 8 */}
        <div className="flex items-center justify-between w-[370px] h-[42px] bg-white px-[22px] pr-[15px] py-2 rounded">
          <span>All pages</span>
          <Checkbox variant={2} />
        </div>
      </div>

      {/* Label at the bottom */}
      <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-[#9747FF] text-white text-xs px-2 py-1 rounded">
        Home
      </div>
    </div>
  );
};

export default HomeDemo;
