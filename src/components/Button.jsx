import React, { useState } from "react";

const Button = ({ variant = "default", children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const baseStyles = "font-medium text-center transition-colors";

  const variantStyles = {
    default: `w-[340px] h-[40px] rounded-[4px] px-5 py-2.5 bg-[#FFCE22]`,
    variant2: `w-[340px] h-[40px] rounded-[4px] px-5 py-2.5 bg-[#FFD84D]`,
    variant3: `w-[340px] h-[40px] rounded-[4px] px-5 py-2.5 bg-[#FFCE22]`,
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false); // Reset pressed state when mouse leaves
  };

  const handleMouseDown = () => {
    if (variant === "variant2") {
      setIsPressed(true);
    }
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  return (
    <button
      className={`${baseStyles} ${
        isHovered && variant === "default"
          ? variantStyles["variant2"]
          : isPressed && variant === "variant2"
            ? variantStyles["variant3"]
            : variantStyles[variant]
      }`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      {children}
    </button>
  );
};

export default Button;
