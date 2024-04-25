import React from "react";

const Card = ({ children }) => {
  return (
    <div className="relative flex flex-col justify-center items-center bg-sky-100 rounded-md">
      {children}
    </div>
  );
};

export default Card;
