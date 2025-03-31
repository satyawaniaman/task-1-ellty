import React from "react";
import { Checkbox } from "../components/CheckBox";
import Button from "../components/Button";

const FrameDemo = () => {
  // First image shows a modal-like component with shadow
  // Second image shows it in a frame with border and label
  const isFramed = true; // Toggle between the two presentations

  return (
    <div
      className={`relative ${isFramed ? "border border-dashed border-purple-500 p-6" : ""}`}
    >
      {/* Main component */}
      <div
        className={`w-[400px] mx-auto bg-white rounded-lg`}
        style={{
          boxShadow: isFramed
            ? "0px 0px 4px 0px #1414141A"
            : "0px 8px 15px 0px #1414141F",
        }}
      >
        {/* All pages heading section */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-lg ">All pages</span>
            <div className="border border-gray-300 rounded-md">
              <Checkbox variant={1} />
            </div>
          </div>
        </div>

        {/* First line dropdown - darker and with padding */}
        <div className="px-4">
          <div className="border-t border-gray-300"></div>
        </div>

        {/* Pages section */}
        <div className="px-6">
          {/* Page 1 */}
          <div className="flex items-center justify-between py-4">
            <span>Page 1</span>
            <div className="border border-gray-300 rounded-md">
              <Checkbox variant={1} />
            </div>
          </div>

          {/* Page 2 */}
          <div className="flex items-center justify-between py-4">
            <span>Page 2</span>
            <div className="border border-gray-300 rounded-md">
              <Checkbox variant={1} />
            </div>
          </div>

          {/* Page 3 */}
          <div className="flex items-center justify-between py-4">
            <span>Page 3</span>
            <div className="border border-gray-300 rounded-md">
              <Checkbox variant={1} />
            </div>
          </div>

          {/* Page 4 */}
          <div className="flex items-center justify-between py-4">
            <span>Page 4</span>
            <div className="border border-gray-300 rounded-md">
              <Checkbox variant={1} />
            </div>
          </div>
        </div>

        {/* Second line dropdown - darker and with padding */}
        <div className="px-4 mt-4">
          <div className="border-t border-gray-300"></div>
        </div>

        {/* Button section */}
        <div className="p-6">
          <Button variant="variant3">Done</Button>
        </div>
      </div>

      {/* Label at the bottom - only shown in framed mode */}
      {isFramed && (
        <div className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 bg-purple-500 text-white text-xs px-2 py-1 rounded">
          Frame
        </div>
      )}
    </div>
  );
};

export default FrameDemo;
