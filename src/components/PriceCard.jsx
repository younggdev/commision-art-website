import React from "react";

function PriceCard({ price, title, desc, accent }) {
  return (
    <div className="rounded-lg border-2 border-slate-200 p-5 flex group hover:shadow-lg transition duration-300 ease-in-out">
      <div
        style={{ backgroundColor: `#${accent}` }}
        className={`text-left p-5 rounded-full my-auto font-bold group-hover:shadow-lg transition duration-300`}
      >
        <span className="lg:text-xl text-base">{price}k</span>
      </div>
      <div className="pl-5">
        <h2 className="font-bold lg:text-xl text-base">{title}</h2>
        <p className="lg:text-base text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default PriceCard;
