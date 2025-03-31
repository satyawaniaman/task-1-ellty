import React, { useState, useRef } from "react";

export const Checkbox = ({ variant }) => {
  const [isChecked] = useState(variant >= 4 && variant <= 7);
  const [currentVariant, setCurrentVariant] = useState(variant);
  // Store the original variant to track the checkbox's origin
  const originalVariant = useRef(variant);

  const getVariantClasses = () => {
    const baseClasses =
      "w-6 h-6 rounded-md flex items-center justify-center cursor-pointer";

    switch (currentVariant) {
      case 1:
        return `${baseClasses} bg-white`;
      case 2:
        return `${baseClasses} bg-white ring-1 ring-gray-200`;
      case 3:
        return `${baseClasses} bg-white ring-2 ring-purple-300 ring-opacity-20`;
      case 4:
        return `${baseClasses} bg-blue-600`;
      case 5:
        return `${baseClasses} bg-blue-600`;
      case 6:
        return `${baseClasses} bg-blue-400`;
      case 7:
        return `${baseClasses} bg-blue-600`;
      case 8:
        return `${baseClasses} bg-white`;
      case 9:
        return `${baseClasses} bg-white shadow-inner ring-1 ring-gray-200 ring-opacity-50`;
      case 10:
        return `${baseClasses} bg-white`;
      default:
        return baseClasses;
    }
  };

  const handleMouseEnter = () => {
    if (currentVariant === 1) setCurrentVariant(2);
    if (currentVariant === 5) setCurrentVariant(6);
    if (currentVariant === 8) setCurrentVariant(8);
    if (currentVariant === 4) setCurrentVariant(6);
    if (currentVariant === 7) setCurrentVariant(8);
    if (currentVariant === 8) setCurrentVariant(2);
  };

  const handleMouseLeave = () => {
    // Always revert to the original variant on mouse leave
    setCurrentVariant(originalVariant.current);
  };

  const handleInteraction = (e) => {
    // Handle all mouse interactions in one place
    if (originalVariant.current === 1 && currentVariant === 2) {
      setCurrentVariant(9); // variant 1 hovered (showing as 2) changes to 9 when clicked
    } else if (originalVariant.current === 2) {
      // Added this condition: variant 2 changes to 9 when clicked
      setCurrentVariant(9);
    } else if (originalVariant.current === 5 && currentVariant === 6) {
      setCurrentVariant(7); // variant 5 hovered (showing as 6) changes to 7 when clicked
    } else if (originalVariant.current === 9) {
      // Force it to be variant 4 (blue) when variant 9 is clicked
      setCurrentVariant(4); // variant 9 changes to 4 when clicked
    } else if (currentVariant === 6) {
      // Any variant 6 (including those coming from variant 4 hover) changes to 7 when clicked
      setCurrentVariant(7);
    }
  };

  const renderCheckmark = () => {
    if (
      currentVariant === 2 ||
      currentVariant === 9 ||
      currentVariant === 4 ||
      currentVariant === 6 ||
      currentVariant === 7 ||
      isChecked
    ) {
      let strokeColor = "white";

      if (currentVariant === 8 || currentVariant === 2)
        strokeColor = "#E5E7EB"; // Lightest grey
      else if (currentVariant === 9) strokeColor = "#9CA3AF"; // Standard grey

      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={strokeColor}
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      );
    }
    return null;
  };

  return (
    <div
      className={getVariantClasses()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleInteraction}
    >
      {renderCheckmark()}
    </div>
  );
};
