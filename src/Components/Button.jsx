import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="px-2 py-1 m-2 bg-slate-300 rounded-lg text-sm ">{name}</button>
    </div>
  );
};

export default Button;
