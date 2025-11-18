import React from "react";
import decorationImg from "/img/levels.png";

function Decoration() {
  return (
    <>
      <div className="fixed top-0 right-0 z-50">
        <img src={decorationImg} alt="decoration image" />
      </div>
      <div className="fixed bottom-0 left-[3.35rem] rotate-180 z-50">
        <img src={decorationImg} alt="decoration image" />
      </div>
    </>
  );
}

export default Decoration;
