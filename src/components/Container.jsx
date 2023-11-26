import React from "react";

function Container({ children, color = "transparant", col }) {


  return (
    <div className={`grid grid-cols-custom w-full`}>
      <div
        className={`grid ${col === "fluid" ? "col-span-full" : "col-start-2"} `}
        style={{ background: color }}
      >
        {children}
      </div>
    </div>
  );
}

export default Container;
