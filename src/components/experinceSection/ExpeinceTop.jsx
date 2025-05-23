import React from "react";
import ExpeinceTopLeft from "./ExpeinceTopLeft";
import ExpeinceTopMiddle from "./ExpeinceTopMiddle";
import ExpeinceTopRight from "./ExpeinceTopRight";
const ExpeinceTop = () => {
  return (
    <div className="flex lg:flex-row sm:flex-col gap-4 items-center justify-center ">
      <ExpeinceTopLeft />
      <ExpeinceTopMiddle />
      <ExpeinceTopRight />
    </div>
  );
};

export default ExpeinceTop;
