import React from "react";

export const MyButton = ({ children, props }) => {
  return (
    <button className="my_button" {...props}>
      {children}
    </button>
  );
};
