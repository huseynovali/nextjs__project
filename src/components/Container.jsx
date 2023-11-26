import React from "react";

function Container({children,color = "transparant",col,display = "static",}) {
  return (
    <div className={`grid grid-cols-custom w-full`}>
      <div
        className={`grid relative z-50 ${
          col === "fluid" ? "col-span-full" : "col-start-2"
        } ${display}`}
        style={{ background: color }}
      >
        {children}
      </div>
    </div>
  );
}

export default Container;
